using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebAPI.Tools
{
    public class SendSMS
    {
        public bool SendSMSAsync(string numb, string total)
        {
            String content = "Thank you for your order. Total amount is $" + total;
            String APIKey = "C0EE3530B71A452B7E8FAC6247756A";
            String SecretKey = "0F985E0B8E4681FD756C40FDC56692";

            //var pairs = new List<KeyValuePair<string, string>>
            //{
            //    new KeyValuePair<string, string>("Phone", numb),
            //    new KeyValuePair<string, string>("Content", content),
            //    new KeyValuePair<string, string>("ApiKey", "C0EE3530B71A452B7E8FAC6247756A"),
            //    new KeyValuePair<string, string>("SecretKey", "0F985E0B8E4681FD756C40FDC56692"),
            //    new KeyValuePair<string, string>("Brandname", "TEST"),
            //    new KeyValuePair<string, string>("SmsType", "2"),
            //};
            //var client = new HttpClient { BaseAddress = new Uri("http://rest.esms.vn/MainService.svc/json") };
            //var contentt = new FormUrlEncodedContent(pairs);


            //var response =client.PostAsync("/SendMultipleMessage_V4_get/", contentt).Result;

            string URL = "http://rest.esms.vn/MainService.svc/json/SendMultipleMessage_V4_get?Phone="
                                + numb + "&Content=" + content + "&ApiKey=" + APIKey + "&SecretKey="
                                + SecretKey + "&IsUnicode=0&SmsType=8&Sandbox=0";
            string result = SendGetRequest(URL);
            JObject ojb = JObject.Parse(result);
            int CodeResult = (int)ojb["CodeResult"];
            if (CodeResult != 100)
            {
                return false;
            }
            return true;
        }
        private string SendGetRequest(string RequestUrl)
        {
            Uri address = new Uri(RequestUrl);
            HttpWebRequest request;
            HttpWebResponse response = null;
            StreamReader reader;
            if (address == null) { throw new ArgumentNullException("address"); }
            try
            {
                request = WebRequest.Create(address) as HttpWebRequest;
                request.UserAgent = ".NET Sample";
                request.KeepAlive = false;
                request.Timeout = 15 * 1000;
                response = request.GetResponse() as HttpWebResponse;
                if (request.HaveResponse == true && response != null)
                {
                    reader = new StreamReader(response.GetResponseStream());
                    string result = reader.ReadToEnd();
                    result = result.Replace("</string>", "");
                    return result;
                }
            }
            catch (WebException wex)
            {
                if (wex.Response != null)
                {
                    using (HttpWebResponse errorResponse = (HttpWebResponse)wex.Response)
                    {
                        Console.WriteLine(
                            "The server returned '{0}' with the status code {1} ({2:d}).",
                            errorResponse.StatusDescription, errorResponse.StatusCode,
                            errorResponse.StatusCode);
                    }
                }
            }
            finally
            {
                if (response != null) { response.Close(); }
            }
            return null;
        }

    }
}
