using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class C1
    {
        public int MaThongTinSanPham { get; set; }
        public int qty { get; set; }

        public C1()
        {
        }

        public C1(int maThongTinSanPham, int qty)
        {
            MaThongTinSanPham = maThongTinSanPham;
            this.qty = qty;
        }
    }
}
