import { Link } from "react-router-dom";
import "./services.scss";
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

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
          <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
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
            <h4>Lorem Ipsum is simply dummy text.</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy .
            </p>
            <span>
              <IoIosCheckmarkCircle className="icon__check" /> Lorem Ipsum is
              simply
            </span>
            <span>
              <IoIosCheckmarkCircle className="icon__check" /> Lorem Ipsum is
              simply
            </span>
            <span>
              <IoIosCheckmarkCircle className="icon__check" /> Lorem Ipsum is
              simply
            </span>
            <span>
              <IoIosCheckmarkCircle className="icon__check" /> Lorem Ipsum is
              simply
            </span>
          </div>
        </div>
        <div className="services__blogs">
          <div className="services__blog">
            <div className="services__blog__left">
              <h5>Lorem Ipsum is simply dummy text dummy text </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <button>Read more</button>
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
              <h5>Lorem Ipsum is simply dummy text dummy text </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <button>Read more</button>
            </div>
          </div>
          <div className="services__blog">
            <div className="services__blog__left">
              <h5>Lorem Ipsum is simply dummy text dummy text </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <button>Read more</button>
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
