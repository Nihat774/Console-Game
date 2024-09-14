import ScrollToTop from "react-scroll-to-top"


function ScrollIcon() {
    return (
        <>
            <ScrollToTop smooth className=" fixed xs:right-[10%] md:right-[3%] bottom-[8%] bg-orange flex justify-center items-center z-999999999" component = {<i className="fa-solid fa-angle-up text-[1.5rem]"></i>}  />
        </>
    )
}
export default ScrollIcon
