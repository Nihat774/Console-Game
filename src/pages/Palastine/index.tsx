import { useMode } from "../../Context";

function Free() {
  const { darkMode } = useMode();
  return (
    <>
      <section className="flex flex-col">
        <p
          className={`flex justify-center font-semibold text-[1.5rem] py-2 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          Free Palastine
        </p>
        <div className="flex">
          <p className="h-[7px] w-1/4 bg-red"></p>
          <p className="h-[7px] w-1/4 bg-black"></p>
          <p className="h-[7px] w-1/4 bg-white"></p>
          <p className="h-[7px] w-1/4 bg-green"></p>
        </div>
      </section>
    </>
  );
}

export default Free;
