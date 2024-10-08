import { Link } from "react-router-dom";
import "./services.scss";
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../../ui/Button";

function ServicesPage() {
  return (
    <>
      <section className="services">
        <div className="services__header">
          <ul>
            <li>
              <Link to={"/"}>Əsas səhifə</Link>
            </li>
            <li>&gt;</li>
            <li>Servis</li>
          </ul>
          <h2>24/7 Müştəri Xidməti və Texniki Dəstək</h2>
          <p>
          Platformamızda 24/7 texniki dəstək və müştəri xidməti ilə oyun təcrübənizi problemsiz yaşayacaqsınız.{" "}
          </p>
        </div>
        <div className="services__groups">
          <div className="services__group">
            <div className="services__group__first">
              <div className="services__group__first__icon">
                <FaUser />
              </div>
              <span>
                90+ <br />
                <span>Clients</span>
              </span>
            </div>
            <div className="services__group__second">
              <div className="services__group__second__icon">
                <FaLocationDot />
              </div>
              <span>
                30+ <br />
                <span>Countries</span>
              </span>
            </div>
            <div className="services__group__third">
              <div className="services__group__third__icon">
                <FaServer />
              </div>
              <span>
                50+ <br />
                <span>Projects</span>
              </span>
            </div>
          </div>
        </div>
        <div className="services__video">
          <div className="services__video__left">
            <div>
              <iframe
                title="YouTube Video"
                src={`https://www.youtube.com/embed/3wHL2VIaFcs`}
                style={{
                  width: "670px",
                  height: "355px",
                  borderRadius: "15px",
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="services__video__right">
            <h4>Daimi Texniki Dəstək Xidməti
            </h4>
            <p>
            Oyunlarınızı problemsiz və sürətli şəkildə oynamaq üçün hər zaman yanınızdayıq. Mütəxəssis komandamız 24/7 sizə texniki dəstək və xidmət göstərir.

            </p>
            <span>
              <IoIosCheckmarkCircle className="icon__check" /> Hər zaman operativ dəstək


            </span>
            <span>
              <IoIosCheckmarkCircle className="icon__check" /> Peşəkar və təcrübəli komanda

            </span>
            <span>
              <IoIosCheckmarkCircle className="icon__check" /> Texniki problemlərin sürətli həlli

            </span>
            <span>
              <IoIosCheckmarkCircle className="icon__check" /> Yeniliklər və təkmilləşdirmələr barədə məlumat


            </span>
          </div>
        </div>
        <div className="services__blogs">
          <div className="services__blog">
            <div className="services__blog__left">
              <h5>Oyun Dünyasının Sərhədsiz Macəraları
              </h5>
              <p>
              Konsol oyunlarında ən yaxşı təcrübəni yaşamaq üçün bizimlə olun. Platformamız, oyunsevərlərin ehtiyaclarını nəzərə alaraq, müxtəlif janr və üslublarda geniş oyun seçimi təqdim edir. İstər yeni çıxan oyunlar, istərsə də klassik əsərlər - hamısı bir arada, hər kəsin zövqünə uyğun bir şey var.

Bizim platforma, sizi virtual dünyaların ən həyəcanlı məkanlarına aparacaq. Oyunçular, geniş açıq dünyalarda sərbəst hərəkət edə, mükəmməl hekayələrdə öz rollarını canlandıraraq, unudulmaz anlar yaşayacaqlar.
              </p>
              
              <Button txt2={undefined} txt1={"Ətraflı"} still={""}/>         
                 </div>
            <div className="services__blog__right">
              <img
                src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23613624/Stray2.jpeg?quality=90&strip=all&crop=7.8125,0,84.375,100"
                alt=""
              />
            </div>
          </div>
          <div className="services__blog">
            <div className="services__blog__right">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/320/142/500/akali-league-of-legends-akali-league-of-legends-league-of-legends-k-da-video-games-hd-wallpaper-preview.jpg"
                alt=""
              />
            </div>
            <div className="services__blog__left">
              <h5>Oyun Təcrübəniz Burada Başlayır
              </h5>
              <p>
              Oyun Platforması, oyunsevərlərin bütün ehtiyaclarını qarşılamaq məqsədilə yaradılmışdır. Müxtəlif janrlarda oyunlar təqdim edərək, hər bir istifadəçiyə unudulmaz bir təcrübə yaşatmağa hədəfləyirik. İstər aksiyon, istər macəra, istərsə də strategiya janrında olsun, burada hər kəs öz zövqünə uyğun oyunlar tapa bilər. Müasir texnologiyalarla təchiz olunmuş serverlərimiz, sürətli yüklənmə və fasiləsiz oyun axışı təmin edərək, oyunçulara optimal təcrübə təqdim edir.
</p>
             
              <Button txt2={undefined} txt1={"Ətraflı"} still={""}/>     
                     </div>
          </div>
          <div className="services__blog">
            <div className="services__blog__left">
              <h5> Console Game ilə Oyun Təcrübəsi </h5>
              <p>
              "Console Game, oyunsevərlər üçün yaradılmış müasir bir platformadır. Burada müxtəlif janrlarda və yaş qruplarına uyğun oyunlar tapa bilərsiniz. İstər gənc yaşda olan, istərsə də yaşlı oyunçular üçün xüsusi olaraq hazırlanmış oyunlar təqdim edirik. Hər bir oyun, əyləncə və yaradıcılıq dolu unudulmaz bir təcrübə təqdim edir.

Platformamız, istifadəçilərin rahatlıqla oyun seçimi edə biləcəyi geniş bir kataloqdan ibarətdir.
              </p>

            
              <Button txt2={undefined} txt1={"Ətraflı"} still={""}/>
            </div>
            <div className="services__blog__right">
              <img
                src="https://de.gamewallpapers.com/img_script/mobile_dir2/img.php?src=wallpaper_crysis_2_03_ipad.jpg&height=450&width=506&crop-to-fit&sharpen"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
