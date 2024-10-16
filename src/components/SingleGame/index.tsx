import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../../ui/modalSlice";
import { IModal } from "../MyTypes";
import { useMode } from "../../Context";
function SingleGamePage({ handleSubmit, ShowAlert }: IModal) {
  const { id } = useParams<{ id: string }>();
  const [games, setGames] = useState<any | (() => void)>([]);
  useEffect(() => {
    fetch(`https://console-game-db.vercel.app/games/${id}`)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, [id]);
  const { darkMode } = useMode();
  return (
    <>
      <div
        className={`h-[12vh] flex pl-5 items-center  md:w-full  xs:w-fit ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } `}
      >
        <Link
          className="border border-orange rounded-[15px]  flex items-center p-3 text-[1.4rem] w-fit bg-orange hover:bg-white hover:bg-transparent duration-500  hover:text-orange"
          to={"/games"}
        >
          <i className="fa-solid fa-circle-chevron-left px-2"></i>
          <p>Geri</p>
        </Link>
      </div>
      <div
        className={`${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } flex justify-evenly  md:flex-row md:h-[80vh] lg:h-fit xs:flex-col xs:py-5 xs:gap-3 xs:h-fit`}
      >
        <div className="flex justify-center items-center">
          <img
            className="lg:w-[35vw] md:h-[70vh] md:w-[45vw] lg:h-[70vh] xs:w-[70vw] xs:h-[50vh] object-cover border rounded-[15px]"
            src={games.img}
            alt="image"
          />
        </div>

        <div className="flex flex-col justify-center gap-5">
          <p className="text-[1.4rem] font-bold border p-4">
            {games.name} Game
          </p>
          <p className="md:w-[45vw] xs:w-full p-4 text-[1.7rem]">
            {games.about}
          </p>
          <div className="flex text-[1.5rem] p-2">
            <p>Qiymət :</p>
            <p className="font-bold">{games.price}</p>
          </div>
          <div className="px-3">
            <Modal
              ShowAlert={ShowAlert}
              handleSubmit={handleSubmit}
              text="BUY"
              style="md:w-[15vw] xs:w-fit p-2 duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleGamePage;
