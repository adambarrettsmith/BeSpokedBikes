using System;
using System.Collections.Generic;

namespace BeSpokedBikes.BeSpokedBikes.Data
{
    public partial class Products
    {
        public Products()
        {
            Discounts = new HashSet<Discounts>();
            Sales = new HashSet<Sales>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Manufacturer { get; set; }
        public string Style { get; set; }
        public decimal? PurchasePrice { get; set; }
        public decimal? SalePrice { get; set; }
        public int? QtyOnHand { get; set; }
        public decimal? CommisionPercentage { get; set; }

        public virtual ICollection<Discounts> Discounts { get; set; }
        public virtual ICollection<Sales> Sales { get; set; }
    }
}
