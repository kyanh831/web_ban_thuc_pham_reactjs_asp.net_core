using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Tools
{
    public class AprioriAlgorithm
    {
        List<Oder> oders;
        private readonly QL_BanHang_Online_v4Context _context;

        
        public AprioriAlgorithm(QL_BanHang_Online_v4Context context)
        {
            _context = context;
            
        }

        public AprioriAlgorithm()
        {
            oders = new List<Oder>();
        }

        public void AddOder(List<PhieuDatHang> phieuDatHangs, List<ChiTietPhieuDatHang> chiTietPhieuDatHangs)
        {

            oders = new List<Oder>();
            foreach (PhieuDatHang p in phieuDatHangs)
            {
                Oder d = new Oder();
                d.MaPhieuDatHang = p.MaPhieuDatHang;
                d.MaThongTinSanPham = new List<int>();

                foreach (ChiTietPhieuDatHang t in chiTietPhieuDatHangs)
                {
                    if (t.MaPhieuDatHang == p.MaPhieuDatHang)
                    {
                        d.MaThongTinSanPham.Add(t.MaThongTinSanPham);
                    }
                }
                 oders.Add(d);
            }
        }
    
        public async Task<List<Oder>> getList()
        {
            return oders;
        }

        public async Task<List<C1>> getListC1(List<Oder> oders)
        {
            List<C1> lstC1 = new List<C1>();
            C1 c;
            foreach (Oder d in oders)
            {
                foreach (int t in d.MaThongTinSanPham)
                {
                    c = new C1();
                    var tam = lstC1.Where(x => x.MaThongTinSanPham == t).FirstOrDefault();
                    if(tam == null)
                    {
                        c.MaThongTinSanPham = t;
                        c.qty = 1;
                        lstC1.Add(c);
                    }
                    else
                    {
                        tam.qty++;
                        lstC1.Remove(tam);
                        lstC1.Add(tam);
                    }
                }
            }
            List<C1> lstC2 = new List<C1>();
            foreach (C1 s in lstC1)
            {
                if (s.qty >= 2)
                    lstC2.Add(s);
            }
            return lstC2;
        }

        public async Task<List<C1>> getListC2(List<Oder> oders, int size)
        {
            C1 c;
            int []arr = new int[oders.Count()]; 

            for(int i = 1; i< oders.Count(); i++)
            {
                List<C1> lstC2 = new List<C1>();
                c = new C1();
                for (int j = i+1; j <= oders.Count(); j++)
                {
                    
                }
            }
            
            return null;
        }


    }
}
