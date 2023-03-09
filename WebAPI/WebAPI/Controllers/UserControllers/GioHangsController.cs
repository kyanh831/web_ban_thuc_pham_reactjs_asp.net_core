using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Tools;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class GioHangsController : ControllerBase
    {
        private readonly QL_BanHang_Online_v4Context _context;
        SendSMS sendSMS;
        public GioHangsController(QL_BanHang_Online_v4Context context)
        {
            _context = context;
        }

        // create
        [Authorize(Roles = "1,2,0")]
        [Route("phieu-dat-hang")]
        [HttpPost]
        public async Task<JsonResult> CreateTransaction(PhieuDatHang phieuDatHang)
        {
            if (phieuDatHang.HinhThucThanhToan == true)
            {
                string requestURL = ThanhtoanMomo(phieuDatHang);
                return new JsonResult(new { errorCode = 1, messges = "ok", requestURL });
            }
            else
            {
                _context.PhieuDatHang.Add(phieuDatHang);
                string email = _context.TaiKhoan.FirstOrDefault(x => x.MaNguoiDung == phieuDatHang.MaNguoiDung).Email.ToLower();
                await _context.SaveChangesAsync();
                //sendSMS = new SendSMS();
                //sendSMS.SendSMSAsync(phieuDatHang.Sdt, phieuDatHang.TongTien.ToString());
                //SendMail sm = new SendMail();
                //string text = "<h1 style=\"color:seagreen\" > you have been order in kyanhstore247, please check again:</h1> $" + phieuDatHang.TongTien;
                //sm.sendmail(email, "kyanhtore247", text);
                return new JsonResult(new { errorCode = 0, messges = "ok", phieuDatHang });
            }
        }
        [Authorize(Roles = "1,2,0")]
        [Route("chi-tiet-phieu-dat-hang")]
        [HttpPost]
        public async Task<JsonResult> CreateTransactionDetail(List<ChiTietPhieuDatHang> chiTietPhieuDatHangs)
        {
            foreach(ChiTietPhieuDatHang item in chiTietPhieuDatHangs){
                _context.ChiTietPhieuDatHang.Add(item);
                await _context.SaveChangesAsync();
            }
            return new JsonResult(new { errorCode = 0, messges = "ok"});
        }
        public string ThanhtoanMomo(PhieuDatHang phieuDatHang)
        {
            /*quy trinh thanh toan bang momo
                B1:tao tai khoan doanh nghiep voi momo phai xac thuc
                B2:momo cung cap thong tin:
                    + endpoint - https://test-payment.momo.vn/gw_payment/transactionProcessor
                    + partnerCode - MOMOEAGH20220611
                    + accessKey - key bao mat
                    + serectKey - 
                 B3: khi click thanh toan momo se tra ve duong link thanh toan
                    sau do mo app quet ma
                B4: momo tra ve url(GET) va notify url(POST)
            */

            //request params need to request to MoMo system
            string endpoint = "https://test-payment.momo.vn/gw_payment/transactionProcessor";
            string partnerCode = "MOMOOJOI20210710";
            string accessKey = "iPXneGmrJH0G8FOP";
            string serectkey = "sFcbSGRSJjwGxwhhcEktCHWYUuTuPNDB";
            string orderInfo = "test";
            string returnUrl = "https://f0c2-2001-ee0-4f84-6d70-99e5-9f99-e6ea-76a.ap.ngrok.io/cart/payment-success/ReturnUrl";
            string notifyurl = "https://8068-2001-ee0-4f84-6d70-99e5-9f99-e6ea-76a.ap.ngrok.io/api/GioHangs/NotifyUrl"; //lưu ý: notifyurl không được sử dụng localhost, có thể sử dụng ngrok để public localhost trong quá trình test

            string amount = (phieuDatHang.TongTien*1000).ToString();
            string orderid = DateTime.Now.Ticks.ToString();
            string requestId = DateTime.Now.Ticks.ToString();
            string extraData = "";

            //Before sign HMAC SHA256 signature
            string rawHash = "partnerCode=" +
                partnerCode + "&accessKey=" +
                accessKey + "&requestId=" +
                requestId + "&amount=" +
                amount + "&orderId=" +
                orderid + "&orderInfo=" +
                orderInfo + "&returnUrl=" +
                returnUrl + "&notifyUrl=" +
                notifyurl + "&extraData=" +
                extraData;

            MoMoSecurity crypto = new MoMoSecurity();
            //sign signature SHA256
            string signature = crypto.signSHA256(rawHash, serectkey);

            //build body json request
            JObject message = new JObject
            {
                { "partnerCode", partnerCode },
                { "accessKey", accessKey },
                { "requestId", requestId },
                { "amount", amount },
                { "orderId", orderid },
                { "orderInfo", orderInfo },
                { "returnUrl", returnUrl },
                { "notifyUrl", notifyurl },
                { "extraData", extraData },
                { "requestType", "captureMoMoWallet" },
                { "signature", signature }
            };

            string responseFromMomo = PaymentRequest.sendPaymentRequest(endpoint, message.ToString());

            JObject jmessage = JObject.Parse(responseFromMomo);

            return jmessage.GetValue("payUrl").ToString();
        }
        [Route("NotifyUrl")]
        [HttpPost]
        public JsonResult NotifyUrl(string partnerCode,
            string accessKey, string requestId,
            string amount, string orderId, string orderInfo,
            string orderType,string transId,string message,
            string localMessage,string responseTime,
            string errorCode,string payType,string extraData,string signature)
        {
            if(errorCode == "0")
            {
                return new JsonResult(new { errorCode = 0, messges = "ok" });
            }
            return new JsonResult(new { errorCode = 1, messges = "error" });
        }


        
    }
}
