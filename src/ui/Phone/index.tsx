
function Phone() {
    return (
        <>
           <div className="flex justify-end">
           <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display ">
                    <div className="artboard artboard-demo phone-1   flex flex-col justify-start mt-10 w-full">
                        <div className="border-b-2 flex justify-between items-center  w-full px-3 py-2">
                            <i className="fa-solid fa-angle-left"></i>
                            <p className="text-[1.2rem] font-medium">console.game</p>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>

                        <div className="flex justify-around w-full ">
                            <div className="flex flex-col justify-center">
                                <img src="public/logo/instagramLogo.svg" className=" rounded-full size-[10vh]" alt="" />
                            </div>

                            <div className="w-[70%]">
                                <div className="flex gap-5 py-2 text-center justify-center">
                                    <div>
                                        <p className="text-[1.1rem] font-bold">3314</p>
                                        <p className="text-slate-500">posts</p>
                                    </div>

                                    <div>
                                        <p className="text-[1.1rem] font-bold">171m</p>
                                        <p className="text-slate-500">followers</p>
                                    </div>

                                    <div>
                                        <p className="text-[1.1rem] font-bold ">291</p>
                                        <p className="text-slate-500">following</p>
                                    </div>
                                </div>

                                <div className="flex gap-1">
                                    <div className="border rounded-[6px] border-blue-500 w-[20vw]">
                                        <p className="text-blue-500 text-[.8rem] font-semibold  flex justify-center items-center py-2"><i className="pt-1 px-2 fa-solid fa-plus"></i> FOLLOW</p>
                                    </div>

                                    <div>
                                        <i className="p-3 border text-blue-500 border-blue-500 rounded-[6px] fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <p className="font-bold">console.game <i className="text-blue-600 fa-solid fa-circle-check"></i></p>
                            <p className="text-wstone">Game design point</p>
                            <p className="text-stone">Followed by webdeveloper</p>
                            <p className="text-blue-600">www.consolegame.com</p>
                        </div>
                        {/* ICONS */}
                        <div className="flex justify-around w-full border-y-2 py-2 text-[1.4rem] border-t-wstone">
                            <i className="fa-solid fa-border-none"></i>
                            <i className="fa-solid fa-list"></i>
                            <i className="fa-solid fa-location-dot"></i>
                            <i className="fa-solid fa-users"></i>
                        </div>

                        <div className="grid grid-cols-3">
                            <img className="h-[14vh]" src="public/instaImage/nature1.jpeg" alt="" />
                            <img className="h-[14vh]" src="public/instaImage/nature2.jpeg" alt="" />
                            <img className="h-[14vh]" src="public/instaImage/nature3.jpeg" alt="" />
                            <img className="h-[14vh]" src="public/instaImage/nature4.jpeg" alt="" />
                            <img className="h-[14vh]" src="public/instaImage/nature5.jpeg" alt="" />
                            <img className="h-[14vh]" src="public/instaImage/nature6.jpeg" alt="" />
                        </div>

                        <div className="w-full flex justify-around py-3 text-[1rem] border-b-2 border-wstone ">
                            <i className="fa-solid fa-house"></i>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-camera"></i>
                            <i className="fa-regular fa-heart"></i>
                            <img className="size-[15px] rounded-full" src="public/instaImage/nature6.jpeg" alt="" />
                        </div>

                        <div className="w-full flex justify-around py-2 text-[1.2rem]">
                            <i className="fa-solid fa-bars"></i>
                            <i className="border-black size-[20px] rounded-[6px] border"></i>
                            <i className="fa-solid fa-angle-left"></i>
                        </div>

                    </div>
                </div>
            </div>
           </div>
        </>
    )
}

export default Phone
