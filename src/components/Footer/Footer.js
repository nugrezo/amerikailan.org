/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-container footer-row1">
          <div className="footer-row">Kurumsal</div>
          <div className="footer-row">Gizlilik ve Kullanim</div>
          <div className="footer-row">Bizi Takip Edin</div>
        </div>
        <div className="footer-container footer-row2">
          <ul>
            <li>
              <a
                href="https://wa.me/+16468867730"
                rel="noopener noreferrer"
                alt="whatsapp"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="#" alt="musterihizmetleri">
                7/24 Musteri Hizmetleri
              </a>
            </li>
            <li>
              <a href="#" alt="iletisim">
                amerikailan.org Iletisim
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container footer-row3">
          <p className="description">
            Sitemizde bulunan kullanıcı tarafından oluşturulan tüm içerik, görüş
            ve bilgilerin doğruluğu, eksiksizliği ve değişmezliği kullanıcı
            tarafından sağlanan içeriğe aittir. İlgili içeriğin yayınlanmasıyla
            ilgili yasal sorumluluklar da içerik oluşturan kullanıcıya aittir.
            Sitemiz, içeriğin doğruluğunu, eksiksizliğini veya yasalara
            uygunluğunu garanti etmez. Bu içeriğin yanlış, eksik veya
            yürürlükteki yasal düzenlemelere aykırı olmasından dolayı sitemiz
            hiçbir şekilde sorumlu tutulamaz. Kullanıcılar, yayınladıkları
            içeriklerin yasalara uygun, doğru ve güncel olduğunu sağlamakla
            yükümlüdürler. Sitemiz, kullanıcıların oluşturduğu içerikleri
            denetleme veya düzenleme sorumluluğunu üstlenmez, ancak gerekli
            durumlarda içerikleri inceleyerek uygun adımları atma hakkını saklı
            tutar.
          </p>
        </div>
        <p className="copyright">
          © 2023 amerikaİlan.org - Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
};

export default Footer;
