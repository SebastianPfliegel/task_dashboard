USE master
GO
IF NOT EXISTS (
    SELECT name
    FROM sys.databases
    WHERE name = N'myapp'
)
CREATE DATABASE myapp
GO
USE myapp
GO
IF OBJECT_ID('dbo.User', 'U') IS NOT NULL
DROP TABLE [dbo].[User]
GO
CREATE TABLE [dbo].[User]
(
    [Id] BIGINT IDENTITY(1, 1) NOT NULL,
    [EMail] NVARCHAR(255) NOT NULL,
    [Password] NVARCHAR(MAX) NOT NULL
)
GO
ALTER TABLE [dbo].[User]
ADD CONSTRAINT pk_User PRIMARY KEY ([Id])
GO
ALTER TABLE [dbo].[User]
ADD CONSTRAINT uq_User_EMail UNIQUE ([EMail])
GO
IF OBJECT_ID('dbo.Task', 'U') IS NOT NULL
DROP TABLE [dbo].[Task]
GO
CREATE TABLE [dbo].[Task]
(
    [Id] BIGINT IDENTITY(1, 1) NOT NULL,
    [User] BIGINT NOT NULL,
    [Description] NVARCHAR(50) NOT NULL
)
GO
ALTER TABLE [dbo].[Task]
ADD CONSTRAINT pk_Task PRIMARY KEY ([Id])
GO
ALTER TABLE [dbo].[Task]
ADD CONSTRAINT fk_Task_User FOREIGN KEY ([User]) REFERENCES [dbo].[User] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE
GO
