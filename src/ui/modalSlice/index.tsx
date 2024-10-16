import { IModal } from "../../components/MyTypes";
function Modal({ text, style, handleSubmit, ShowAlert }: IModal) {
  return (
    <>
      <label
        htmlFor="my_modal_6"
        className={`${style} btn border bg-orange  text-[1.3rem]  hover:bg-white hover:text-orange  hover:border-orange`}
      >
        <i className="fa-solid fa-cart-shopping mr-2"></i>
        {`${text}`}
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div
        className="modal flex flex-col gap-5  lg:h-[100vh] justify-center md:h-[80vh] xs:w-[90%]"
        role="dialog"
      >
        <form
          onSubmit={handleSubmit}
          className="modal-box flex flex-col gap-5 lg:w-[32vw] md:w-[55vw] lg:h-[68vh] md:h-[62vh]"
        >
          <ruby className=" flex flex-col gap-1">
            <div className="flex justify-between">
              <rt className="text-[1.2rem]">Card code</rt>
              <div className="flex justify-end">
                <label
                  htmlFor="my_modal_6"
                  className=" fa-solid fa-xmark text-[1.3rem]  p-2"
                ></label>
              </div>
            </div>
            <input
              type="number"
              maxLength={12}
              minLength={12}
              className="lg:w-[26vw] md:w-[45vw] xs:w-[70vw] border border-black p-3 text-[1.3rem]"
              placeholder="*** *** *** ***"
            />
          </ruby>

          <div className="flex justify-between lg:w-[26vw] md:w-[45vw]  xs:w-[85%]">
            <ruby className=" flex flex-col gap-1 ">
              <rt className="text-[1.2rem]">Date</rt>
              <input
                maxLength={4}
                className="lg:w-[10vw] md:w-[15vw] xs:w-[25vw] p-2 text-[1.5rem] border border-black"
                placeholder="00/00"
                type="number"
              />
            </ruby>

            <ruby className=" flex flex-col gap-1 justify-start">
              <rt className="text-[1.2rem]">CVV</rt>
              <input
                minLength={4}
                className="lg:w-[10vw] md:w-[15vw] xs:w-[25vw] text-[1.5rem] border p-2 border-black"
                placeholder="***"
                type="password"
              />{" "}
            </ruby>
          </div>

          <div className="flex xs:justify-between  xs:w-[85%] md:w-[45vw] lg:w-[26vw] pt-3">
            <img
              src="/logo/visa.svg"
              className="md:w-[70px] md:h-[60px] xs:w-[100px] xs:h-[100px]"
              alt=""
            />
            <img
              src="/logo/mastercard.svg"
              className="md:w-[70px] md:h-[60px] xs:w-[100px] xs:h-[100px]"
              alt=""
            />
          </div>
          <div className="flex md:flex-row xs:flex-row md:gap-2  md:w-[45vw] justify-between lg:w-[26vw]">
            <button
              onClick={ShowAlert}
              className=" rounded-[10px] text-[1.4rem] px-4 h-[8vh] bg-zinc-100 font-medium"
            >
              Təsdiqlə
            </button>

            <label
              htmlFor="my_modal_6"
              className="btn p-3 text-[1.4rem] font-medium"
            >
              Ləğv et
            </label>
          </div>
        </form>
        <div className="modal-action"></div>
      </div>
    </>
  );
}

export default Modal;
