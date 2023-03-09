using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class Chat
    {
        public Guid MaChat { get; set; }
        public string Admin { get; set; }
        public DateTime? ThoiGian { get; set; }
        public string NoiDung { get; set; }
        public int MaNguoiDung { get; set; }

        public bool? DaDoc { get; set; }

        public virtual TaiKhoan MaNguoiDungNavigation { get; set; }
    }
}
