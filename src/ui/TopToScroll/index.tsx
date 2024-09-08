import ScrollToTop from "react-scroll-to-top"


function ScrollIcon() {
    return (
        <>
            <ScrollToTop smooth className="fixed left-[3%] bottom-[8%] bg-orange flex justify-center items-center " component = {<i className="fa-solid fa-angle-up text-[1.5rem]"></i>}  />
        </>
    )
}
export default ScrollIcon
