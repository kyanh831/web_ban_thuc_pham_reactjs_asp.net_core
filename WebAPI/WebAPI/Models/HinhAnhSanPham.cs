using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class HinhAnhSanPham
    {
        public int MaHinh { get; set; }
        public int MaSp { get; set; }
        public string DuongDan { get; set; }
        public DateTime? NgayCapNhat { get; set; }
        public bool? Hinh360 { get; set; }

        public virtual SanPham MaSpNavigation { get; set; }
    }
}
