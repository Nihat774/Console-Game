import { Link } from "react-router-dom"

function NewsPage() {
  return (
    <>
      <div className="bg-black text-white">
        <Link to={'/'} className="">
          <img className="h-[13vh] md:w-[35vw] object-contain" src="../logo/console game-endlogo.png" alt="" />
        </Link>
        <p> Bizim Komandamız</p>
      </div>
    </>
  )
}

export default NewsPage
