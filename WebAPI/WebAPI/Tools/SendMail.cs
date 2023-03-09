using FluentEmail.Core;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI.Tools
{
    public class SendMail
    {
        private readonly IServiceProvider _serviceProvider;

        public SendMail()
        {
        }

        public SendMail(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }


        public void sendmail(string to, string tieude, string body)
        {

            MailMessage mc = new MailMessage("hsaFoodShop@outlook.com.vn", to);
            mc.Subject = tieude;
            mc.Body = body;
            mc.IsBodyHtml = true;
            mc.BodyEncoding = Encoding.UTF8;
            SmtpClient smtp = new SmtpClient("smtp.office365.com", 587);
            smtp.Timeout = 1000000;
            smtp.EnableSsl = true;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            NetworkCredential nc = new NetworkCredential("hsaFoodShop@outlook.com.vn", "831hsa@FS");
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = nc;
            smtp.Send(mc);
        }
    }
}
