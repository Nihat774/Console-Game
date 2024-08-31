function TopScroll() {
    function ScrollTop() {
        return window.scrollTo({ top: 0, behavior: "smooth" })
    }
    console.log();
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {

        return (
            <>
                <div>
                    <i className="fa-solid fa-arrow-up border p-3 fixed right-[5%] bottom-[15%] text-[1.4rem] bg-white z-99 "
                        onClick={ScrollTop}></i>
                </div>
            </>
        )
    }
}


export default TopScroll;
