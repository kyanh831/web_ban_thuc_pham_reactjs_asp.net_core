using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class ChiTietBaiViet
    {
        public int MaNguoiDung { get; set; }
        public int MaBaiViet { get; set; }
        public DateTime? NgaySuaDoi { get; set; }

        public virtual BlogBaiViet MaBaiVietNavigation { get; set; }
        public virtual TaiKhoan MaNguoiDungNavigation { get; set; }
    }
}
