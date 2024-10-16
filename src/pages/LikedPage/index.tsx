import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Modal from "../../ui/modalSlice";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/variants";

function LikedPage() {
  const data = useSelector((state: RootState) => state.cart.value);
  const [cartGame, setCartGame] = useState(data);
  const [say, setSay] = useState(1);

  const showAlert = useCallback(() => {
    Swal.fire({
      title: "Sifarişiniz təsdiqləndi!",
      text: "Bizi seçdiyiniz üçün təşəkkürlər",
      icon: "success",
      confirmButtonText: "Tamam",
      
    }).then(() => {});
  }, []);
  function increment() {
    if (say < 3) {
      setSay(say + 1);
    } else {
      alert("Bir oyundan maksimum 3 ədəd almaq mümkündür!");
    }
  }
  function decrement() {
    if (say > 1) {
      setSay(say - 1);
    }
  }
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      showAlert();
      setTimeout(()=>{
        window.location.reload()
      },500)
    },
    [showAlert]
    
  );

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="container mx-auto"
        >
          <div className="h-[15vh] flex flex-col items-center justify-center w-fit">
            <Link
              className="py-2 px-[4vw] bg-orange text-white text-[1.3rem] font-semibold rounded-[15px] flex flex-col justify-center"
              to={"/games"}
            >
              Geri
            </Link>
          </div>
          <div className="flex justify-center h-[60vh] items-center">
            <p className="border text-[1.4rem] bg-orange text-white p-2">
              Səbətiniz boşdur.
            </p>
          </div>
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <div className="container mx-auto">
          <div className=" h-[14vh] flex justify-between items-center">
            <Link
              className="border  p-3 bg-orange text-white text-[1.3rem] font-semibold rounded-[15px]"
              to={"/games"}
            >
              Geri
            </Link>
            <Modal
              ShowAlert={showAlert}
              handleSubmit={handleSubmit}
              text="Səbəti təsdiqlə"
              style="w-fit text-white"
            />
          </div>
          <div className="grid lg:grid-cols-4 gap-3 place-items-center xs:grid-cols-1 md:grid-cols-3 py-5">
            {cartGame.map((game) => {
              return (
                <React.Fragment key={game.id}>
                  <div className=" border p-3 rounded-[20px] xs:w-full lg:w-[23vw]  flex flex-col gap-3 ">
                    <p className="flex justify-end">
                      <i
                        className="fa-solid fa-xmark  flex justify-end h-fit w-fit py-1 px-2 border-black"
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
                        <div className="flex gap-2">
                          <p
                            className="border font-semibold border-orange text-[1.5rem] px-2 py-0 cursor-pointer"
                            onClick={decrement}
                          >
                            -
                          </p>
                          <p className="border font-semibold border-orange text-[1.5rem] px-2 py-0">
                            {say}
                          </p>
                          <p
                            className="border font-semibold border-orange text-[1.5rem] px-2 py-0 cursor-pointer"
                            onClick={increment}
                          >
                            +
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default LikedPage;
