-- -- Create a new table called '[Status]' in schema '[dbo]'
-- -- Drop the table if it already exists
-- IF OBJECT_ID('[dbo].[Status]', 'U') IS NOT NULL
-- DROP TABLE [dbo].[Status]
-- GO
-- -- Create the table in the specified schema
-- CREATE TABLE [dbo].[Status]
-- (
--     [Id] INT NOT NULL IDENTITY PRIMARY KEY, -- Primary Key column
--     [Status] NVARCHAR(25) NOT NULL,
--     -- Specify more columns here
-- );
-- GO

-- -- Create a new table called '[Plan]' in schema '[dbo]'
-- -- Drop the table if it already exists
-- IF OBJECT_ID('[dbo].[Plan]', 'U') IS NOT NULL
-- DROP TABLE [dbo].[Plan]
-- GO
-- -- Create the table in the specified schema
-- CREATE TABLE [dbo].[Plan]
-- (
--     [Id] INT NOT NULL IDENTITY PRIMARY KEY, -- Primary Key column
--     [Plan] NVARCHAR(50) NOT NULL,
--     [CoverageAmount] INT NOT NULL,
--     [RegistrationDate] DATETIME NOT NULL,
--     [Status] INT NOT NULL FOREIGN KEY REFERENCES Status(Id)
--      -- Specify more columns here
-- );
-- GO
-- -- Create a new table called '[Affiliate]' in schema '[dbo]'
-- -- Drop the table if it already exists
-- IF OBJECT_ID('[dbo].[Affiliate]', 'U') IS NOT NULL
-- DROP TABLE [dbo].[Affiliate]
-- GO
-- -- Create the table in the specified schema
-- CREATE TABLE [dbo].[Affiliate]
-- (
--     [Id] INT NOT NULL IDENTITY PRIMARY KEY, -- Primary Key column
--     [FirstName] NVARCHAR(50) NOT NULL,
--     [LastName] NVARCHAR(50) NOT NULL,
--     [Birthday] DATETIME NOT NULL,
--     [Gender] CHAR(1) NOT NULL,
--     [IdCard] CHAR(11) NOT NULL,
--     [SecuritySocialNumber] NVARCHAR(25) NOT NULL,
--     [RegistrationDate] DATETIME NOT NULL,
--     [AmountConsumed] INT NOT NULL,
--     [Status] INT NOT NULL FOREIGN KEY REFERENCES Status(Id),
--     [Plan] INT NOT NULL FOREIGN KEY REFERENCES "Plan"(Id)
--     -- Specify more columns here
-- );
-- GO

-- -- Insert rows into table 'Status' in schema '[dbo]'
-- INSERT INTO [dbo].[Status]
-- ( -- Columns to insert data into
--  Status
-- )
-- VALUES
-- ( -- First row: values for the columns in the list above
--  'Active'
-- ),
-- ( -- Second row: values for the columns in the list above
--  'Inactive'
-- )
-- -- Add more rows here
-- GO;

-- CREATE PROCEDURE GetAffiliates
-- AS
-- BEGIN
--     SELECT * FROM Affiliate
-- END

-- CREATE PROCEDURE GetAffiliate
--     @Id INT
-- AS
-- BEGIN
--     SELECT * FROM Affiliate WHERE Id = @Id
-- END

-- CREATE PROCEDURE CreateAffiliate
--     @FirstName NVARCHAR,
--     @LastName NVARCHAR,
--     @Birthday DATETIME,
--     @Gender CHAR,
--     @IdCard CHAR,
--     @SecuritySocialNumber NVARCHAR,
--     @RegistrationDate DATETIME,
--     @ConsumedAmount INT,
--     @Status INT,
--     @Plan INT
-- AS
-- BEGIN
--     INSERT INTO Affiliate(FirstName, LastName, Birthday, Gender, IdCard, SecuritySocialNumber, RegistrationDate, ConsumedAmount, [Status], [Plan]) VALUES (@FirstName, @LastName, @Birthday, @Gender, @IdCard, @SecuritySocialNumber, @RegistrationDate, @ConsumedAmount, @Status, @Plan)
-- END

-- CREATE PROCEDURE UpdateAffiliate
--     @Id INT,
--     @FirstName NVARCHAR,
--     @LastName NVARCHAR,
--     @Birthday DATETIME,
--     @Gender CHAR,
--     @IdCard CHAR,
--     @SecuritySocialNumber NVARCHAR,
--     @RegistrationDate DATETIME,
--     @ConsumedAmount INT,
--     @Status INT,
--     @Plan INT
-- AS
-- BEGIN
--     UPDATE Affiliate SET FirstName = @FirstName, LastName = @LastName, Birthday = @Birthday, Gender = @Gender, IdCard = @IdCard, SecuritySocialNumber = @SecuritySocialNumber, RegistrationDate = @RegistrationDate, ConsumedAmount = @ConsumedAmount, [Status] = @Status, [Plan] = @Plan WHERE Id = @Id
-- END

-- CREATE PROCEDURE DeleteAffiliate
--     @Id INT
-- AS
-- BEGIN
--     DELETE FROM Affiliate WHERE Id = @Id
-- END

-- CREATE PROCEDURE UpdateConsumedAmount
--     @Id INT,
--     @ConsumedAmount INT
-- AS
-- BEGIN
--     UPDATE Affiliate SET ConsumedAmount = @ConsumedAmount WHERE Id = @Id
-- END


-- EXEC sp_rename "dbo.Affiliate.AmountConsumed", "ConsumedAmount", "COLUMN";

-- INSERT INTO [Plan] ([Plan], CoverageAmount, RegistrationDate, [Status]) VALUES ('Basic', 1000, '10-12-2021', 1)

-- Create a new stored procedure called 'GetAffiliates' in schema 'dbo'
-- Drop the stored procedure if it already exists
-- IF EXISTS (
-- SELECT *
--     FROM INFORMATION_SCHEMA.ROUTINES
-- WHERE SPECIFIC_SCHEMA = N'dbo'
--     AND SPECIFIC_NAME = N'GetAffiliates'
--     AND ROUTINE_TYPE = N'PROCEDURE'
-- )
-- DROP PROCEDURE dbo.GetAffiliates
-- GO
-- -- Create the stored procedure in the specified schema
-- CREATE PROCEDURE dbo.GetAffiliates

-- AS
-- BEGIN
--     -- body of the stored procedure
--     SELECT * FROM Affiliate
-- END
-- GO

-- CREATE PROCEDURE dbo.CreateAffiliate 
--     @FirstName NVARCHAR(50),
--     @LastName NVARCHAR(50),
--     @Birthday DATETIME,
--     @Gender CHAR(1),
--     @IdCard CHAR(11),
--     @SecuritySocialNumber NVARCHAR(25),
--     @RegistrationDate DATETIME,
--     @ConsumedAmount INT,
--     @Status INT,
--     @Plan INT
-- AS
-- BEGIN
--     INSERT INTO Affiliate (FirstName, LastName, Birthday, Gender, IdCard, SecuritySocialNumber, RegistrationDate, ConsumedAmount, [Status], [Plan]) VALUES (@FirstName, @LastName, @Birthday, @Gender, @IdCard, @SecuritySocialNumber, @RegistrationDate, @ConsumedAmount, @Status, @Plan)
-- END

-- CREATE PROCEDURE GetAffiliate
--     @Id INT
-- AS
-- BEGIN
--     SELECT * FROM Affiliate WHERE Id = @Id
-- END

-- CREATE PROCEDURE dbo.DeleteAffiliate
--     @Id INT
-- AS
-- BEGIN
--     DELETE FROM Affiliate WHERE Id = @Id
-- END

-- CREATE PROCEDURE dbo.UpdateAffiliate 
--     @Id INT,
--     @FirstName NVARCHAR(50),
--     @LastName NVARCHAR(50),
--     @Birthday DATETIME,
--     @Gender CHAR(1),
--     @IdCard CHAR(11),
--     @SecuritySocialNumber NVARCHAR(25),
--     @RegistrationDate DATETIME,
--     @ConsumedAmount INT,
--     @Status INT,
--     @Plan INT
-- AS
-- BEGIN
--     UPDATE Affiliate SET FirstName = @FirstName, LastName = @LastName, Birthday = @Birthday, Gender = @Gender, IdCard = @IdCard, SecuritySocialNumber = @SecuritySocialNumber, RegistrationDate = @RegistrationDate, ConsumedAmount = @ConsumedAmount, [Status] = @Status, [Plan] = @Plan WHERE Id = @Id 
-- END

-- CREATE PROCEDURE dbo.UpdateConsumedAmount
--     @Id INT,
--     @ConsumedAmount INT
-- AS
-- BEGIN
--     UPDATE Affiliate SET ConsumedAmount = @ConsumedAmount WHERE Id = @Id
-- END

-- INSERT INTO Affiliate (FirstName, LastName, Birthday, Gender, IdCard, SecuritySocialNumber, RegistrationDate, ConsumedAmount, [Status], [Plan]) VALUES ('Alam', 'Sierra', '12-28-1999', 'm', '12AS1', '98123', '10-13-2021', 678, 1, 1)

-- INSERT INTO [Plan]([Plan], CoverageAmount, RegistrationDate, [Status]) VALUES ('Premium', 6000, '10-13-2021', 1)

-- CREATE PROCEDURE dbo.GetActivesAffiliates
-- AS
-- BEGIN
--     SELECT * FROM Affiliate WHERE [Status] = 1
-- END

-- CREATE PROCEDURE dbo.GetInactivesAffiliates
-- AS
-- BEGIN
--     SELECT * FROM Affiliate WHERE [Status] = 2
-- END


CREATE PROCEDURE GetActivesAffiliates
AS
BEGIN
    SELECT * FROM Affiliate WHERE [Status] = 1
END
GO

CREATE PROCEDURE GetInactivesAffiliates
AS
BEGIN
    SELECT * FROM Affiliate WHERE [Status] = 2
END
GO



