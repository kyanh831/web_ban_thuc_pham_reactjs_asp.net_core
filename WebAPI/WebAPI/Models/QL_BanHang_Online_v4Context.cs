using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class QL_BanHang_Online_v4Context : DbContext
    {
        public QL_BanHang_Online_v4Context()
        {
        }

        public QL_BanHang_Online_v4Context(DbContextOptions<QL_BanHang_Online_v4Context> options)
            : base(options)
        {
        }

        public virtual DbSet<AnhBlog> AnhBlog { get; set; }
        public virtual DbSet<AnhSuKien> AnhSuKien { get; set; }
        public virtual DbSet<BinhLuanBlog> BinhLuanBlog { get; set; }
        public virtual DbSet<BinhLuanSp> BinhLuanSp { get; set; }
        public virtual DbSet<BlogBaiViet> BlogBaiViet { get; set; }
        public virtual DbSet<ChiTietBaiViet> ChiTietBaiViet { get; set; }
        public virtual DbSet<ChiTietKm> ChiTietKm { get; set; }
        public virtual DbSet<ChiTietPhieuDatHang> ChiTietPhieuDatHang { get; set; }
        public virtual DbSet<ChuDeBaiViet> ChuDeBaiViet { get; set; }
        public virtual DbSet<ChuongTrinhKhuyenMai> ChuongTrinhKhuyenMai { get; set; }
        public virtual DbSet<DanhGia> DanhGia { get; set; }
        public virtual DbSet<HinhAnhSanPham> HinhAnhSanPham { get; set; }
        public virtual DbSet<Hoadon> Hoadon { get; set; }
        public virtual DbSet<Chat> Chat { get; set; }
        public virtual DbSet<LoaiSanPham> LoaiSanPham { get; set; }
        public virtual DbSet<PhieuDatHang> PhieuDatHang { get; set; }
        public virtual DbSet<PhieuNhapHang> PhieuNhapHang { get; set; }
        public virtual DbSet<SanPham> SanPham { get; set; }
        public virtual DbSet<SpyeuThich> SpyeuThich { get; set; }
        public virtual DbSet<TaiKhoan> TaiKhoan { get; set; }
        public virtual DbSet<ThongTinSanPham> ThongTinSanPham { get; set; }
        public virtual DbSet<ThuVienAnh> ThuVienAnh { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=QL_BanHang_Online_v4;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AnhBlog>(entity =>
            {
                entity.HasKey(e => e.IdAnh)
                    .HasName("PK__AnhBlog__51900A99747883C6");

                entity.HasIndex(e => e.IdAnh)
                    .HasName("UQ__AnhBlog__51900A983AF2DD74")
                    .IsUnique();

                entity.Property(e => e.IdAnh).HasColumnName("Id_Anh");

                entity.Property(e => e.DuongDan).HasMaxLength(150);

                entity.HasOne(d => d.MaBaiVietNavigation)
                    .WithMany(p => p.AnhBlog)
                    .HasForeignKey(d => d.MaBaiViet)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__AnhBlog__MaBaiVi__25518C17");
            });

            modelBuilder.Entity<AnhSuKien>(entity =>
            {
                entity.HasKey(e => e.IdAnh)
                    .HasName("PK__AnhSuKie__51900A9942D5A55B");

                entity.HasIndex(e => e.IdAnh)
                    .HasName("UQ__AnhSuKie__51900A985DE3F7D9")
                    .IsUnique();

                entity.Property(e => e.IdAnh).HasColumnName("Id_Anh");

                entity.Property(e => e.MaKm).HasColumnName("MaKM");

                entity.Property(e => e.NgayCapNhat)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.TenAnh).HasMaxLength(200);

                entity.HasOne(d => d.MaKmNavigation)
                    .WithMany(p => p.AnhSuKien)
                    .HasForeignKey(d => d.MaKm)
                    .HasConstraintName("FK__AnhSuKien__MaKM__1EA48E88");
            });

            modelBuilder.Entity<BinhLuanBlog>(entity =>
            {
                entity.HasKey(e => new { e.MaNguoiDung, e.MaBaiViet })
                    .HasName("PK__BinhLuan__AFD40206406284A5");

                entity.Property(e => e.LuotThich).HasDefaultValueSql("((0))");

                entity.Property(e => e.NoiDung).HasColumnType("ntext");

                entity.Property(e => e.ThoiGian)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.MaBaiVietNavigation)
                    .WithMany(p => p.BinhLuanBlog)
                    .HasForeignKey(d => d.MaBaiViet)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BinhLuanB__MaBai__245D67DE");

                entity.HasOne(d => d.MaNguoiDungNavigation)
                    .WithMany(p => p.BinhLuanBlog)
                    .HasForeignKey(d => d.MaNguoiDung)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BinhLuanB__MaNgu__160F4887");
            });

            modelBuilder.Entity<BinhLuanSp>(entity =>
            {
                entity.HasKey(e => new { e.MaSp, e.MaNguoiDung })
                    .HasName("PK__BinhLuan__1B76956A71C502E8");

                entity.ToTable("BinhLuanSP");

                entity.Property(e => e.MaSp).HasColumnName("MaSP");

                entity.Property(e => e.LuotThich).HasDefaultValueSql("((0))");

                entity.Property(e => e.NoiDung).HasColumnType("ntext");

                entity.Property(e => e.ThoiGian)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.MaNguoiDungNavigation)
                    .WithMany(p => p.BinhLuanSp)
                    .HasForeignKey(d => d.MaNguoiDung)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BinhLuanS__MaNgu__18EBB532");

                entity.HasOne(d => d.MaSpNavigation)
                    .WithMany(p => p.BinhLuanSp)
                    .HasForeignKey(d => d.MaSp)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BinhLuanSP__MaSP__1332DBDC");
            });

            modelBuilder.Entity<BlogBaiViet>(entity =>
            {
                entity.HasKey(e => e.MaBaiViet)
                    .HasName("PK__BlogBaiV__AEDD564757D14C9F");

                entity.HasIndex(e => e.MaBaiViet)
                    .HasName("UQ__BlogBaiV__AEDD564692FE93F1")
                    .IsUnique();

                entity.Property(e => e.LuotThich).HasDefaultValueSql("((0))");

                entity.Property(e => e.NgayTao)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.NoiDung).HasColumnType("ntext");

                entity.Property(e => e.TenBaiViet).HasMaxLength(500);

                entity.Property(e => e.TieuDe).HasMaxLength(500);

                entity.Property(e => e.TrangThai).HasDefaultValueSql("((0))");

                entity.Property(e => e.TuKhoa).HasColumnType("ntext");

                entity.HasOne(d => d.MaChuDeNavigation)
                    .WithMany(p => p.BlogBaiViet)
                    .HasForeignKey(d => d.MaChuDe)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BlogBaiVi__MaChu__2739D489");
            });

            modelBuilder.Entity<ChiTietBaiViet>(entity =>
            {
                entity.HasKey(e => new { e.MaNguoiDung, e.MaBaiViet })
                    .HasName("PK__ChiTietB__AFD40206CDD4C504");

                entity.Property(e => e.NgaySuaDoi)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.MaBaiVietNavigation)
                    .WithMany(p => p.ChiTietBaiViet)
                    .HasForeignKey(d => d.MaBaiViet)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ChiTietBa__MaBai__2645B050");

                entity.HasOne(d => d.MaNguoiDungNavigation)
                    .WithMany(p => p.ChiTietBaiViet)
                    .HasForeignKey(d => d.MaNguoiDung)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ChiTietBa__MaNgu__1BC821DD");
            });

            modelBuilder.Entity<ChiTietKm>(entity =>
            {
                entity.HasKey(e => new { e.MaKm, e.MaThongTinSanPham })
                    .HasName("PK__ChiTietK__06C518CE550476EE");

                entity.ToTable("ChiTietKM");

                entity.Property(e => e.MaKm).HasColumnName("MaKM");

                entity.Property(e => e.NgayTao)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.MaKmNavigation)
                    .WithMany(p => p.ChiTietKm)
                    .HasForeignKey(d => d.MaKm)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ChiTietKM__MaKM__1F98B2C1");

                entity.HasOne(d => d.MaThongTinSanPhamNavigation)
                    .WithMany(p => p.ChiTietKm)
                    .HasForeignKey(d => d.MaThongTinSanPham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ChiTietKM__MaTho__236943A5");
            });

            modelBuilder.Entity<ChiTietPhieuDatHang>(entity =>
            {
                entity.HasKey(e => new { e.MaPhieuDatHang, e.MaThongTinSanPham })
                    .HasName("PK__ChiTietP__0785237907A0A0B8");

                entity.Property(e => e.MaPhieuDatHang).HasDefaultValueSql("(newid())");

                entity.Property(e => e.SoLuongDat).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.MaPhieuDatHangNavigation)
                    .WithMany(p => p.ChiTietPhieuDatHang)
                    .HasForeignKey(d => d.MaPhieuDatHang)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ChiTietPh__MaPhi__1CBC4616");

                entity.HasOne(d => d.MaThongTinSanPhamNavigation)
                    .WithMany(p => p.ChiTietPhieuDatHang)
                    .HasForeignKey(d => d.MaThongTinSanPham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ChiTietPh__MaTho__2180FB33");
            });

            modelBuilder.Entity<ChuDeBaiViet>(entity =>
            {
                entity.HasKey(e => e.MaChuDe)
                    .HasName("PK__ChuDeBai__3585451180E39D37");

                entity.HasIndex(e => e.MaChuDe)
                    .HasName("UQ__ChuDeBai__35854510AFC1C755")
                    .IsUnique();

                entity.Property(e => e.TenChuDe).HasMaxLength(150);
            });

            modelBuilder.Entity<ChuongTrinhKhuyenMai>(entity =>
            {
                entity.HasKey(e => e.MaKm)
                    .HasName("PK__ChuongTr__2725CF1535693F61");

                entity.HasIndex(e => e.MaKm)
                    .HasName("UQ__ChuongTr__2725CF144A343013")
                    .IsUnique();

                entity.Property(e => e.MaKm).HasColumnName("MaKM");

                entity.Property(e => e.NgayBatDau).HasColumnType("smalldatetime");

                entity.Property(e => e.NgayKetThuc).HasColumnType("smalldatetime");

                entity.Property(e => e.NoiDung).HasColumnType("ntext");

                entity.Property(e => e.PhanTramKm).HasColumnName("PhanTramKM");

                entity.Property(e => e.TieuDe).HasMaxLength(200);
            });

            modelBuilder.Entity<DanhGia>(entity =>
            {
                entity.HasKey(e => new { e.MaPhieuDatHang, e.MaThongTinSanPham, e.MaNguoiDung })
                    .HasName("PK__DanhGia__64401AAED7B4B934");

                entity.Property(e => e.MaPhieuDatHang).HasDefaultValueSql("(newid())");

                entity.Property(e => e.HinhAnh).HasMaxLength(300);

                entity.Property(e => e.NoiDung).HasColumnType("ntext");

                entity.Property(e => e.ThoiGian)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Video).HasMaxLength(300);

                entity.HasOne(d => d.MaNguoiDungNavigation)
                    .WithMany(p => p.DanhGia)
                    .HasForeignKey(d => d.MaNguoiDung)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DanhGia__MaNguoi__17036CC0");

                entity.HasOne(d => d.Ma)
                    .WithMany(p => p.DanhGia)
                    .HasForeignKey(d => new { d.MaPhieuDatHang, d.MaThongTinSanPham })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DanhGia__208CD6FA");
            });

            modelBuilder.Entity<HinhAnhSanPham>(entity =>
            {
                entity.HasKey(e => e.MaHinh)
                    .HasName("PK_HinhAnhSanPham");
                entity.Property(e => e.DuongDan).HasMaxLength(150);

                entity.Property(e => e.Hinh360).HasDefaultValueSql("((0))");

                entity.Property(e => e.MaSp).HasColumnName("MaSp");

                entity.Property(e => e.NgayCapNhat)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.MaSpNavigation)
                    .WithMany(p => p.HinhAnhSanPham)
                    .HasForeignKey(d => d.MaSp)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__HinhAnhSan__MaSp__74794A92");
            });

            modelBuilder.Entity<Hoadon>(entity =>
            {
                entity.HasKey(e => new { e.MaHoaDon, e.MaPhieuDatHang })
                    .HasName("PK__Hoadon__B1388E71079B9D89");

                entity.HasIndex(e => e.MaHoaDon)
                    .HasName("UQ__Hoadon__835ED13A01822D2C")
                    .IsUnique();

                entity.Property(e => e.MaHoaDon).HasDefaultValueSql("(newid())");

                entity.Property(e => e.MaPhieuDatHang).HasDefaultValueSql("(newid())");

                entity.Property(e => e.TrangThai).HasDefaultValueSql("((0))");

                entity.HasOne(d => d.MaNguoiDungNavigation)
                    .WithMany(p => p.Hoadon)
                    .HasForeignKey(d => d.MaNguoiDung)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Hoadon__MaNguoiD__19DFD96B");

                entity.HasOne(d => d.MaPhieuDatHangNavigation)
                    .WithMany(p => p.Hoadon)
                    .HasForeignKey(d => d.MaPhieuDatHang)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Hoadon__MaPhieuD__1DB06A4F");
            });

            modelBuilder.Entity<Chat>(entity =>
            {
                entity.HasKey(e => e.MaChat)
                    .HasName("PK_Chat");

                entity.Property(e => e.MaChat)
                    .HasColumnName("MaChat")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.DaDoc).HasDefaultValueSql("((0))");

                entity.Property(e => e.NoiDung);

                entity.Property(e => e.ThoiGian)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");


                entity.HasOne(d => d.MaNguoiDungNavigation)
                    .WithMany(p => p.Chat)
                    .HasForeignKey(d => d.MaNguoiDung)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Chat_TaiKhoan");
            });

            modelBuilder.Entity<LoaiSanPham>(entity =>
            {
                entity.HasKey(e => e.MaLoaiSp)
                    .HasName("PK__LoaiSanP__1224CA7CB313B7E5");

                entity.HasIndex(e => e.MaLoaiSp)
                    .HasName("UQ__LoaiSanP__1224CA7DC550810D")
                    .IsUnique();

                entity.Property(e => e.MaLoaiSp).HasColumnName("MaLoaiSP");

                entity.Property(e => e.TenLoaiSp)
                    .HasColumnName("TenLoaiSP")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<PhieuDatHang>(entity =>
            {
                entity.HasKey(e => e.MaPhieuDatHang)
                    .HasName("PK__PhieuDat__2665F4A253F8C792");

                entity.HasIndex(e => e.MaPhieuDatHang)
                    .HasName("UQ__PhieuDat__2665F4A3DD3C0C62")
                    .IsUnique();

                entity.Property(e => e.MaPhieuDatHang).HasDefaultValueSql("(newid())");

                entity.Property(e => e.DiaChi).HasColumnType("ntext");

                entity.Property(e => e.DonViGiaoHang).HasMaxLength(100);

                entity.Property(e => e.GhiChu).HasColumnType("ntext");

                entity.Property(e => e.HinhThucThanhToan).HasDefaultValueSql("((0))");

                entity.Property(e => e.NgayLap)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.NguoiNhan).HasMaxLength(100);

                entity.Property(e => e.Sdt)
                    .HasColumnName("SDT")
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.TinhTrangDonHang).HasMaxLength(50);

                entity.Property(e => e.TongTien).HasDefaultValueSql("((0))");

                entity.Property(e => e.TrangThai).HasDefaultValueSql("((0))");

                entity.HasOne(d => d.MaNguoiDungNavigation)
                    .WithMany(p => p.PhieuDatHang)
                    .HasForeignKey(d => d.MaNguoiDung)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PhieuDatH__MaNgu__151B244E");
            });

            modelBuilder.Entity<PhieuNhapHang>(entity =>
            {
                entity.HasKey(e => e.MaPhieuNhap)
                    .HasName("PK__PhieuNha__1470EF3B6AE4F1FC");

                entity.HasIndex(e => e.MaPhieuNhap)
                    .HasName("UQ__PhieuNha__1470EF3ABAB21A0F")
                    .IsUnique();

                entity.Property(e => e.NgayNhap)
                    .HasColumnType("smalldatetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.MaThongTinSanPhamNavigation)
                    .WithMany(p => p.PhieuNhapHang)
                    .HasForeignKey(d => d.MaThongTinSanPham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PhieuNhap__MaTho__22751F6C");
            });

            modelBuilder.Entity<SanPham>(entity =>
            {
                entity.HasKey(e => e.MaSp)
                    .HasName("PK__SanPham__2725081C0E7FC600");

                entity.HasIndex(e => e.MaSp)
                    .HasName("UQ__SanPham__2725081D7B0D597C")
                    .IsUnique();

                entity.Property(e => e.MaSp).HasColumnName("MaSP");

                entity.Property(e => e.MaLoaiSp).HasColumnName("MaLoaiSP");

                entity.Property(e => e.MoTa).HasColumnType("ntext");

                entity.Property(e => e.TenSp)
                    .HasColumnName("TenSP")
                    .HasMaxLength(150);

                entity.Property(e => e.ThuongHieu).HasMaxLength(100);

                entity.Property(e => e.TieuDe).HasMaxLength(200);

                entity.Property(e => e.TrangThai).HasDefaultValueSql("((0))");

                entity.Property(e => e.TuKhoa).HasColumnType("ntext");

                entity.Property(e => e.XuatXu).HasMaxLength(100);

                entity.HasOne(d => d.MaLoaiSpNavigation)
                    .WithMany(p => p.SanPham)
                    .HasForeignKey(d => d.MaLoaiSp)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__SanPham__MaLoaiS__14270015");
            });

            modelBuilder.Entity<SpyeuThich>(entity =>
            {
                entity.HasKey(e => new { e.MaSp, e.MaNguoiDung })
                    .HasName("PK__SPYeuThi__1B76956A192027C6");

                entity.ToTable("SPYeuThich");

                entity.Property(e => e.MaSp).HasColumnName("MaSP");

                entity.HasOne(d => d.MaNguoiDungNavigation)
                    .WithMany(p => p.SpyeuThich)
                    .HasForeignKey(d => d.MaNguoiDung)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__SPYeuThic__MaNgu__17F790F9");

                entity.HasOne(d => d.MaSpNavigation)
                    .WithMany(p => p.SpyeuThich)
                    .HasForeignKey(d => d.MaSp)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__SPYeuThich__MaSP__123EB7A3");
            });

            modelBuilder.Entity<TaiKhoan>(entity =>
            {
                entity.HasKey(e => e.MaNguoiDung)
                    .HasName("PK__TaiKhoan__C539D762D4EE8E34");

                entity.HasIndex(e => e.MaNguoiDung)
                    .HasName("UQ__TaiKhoan__C539D763B3F1BE24")
                    .IsUnique();

                entity.Property(e => e.AnhDaiDien).HasMaxLength(150);

                entity.Property(e => e.DiaChi).HasMaxLength(500);

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.HoTenNguoiDung).HasMaxLength(100);

                entity.Property(e => e.MatKhauDangNhap)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Sdt)
                    .HasColumnName("SDT")
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.TrangThai).HasDefaultValueSql("((0))");
                entity.Property(e => e.Quyen).HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<ThongTinSanPham>(entity =>
            {
                entity.HasKey(e => e.MaThongTinSanPham)
                    .HasName("PK__ThongTin__1E0D7DB393552253");

                entity.HasIndex(e => e.MaThongTinSanPham)
                    .HasName("UQ__ThongTin__1E0D7DB2D2002552")
                    .IsUnique();

                entity.Property(e => e.DonGiaBan).HasDefaultValueSql("((0))");

                entity.Property(e => e.DonGiaGoc).HasDefaultValueSql("((0))");

                entity.Property(e => e.DonGiaKm)
                    .HasColumnName("DonGiaKM")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.DonGiaNhap).HasDefaultValueSql("((0))");

                entity.Property(e => e.DonViTinh).HasMaxLength(30);

                entity.Property(e => e.MaSp).HasColumnName("MaSP");

                entity.Property(e => e.NgayCapNhat).HasColumnType("smalldatetime");

                entity.Property(e => e.SoLuong).HasDefaultValueSql("((0))");

                entity.Property(e => e.TenThuocTinh).HasMaxLength(100);

                entity.HasOne(d => d.MaSpNavigation)
                    .WithMany(p => p.ThongTinSanPham)
                    .HasForeignKey(d => d.MaSp)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ThongTinSa__MaSP__114A936A");
            });

            modelBuilder.Entity<ThuVienAnh>(entity =>
            {
                entity.HasIndex(e => e.Id)
                    .HasName("UQ__ThuVienA__3214EC06CD0A0C28")
                    .IsUnique();

                entity.Property(e => e.AnhDaiDien).HasDefaultValueSql("((0))");

                entity.Property(e => e.AnhSuKien).HasDefaultValueSql("((0))");

                entity.Property(e => e.Banner).HasDefaultValueSql("((0))");

                entity.Property(e => e.DuongDan).HasMaxLength(200);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
