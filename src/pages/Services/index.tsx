import { Link } from "react-router-dom";

import { FaUser, FaLocationDot, FaServer } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import {  useRef } from "react";

import "./services.scss";
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";


function ServicesPage() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  return (
    <>

      <section className="bg-black text-white">
        <div className="text-center p-6">
          <ul className="flex justify-center gap-4 text-white">

      <section className="services">
        <div className="services__header">
          <ul>

            <li>
              <Link to={"/"}>Əsas səhifə</Link>
            </li>
            <li>&gt;</li>

            <li className="text-orange-500">Servis</li>
          </ul>
          <h2 className="text-3xl font-semibold mt-2">
            Lorem Ipsum is simply dummy text of the printing and.
          </h2>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <div className="bg-[#1C140F] flex p-10 rounded-lg">
            {[
              { icon: <FaUser />, count: "90+", label: "Clients" },
              { icon: <FaLocationDot />, count: "30+", label: "Countries" },
              { icon: <FaServer />, count: "50+", label: "Projects" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-6 p-6 ${
                  index === 1 ? "border-x-2 border-[#EEEFF2]" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-[#FFECEC] flex justify-center items-center text-[#DC7000] text-lg">
                  {item.icon}
                </div>
                <span className="text-2xl font-bold">
                  {item.count}
                  <br />
                  <span className="text-lg font-normal">{item.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-24 gap-20">
          <div>
            <iframe
              ref={iframeRef}
              title="YouTube Video"
              src="https://www.youtube.com/embed/3wHL2VIaFcs?enablejsapi=1"
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

          <div className="flex flex-col gap-5 w-[425px]">
            <h4 className="text-3xl font-bold">
              Lorem Ipsum is simply dummy text.
            </h4>

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

            {Array(4)
              .fill("Lorem Ipsum is simply")
              .map((text, idx) => (
                <span key={idx} className="flex items-center text-sm">
                  <IoIosCheckmarkCircle className="text-green-600 text-lg mr-1" />
                  {text}
                </span>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-40 mt-36">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex justify-center gap-36">
              <div className="w-[535px] flex flex-col gap-10">
                <h5 className="text-3xl font-bold">
                  Lorem Ipsum is simply dummy text dummy text
                </h5>
                <p className="text-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
                <p className="text-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="bg-[#DC7000] w-44 h-12">Read more</button>
              </div>
              <div>
                <img
                  src={
                    idx === 0
                      ? "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23613624/Stray2.jpeg?quality=90&strip=all&crop=7.8125,0,84.375,100"
                      : idx === 1
                      ? "https://c4.wallpaperflare.com/wallpaper/320/142/500/akali-league-of-legends-akali-league-of-legends-league-of-legends-k-da-video-games-hd-wallpaper-preview.jpg"
                      : "https://de.gamewallpapers.com/img_script/mobile_dir2/img.php?src=wallpaper_crysis_2_03_ipad.jpg&height=450&width=506&crop-to-fit&sharpen"
                  }
                  alt=""
                  className="w-[490px] h-full"
                />
              </div>
            </div>
          ))}

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


export default ServicesPage;


