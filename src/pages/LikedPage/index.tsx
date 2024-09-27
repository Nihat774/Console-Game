import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Modal from "../../ui/modalSlice";
import { useEffect, useState } from "react";

function LikedPage() {
  const data = useSelector((state: RootState) => state.cart.value);
  const [cartGame, setCartGame] = useState(data);
  const [say, setSay] = useState(1);

  useEffect(() => {
    setCartGame(data);
  }, [data]);

  const handleClick = (clickedId: number) => {
    setCartGame(
      cartGame.filter((game) => {
        return game.id != clickedId;
      })
    );
  };

  if (!cartGame.length) {
    return (
      <>
        <div className="h-[10vh] flex flex-col justify-center w-fit">
          <Link
            className="border p-3 bg-orange text-white text-[1.3rem] font-semibold rounded-[15px]"
            to={"/games"}
          >
            Geri
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="border text-[1.4rem] bg-orange text-white p-3">
            Səbətiniz boşdur.
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-[10vh] flex justify-between items-center px-5">
          <Link
            className="border p-3 bg-orange text-white text-[1.3rem] font-semibold rounded-[15px]"
            to={"/games"}
          >
            Geri
          </Link>
          <Modal text="Səbəti təsdiqlə" style="w-fit text-white" />
        </div>
        <div className="grid lg:grid-cols-4 gap-3 place-items-center xs:grid-cols-2 md:grid-cols-3 py-5">
          {cartGame.map((game) => {
            return (
              <>
                <div className="border p-3 rounded-[20px] xs:w-full lg:w-[20vw] flex flex-col gap-3 ">
                  <p className="flex justify-end">
                    <i
                      className="fa-solid fa-xmark border flex justify-end h-fit w-fit py-1 px-2 border-black"
                      onClick={() => handleClick(game.id)}
                    ></i>
                  </p>
                  <div>
                    <div className="flex justify-center">
                      <img
                        className="lg:w-[12vw] lg:h-[150px] xs:w-[100vw] xs:h-[30vh] rounded-[15px] object-cover"
                        src={game.img}
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col gap-3 py-2">
                      <p className="text-[1.5rem] font-semibold">
                        Oyun adı : {game.name}
                      </p>

                      <p className="text-[1.5rem] font-semibold flex">
                        Qiymət:
                        <del className="text-[1rem] flex items-center text-zinc-600 px-2">
                          {game.oldPrice}
                        </del>
                        {game.price}
                      </p>
                      <p className="text-[1.4rem] font-semibold">say : {say}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default LikedPage;
