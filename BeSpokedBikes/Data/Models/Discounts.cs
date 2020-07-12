using System;
using System.Collections.Generic;

namespace BeSpokedBikes.Data
{
    public partial class Discounts
    {
        public int Id { get; set; }
        public int? ProductId { get; set; }
        public DateTime? BeginDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal? DiscountPercentage { get; set; }

        public virtual Products Product { get; set; }
    }
}
