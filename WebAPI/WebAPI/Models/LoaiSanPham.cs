using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class LoaiSanPham
    {
        public LoaiSanPham()
        {
            SanPham = new HashSet<SanPham>();
        }

        public int MaLoaiSp { get; set; }
        public string TenLoaiSp { get; set; }

        public virtual ICollection<SanPham> SanPham { get; set; }
    }
}
