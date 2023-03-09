using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers.AdminControllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "1,2")]

    public class AdminDonHangsController : ControllerBase
    {
        private readonly QL_BanHang_Online_v4Context _context;

        public AdminDonHangsController(QL_BanHang_Online_v4Context context)
        {
            _context = context;
        }

        [Route("page")]
        [HttpGet("numb")]
        public async Task<JsonResult> GetTransactionByPage(int numb)
        {
            var getTimeNow = DateTime.Now;

            double numberOfPage;
            double total = await _context.PhieuDatHang.CountAsync();
            int numberProductInPage = 10;


            if (Math.Round(total / numberProductInPage) == 0)
            {
                numberOfPage = 1;
            }
            else
            {

                numberOfPage = Math.Round(total / numberProductInPage);
            }

            if (numb < 1 || numb > numberOfPage)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not exist page number" });
            }

            var transaction = await _context.PhieuDatHang.Select(
                x => new
                {
                    x.MaPhieuDatHang,
                    x.MaNguoiDungNavigation.HoTenNguoiDung,
                    x.MaNguoiDungNavigation.Email,
                    x.MaNguoiDungNavigation.Sdt,
                    x.TongTien,
                    x.NgayLap,
                    x.TrangThai,
                    time = ((int)(getTimeNow - x.NgayLap.GetValueOrDefault()).TotalMinutes),
                }).Skip((numb - 1) * numberProductInPage).Take(numberProductInPage).ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success", transaction, numberOfPage });
        }
    
        [Route("statistical")]
        [HttpGet]
        public async Task<JsonResult> GetTransactionStatistical()
        {
            int[] total = new int[12]; 
            int[] total7Day = new int[7];

            for (int i = 1; i <= 12; i++)
            {
                total[i-1] = await TotalByMonth(i);
            }
            for (int i = 0; i < 7; i++)
            {
                total7Day[i] = await TotalByWeek(i);
            }
            return new JsonResult(new { errorCode = 0, messges = "Success",total,total7Day });
        }
        [Route("statisticals")]
        [HttpGet]
        public async Task<JsonResult> GetStatistical()
        {
            int totalProduct = 0;
            int totalTransactionToDay = 0;
            int totalNewTransactionToDay = 0;
            int totalMoneyToday = 0;
            int totalMoneyPayed = 0;
            int totalMoney = 0;

            int totalUser = 0;

            totalProduct = _context.SanPham.Count();
            totalTransactionToDay = _context.PhieuDatHang.Count();
            totalNewTransactionToDay =await _context.PhieuDatHang.Where(x => x.NgayLap.Value.Day == DateTime.Now.Day).CountAsync();
            totalMoneyToday = _context.PhieuDatHang.Where(x=>x.NgayLap.Value.Day == DateTime.Now.Day).Sum(x => x.TongTien).Value;
            totalMoneyPayed = _context.PhieuDatHang.Where(x=>x.TinhTrangDonHang == "4").Sum(x => x.TongTien).Value;
            totalMoney = _context.PhieuDatHang.Sum(x => x.TongTien).Value;

            totalUser = _context.TaiKhoan.Count();
            return new JsonResult(new { errorCode = 0, messges = "Success",
                totalProduct,totalTransactionToDay,totalNewTransactionToDay,totalMoneyToday,totalUser
                ,totalMoney,totalMoneyPayed
            });
        }

        private async Task<int> TotalByWeek(int i)
        {
            int total = 0;
            DateTime d1 = DateTime.Now;
            DateTime d2 = d1.AddDays(-i);
            total = (int)await _context.PhieuDatHang
                .Where(x => x.NgayLap.Value.Day == d2.Day )
                .SumAsync(x => x.TongTien);

            return total;
        }

        private async Task<int> TotalByMonth(int i)
        {
            int total = 0;

            total = (int)await _context.PhieuDatHang.Where(x => x.NgayLap.Value.Month == i).SumAsync(x => x.TongTien);

            return total;
        }
    
    }
}
