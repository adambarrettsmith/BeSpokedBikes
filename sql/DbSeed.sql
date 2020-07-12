-- Products Seed
INSERT INTO dbo.Products ([Name], [Manufacturer], [Style], [PurchasePrice], [SalePrice], [QtyOnHand], [CommissionPercentage]) VALUES('TCR Advanced 2', 'Century Cycles', 'Giant', 1900.00, 1900.00, 11, 1)
INSERT INTO dbo.Products ([Name], [Manufacturer], [Style], [PurchasePrice], [SalePrice], [QtyOnHand], [CommissionPercentage]) VALUES('Zig Zag 105', 'Century Cycles', 'All-City', 2499.00, 2499.00, 14, 2)
INSERT INTO dbo.Products ([Name], [Manufacturer], [Style], [PurchasePrice], [SalePrice], [QtyOnHand], [CommissionPercentage]) VALUES('Warroad Apex 1 700', 'Century Cycles', 'Salsa-City', 2599.00, 2599.00, 5, 2)
INSERT INTO dbo.Products ([Name], [Manufacturer], [Style], [PurchasePrice], [SalePrice], [QtyOnHand], [CommissionPercentage]) VALUES('Defy Advanced 1', 'Century Cycles', 'Giant', 2949.99, 2949.99, 8, 2)
INSERT INTO dbo.Products ([Name], [Manufacturer], [Style], [PurchasePrice], [SalePrice], [QtyOnHand], [CommissionPercentage]) VALUES('Zig Zag Ultegra', 'Century Cycles', 'All-City', 3999.00, 3999.00, 8, 2.2)

-- Customers Seed
INSERT INTO dbo.Customers ([FirstName], [LastName], [Address], [Phone], [StartDate]) VALUES('Flora', 'Denzil', '123 Fake Address', '9035782231', '7/12/2020')
INSERT INTO dbo.Customers ([FirstName], [LastName], [Address], [Phone], [StartDate]) VALUES('Alexis', 'Stoica', '123 Fake Address', '9035782231', '5/6/2020')
INSERT INTO dbo.Customers ([FirstName], [LastName], [Address], [Phone], [StartDate]) VALUES('Altair', 'Pal', '123 Fake Address', '9035782231', '7/11/2020')
INSERT INTO dbo.Customers ([FirstName], [LastName], [Address], [Phone], [StartDate]) VALUES('Yaeko', 'Abram', '123 Fake Address', '9035782231', '7/10/2020')
INSERT INTO dbo.Customers ([FirstName], [LastName], [Address], [Phone], [StartDate]) VALUES('Roman', 'Okamoto', '123 Fake Address', '9035782231', '7/10/2020')

-- Sales People Seed
INSERT INTO dbo.SalesPeople ([FirstName], [LastName], [Address], [Phone], [StartDate], [TerminationDate], [Manager]) VALUES('Joceline', 'Shelby', '123 Fake Address', '9035782231', '1/9/2020', NULL, 'Jonathan Adams')
INSERT INTO dbo.SalesPeople ([FirstName], [LastName], [Address], [Phone], [StartDate], [TerminationDate], [Manager]) VALUES('Ariel', 'Ambra', '123 Fake Address', '9035782231', '1/15/2020', NULL, 'Jonathan Adams')
INSERT INTO dbo.SalesPeople ([FirstName], [LastName], [Address], [Phone], [StartDate], [TerminationDate], [Manager]) VALUES('Ming', 'Marconi', '123 Fake Address', '9035782231', '2/2/2020', NULL, 'Jonathan Adams')
INSERT INTO dbo.SalesPeople ([FirstName], [LastName], [Address], [Phone], [StartDate], [TerminationDate], [Manager]) VALUES('Zharko', 'Haumann', '123 Fake Address', '9035782231', '12/2/2019', '1/20/2020', 'Jonathan Adams')

-- Sales Seed
INSERT INTO dbo.Sales ([ProductId], [SalesPersonId], [CustomerId], [SalesDate]) VALUES(6, 1, 1, '1/20/2020')
INSERT INTO dbo.Sales ([ProductId], [SalesPersonId], [CustomerId], [SalesDate]) VALUES(6, 1, 2, '1/22/2020')
INSERT INTO dbo.Sales ([ProductId], [SalesPersonId], [CustomerId], [SalesDate]) VALUES(7, 2, 3, '1/22/2020')
INSERT INTO dbo.Sales ([ProductId], [SalesPersonId], [CustomerId], [SalesDate]) VALUES(8, 2, 3, '1/22/2020')
INSERT INTO dbo.Sales ([ProductId], [SalesPersonId], [CustomerId], [SalesDate]) VALUES(8, 3, 4, '1/26/2020')
INSERT INTO dbo.Sales ([ProductId], [SalesPersonId], [CustomerId], [SalesDate]) VALUES(7, 4, 4, '1/26/2020')
INSERT INTO dbo.Sales ([ProductId], [SalesPersonId], [CustomerId], [SalesDate]) VALUES(6, 1, 5, '1/28/2020')