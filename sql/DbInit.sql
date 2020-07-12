CREATE TABLE Products (
	[Id] int IDENTITY (1,1) NOT NULL
	, CONSTRAINT PK_Products_Id PRIMARY KEY CLUSTERED (Id),
	[Name] varchar(255) NULL,
	[Manufacturer] varchar(255) NULL,
	[Style] varchar(255) NULL,
	[PurchasePrice] money NULL,
	[SalePrice] money NULL,
	[QtyOnHand] int NULL,
	[CommissionPercentage] decimal(5,2) NULL
);

CREATE TABLE SalesPeople (
	[Id] int IDENTITY (1,1) NOT NULL
	, CONSTRAINT PK_SalesPeople_Id PRIMARY KEY CLUSTERED (Id),
	[FirstName] varchar(255) NULL,
	[LastName] varchar(255) NULL,
	[Address] varchar(255) NULL,
	[Phone] varchar(10) NULL,
	[StartDate] date NULL,
	[TerminationDate] date NULL,
	[Manager] varchar(255) NULL
);

CREATE TABLE Customers (
	[Id] int IDENTITY (1,1) NOT NULL
	, CONSTRAINT PK_Customers_Id PRIMARY KEY CLUSTERED (Id),
	[FirstName] varchar(255) NULL,
	[LastName] varchar(255) NULL,
	[Address] varchar(255) NULL,
	[Phone] varchar(10) NULL,
	[StartDate] date NULL,
);

CREATE TABLE Sales (
	[Id] int IDENTITY (1,1) NOT NULL
	, CONSTRAINT PK_Sales_Id PRIMARY KEY CLUSTERED (Id),
	[ProductId] int FOREIGN KEY REFERENCES Products(Id) NULL,
	[SalesPersonId] int FOREIGN KEY REFERENCES SalesPeople(Id) NULL,
	[CustomerId] int FOREIGN KEY REFERENCES Customers(Id) NULL,
	[SalesDate] date NULL
);

CREATE TABLE Discounts (
	[Id] int IDENTITY (1,1) NOT NULL
	, CONSTRAINT PK_Discounts_Id PRIMARY KEY CLUSTERED (Id),
	[ProductId] int FOREIGN KEY REFERENCES Products(Id) NULL,
	[BeginDate] date NULL,
	[EndDate] date NULL,
	[DiscountPercentage] decimal(5,2) NULL
);