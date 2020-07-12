using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeSpokedBikes.Data.ViewModels
{
    public class SalesVM
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string SalesPersonName { get; set; }
        public string CustomerName { get; set; }
        public DateTime? SalesDate { get; set; }
    }
}
