using System;
using System.Collections.Generic;

namespace BeSpokedBikes.Data
{
    public partial class SalesPeople
    {
        public SalesPeople()
        {
            Sales = new HashSet<Sales>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? TerminationDate { get; set; }
        public string Manager { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
