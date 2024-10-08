import { useEffect, useState } from "react";
import { IAllGames } from "../../components/MyTypes";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../state/cartSlice";
import { RootState } from "../../state/store";

function GamesPage() {
  const url = "http://localhost:3000/games";
  const [games, setGames] = useState<IAllGames[]>([]);
  const [clickedItems, setClickedItems] = useState<number[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  const [search, setSearch] = useState("");
  const filteredGames = games.filter(({ name }: IAllGames) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const gameLocation = useNavigate();
  const dispatch = useDispatch();
  const cartGame = useSelector((state: RootState) => state.cart.value);

  const addToCard = ({ id, img, name, price, oldPrice }: any) => {
    if (!clickedItems.includes(id)) {
      dispatch(addToCart({ id, img, name, price, oldPrice }));
      setClickedItems((prevItems) => [...prevItems, id]);
    }
  };

  return (
    <>
      <div className="bg-orange px-3 items-center">
        <div className="md:flex md:flex-row md:h-[12vh] lg:h-[15vh] xs:flex-col xs:p-4 xs:gap-7 justify-between items-center">
          <Link
            to={"/"}
            className="md:text-[2rem] xs:text-[1.7rem] text-black font-bold"
          >
            consolegame.com
          </Link>
          <div className="flex justify-between xs:w-full lg:w-[40%] sticky top-[150px] bg-orange">
            <input
              type="text"
              maxLength={10}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="md:w-[30vw] xs:w-[45vw] xs:py-2 lg:h-[10vh] md:h-[7vh] md:px-3 rounded-[15px] px-2 text-[1.4rem]"
              placeholder="Oyun Axtar"
            />
          </div>
        </div>
      </div>
      <div className="contanier px-3">
        <div className="grid lg:grid-cols-4 md:gap-4 xs:grid-cols-1 xs:place-items-center xs:gap-3 md:grid-cols-2 p-5">
          {filteredGames.map(
            ({ name, img, oldPrice, price, id }: IAllGames) => {
              const isClicked = clickedItems.includes(id);
              return (
                <div key={id}>
                  <NavLink
                    to={"/likedgame"}
                    className="items-center border p-5 rounded-full fixed z-50 xs:bottom-[10%] md:bottom-[8%] md:left-[15px] lg:left-[4%] bg-orange"
                  >
                    <div className="w-fit px-2 h-[26px] rounded-[15px] bg-black absolute xs:right-[10px] top-0 md:right-[5px] lg:right-[8.5%] text-white text-center">
                      {cartGame.length}
                    </div>
                    <i className="fa-solid fa-cart-shopping text-[2rem] text-white"></i>
                  </NavLink>
                  <div className="border w-fit rounded-[10px] hover:scale-105 duration-500">
                    <div onClick={() => gameLocation(`${id}`)}>
                      <img
                        className="cursor-pointer lg:w-[23vw] md:w-[45vw] md:h-[60vh] xs:w-[90vw] xs:h-[55vh] md:object-cover xs:object-fill rounded-[10px]"
                        src={img}
                        alt={name}
                      />
                    </div>
                    <div className="flex justify-between py-3 px-1">
                      <p className="text-[1.4rem] font-bold">{name}</p>
                      <div className="flex gap-2">
                        <del className="text-zinc-500 py-1 text-[.9rem]">
                          {oldPrice}
                        </del>
                        <p className="text-[1.4rem] font-bold">{price}</p>
                      </div>
                    </div>
                    <div className="flex justify-end py-2">
                      <div className="flex gap-4 text-[1.4rem] px-2">
                        <button
                          className={`btn border p-3 ${
                            isClicked
                              ? "bg-gray-500 text-white"
                              : "bg-orange text-white"
                          } text-semibold hover:text-orange hover:bg-white hover:border-orange text-[1.3rem]`}
                          disabled={isClicked}
                          onClick={() =>
                            addToCard({ id, img, name, price, oldPrice })
                          }
                        >
                          {isClicked ? "Səbətdə" : "Səbətə əlavə et"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default GamesPage;
