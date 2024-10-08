
import { IModal } from "../../components/MyTypes"


function Modal({ text, style }: IModal) {


    return (
        <>
            <label htmlFor="my_modal_6" className={`${style} btn border bg-orange  text-[1.3rem]  hover:bg-white hover:text-orange  hover:border-orange`}>
                <i className="fa-solid fa-cart-shopping mr-2"></i>{`${text}`}
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal flex flex-col gap-5 py-7 md:h-[60vh] xs:h-fit" role="dialog">
                <form className="modal-box flex flex-col gap-5 py-5 md:h-[45vh]">
                    <p>Card code</p>
                    <input type="number" required  maxLength={12} minLength={12} className="lg:w-[24vw] md:w-[45vw] xs:w-[70vw] border border-black p-3 text-[1.3rem]" placeholder="*** *** *** ***" />

                    <div className="flex justify-between md:w-[24vw]">
                        <ruby className=" flex flex-col gap-1 justify-start" >
                            <rt className="text-[1.4rem]">Date</rt>
                            <input minLength={4}  required className="lg:w-[10vw] md:w-[15vw] xs:w-[25vw] p-3 text-[1.5rem] border border-black" placeholder="00/00" type="number" name="" id="" />
                        </ruby>

                        <ruby className=" flex flex-col gap-1 justify-start" >
                            <rt className="text-[1.4rem]">CVV</rt>
                            <input minLength={4}  required className="lg:w-[10vw] md:w-[15vw] xs:w-[25vw] text-[1.5rem] border p-3 border-black" placeholder="***" type="number" name="" id="" />                        </ruby>


                    </div>
                    <div className="flex justify-between md:w-[45vw] lg:w-[24vw] pt-3">
                        <div className="flex gap-3">
                            <img src="/logo/visa.svg" className="md:w-[70px] md:h-[60px] xs:w-[100px] xs:h-[100px]" alt="" />
                            <img src="/logo/mastercard.svg" className="md:w-[70px] md:h-[60px] xs:w-[100px] xs:h-[100px]" alt="" />
                        </div>

                        <div className="flex md:flex-row xs:flex-row md:gap-2">
                            <button className=" rounded-[10px] text-[1.4rem] px-5 h-[6vh] bg-zinc-100 font-medium" >Təsdiqlə</button>
                            <label htmlFor="my_modal_6" className="btn p-3 text-[1.4rem] font-medium">Ləğv et</label>
                        </div>
                    </div>
                </form>
                <div className="modal-action">

                </div>
            </div>
        </>
    )
}

export default Modal
