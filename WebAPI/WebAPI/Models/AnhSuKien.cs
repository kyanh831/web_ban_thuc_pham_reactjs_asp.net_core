using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class AnhSuKien
    {
        public int IdAnh { get; set; }
        public string TenAnh { get; set; }
        public DateTime? NgayCapNhat { get; set; }
        public int? MaKm { get; set; }

        public virtual ChuongTrinhKhuyenMai MaKmNavigation { get; set; }
    }
}
