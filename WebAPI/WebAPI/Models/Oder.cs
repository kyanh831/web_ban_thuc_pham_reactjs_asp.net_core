using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Oder
    {
        public Guid MaPhieuDatHang { get; set; }
        public List<int> MaThongTinSanPham { get; set; }
        public Oder()
        {
        }
        public Oder(Guid maPhieuDatHang, List<int> maThongTinSanPham)
        {
            MaPhieuDatHang = maPhieuDatHang;
            MaThongTinSanPham = maThongTinSanPham;
        }

    }
}
