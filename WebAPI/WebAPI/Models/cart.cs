using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class cart
    {
        private readonly QL_BanHang_Online_v4Context _context;
        public int MaThongTinSanPham { get; set; }
        public string TenSp { get; set; }
        public string TenThuocTinh { get; set; }
        public string DuongDan { get; set; }
        public int DonGiaBan { get; set; }
        public int DonGiaKm { get; set; }
        public int qty { get; set; }
        public int sl_ton { get; set; }



        public Double dThanhtien
        {
            get { return DonGiaKm * qty; }
        }
        public Double aThanhtien
        {
            get { return DonGiaBan *qty; }
        }
        public cart(int id)
        {
            MaThongTinSanPham = id;
            ThongTinSanPham sp = _context.ThongTinSanPham.SingleOrDefault(n => n.MaThongTinSanPham == MaThongTinSanPham);
            TenSp = sp.MaSpNavigation.TenSp;
            TenThuocTinh = sp.TenThuocTinh;
            DuongDan = _context.HinhAnhSanPham.Find(sp.MaSp).DuongDan.FirstOrDefault().ToString();
            DonGiaBan = int.Parse(sp.DonGiaBan.ToString());
            DonGiaKm = int.Parse(sp.DonGiaKm.ToString());
            qty = 1;
            sl_ton = (int)sp.SoLuong;
        }
    }
}
