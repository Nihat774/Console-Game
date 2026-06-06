import { Link } from "react-router-dom"
import { useMode } from "../../Context"

function MyAccordion() {
  const { darkMode } = useMode()

  return (
    <div className={`flex flex-col gap-3 px-8 ${
      darkMode ? "bg-black text-white" : "bg-white text-black"
    }`}>

      {/* 1 */}
      <div className={`collapse collapse-arrow border ${
        darkMode ? "border-white bg-stone-800 text-white" : "border-black bg-gray-100 text-black"
      }`}>
        <input type="radio" name="my-accordion-2" defaultChecked />

        <div className="collapse-title text-xl font-medium">
          Oyunların ödəniş üsulu necə olur?
        </div>

        <div className="collapse-content">
          <p>
            Ödənişlər həm hissəli həm də nəğd ola bilər. Diqqətinizə çatdıraq ki, hissəli ödəniş zamanı faiz tutulmur.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className={`collapse collapse-arrow border ${
        darkMode ? "border-white bg-stone-800 text-white" : "border-black bg-gray-100 text-black"
      }`}>
        <input type="radio" name="my-accordion-2" />

        <div className="collapse-title text-xl font-medium">
          Oyunlarınız yalnız PC üçündür?
        </div>

        <div className="collapse-content flex flex-col gap-2">
          <p>
            Əlbəttə ki xeyr, bizim oyunlarımızı AppStore və ya PlayStore-dan əldə edə bilərsiniz.
          </p>

          <a
            className="hover:text-red-500 font-bold"
            href="https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&pcampaignid=web_share"
            target="_blank"
            rel="noreferrer"
          >
            Play Store
          </a>

          <a
            className="hover:text-red-500 font-bold"
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            App Store
          </a>
        </div>
      </div>

      {/* 3 */}
      <div className={`collapse collapse-arrow border ${
        darkMode ? "border-white bg-stone-800 text-white" : "border-black bg-gray-100 text-black"
      }`}>
        <input type="radio" name="my-accordion-2" />

        <div className="collapse-title text-xl font-medium">
          Sizinlə əməkdaşlıq etmək mümkündür?
        </div>

        <div className="collapse-content flex flex-col gap-2">
          <p>
            Əlbəttə, bunun üçün bizə zəng edə və ya ofisimizə yaxınlaşa bilərsiniz.
          </p>

          <a
            href="tel:+994557748548"
            className="hover:text-red-500 font-bold"
          >
            tel: +994 55 774 85 48
          </a>

          <Link
            to="/contact"
            className="hover:text-red-500 font-bold"
          >
            Ofisimiz: keçid
          </Link>
        </div>
      </div>

    </div>
  )
}

export default MyAccordion