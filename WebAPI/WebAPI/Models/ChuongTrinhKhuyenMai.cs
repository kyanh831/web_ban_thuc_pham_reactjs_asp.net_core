using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class ChuongTrinhKhuyenMai
    {
        public ChuongTrinhKhuyenMai()
        {
            AnhSuKien = new HashSet<AnhSuKien>();
            ChiTietKm = new HashSet<ChiTietKm>();
        }

        public int MaKm { get; set; }
        public string TieuDe { get; set; }
        public string NoiDung { get; set; }
        public DateTime? NgayBatDau { get; set; }
        public DateTime? NgayKetThuc { get; set; }
        public byte? PhanTramKm { get; set; }

        public virtual ICollection<AnhSuKien> AnhSuKien { get; set; }
        public virtual ICollection<ChiTietKm> ChiTietKm { get; set; }
    }
}
