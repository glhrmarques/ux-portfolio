export default function ProductCard() {
    return(
        <section>
            <h1 className="text-white text-[40px] font-medium pb-[80px]">Product Card</h1>
            
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[120px]">
                {/* Default  state*/}
                <div className="flex flex-col gap-6">
                    <div className="bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
                        <div className="w-[180px] flex flex-col gap-2">
                            <div className=" flex justify-end items-end p-2
                            bg-[url('/images/product-card-image.png')] bg-no-repeate bg-no-repeat bg-cover bg-center w-full h-[180px]">
                                <button className=" flex justify-center items-center
                                w-[40px] h-[40px] bg-[#005BE2] hover:bg-[#003788] rounded-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    class="size-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-[16px] font-[500] text-black line-clamp-2">Rexona Men Antitranspirante Aerossol Invisible 250ml</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-[16px] leading-none font-[400] text-black/50 line-through invisible"> R$ 0,00 </p>
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="text-[22px] leading-none font-[700] text-black">R$ 0,00</p>
                                    <p className="text-[16px] leading-none font-[400] text-black/50"> (1 un.)</p>
                                </div>
                                <hr className="border-black/30"/>
                                <p className="text-[16px] leading-nomne font-[400] text-black/50">+99 Em estoque</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Home widget</p>
                        <p className="text-white font-regular text-[16px]">Focused to display the main workflows in the app.</p>
                    </div>
                </div>

                {/* Product with discount*/}
                <div className="flex flex-col gap-6">
                    <div className="bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
                        <div className="w-[180px] flex flex-col gap-2">
                            <div className=" flex justify-end items-end p-2
                            bg-[url('/images/product-card-image.png')] bg-no-repeate bg-no-repeat bg-cover bg-center w-full h-[180px]">
                                <button className=" flex justify-center items-center
                                w-[40px] h-[40px] bg-[#005BE2] hover:bg-[#003788] rounded-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    class="size-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-[16px] font-[500] text-black line-clamp-2">Rexona Men Antitranspirante Aerossol Invisible 250ml</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-[16px] leading-none font-[400] text-black/50 line-through invisible"> R$ 0,00 </p>
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="text-[22px] leading-none font-[700] text-black">R$ 0,00</p>
                                    <p className="text-[16px] leading-none font-[400] text-black/50"> (1 un.)</p>
                                </div>
                                <hr className="border-black/30"/>
                                <p className="text-[16px] leading-nomne font-[400] text-black/50">+99 Em estoque</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Home widget</p>
                        <p className="text-white font-regular text-[16px]">Focused to display the main workflows in the app.</p>
                    </div>
                </div>

                {/* Product  added*/}
                <div className="flex flex-col gap-6">
                    <div className="bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
                        <div className="w-[180px] flex flex-col gap-2">
                            <div className=" flex justify-end items-end p-2
                            bg-[url('/images/product-card-image.png')] bg-no-repeate bg-no-repeat bg-cover bg-center w-full h-[180px]">
                                <button className=" flex justify-center items-center
                                w-[40px] h-[40px] bg-[#005BE2] hover:bg-[#003788] rounded-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    class="size-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-[16px] font-[500] text-black line-clamp-2">Rexona Men Antitranspirante Aerossol Invisible 250ml</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-[16px] leading-none font-[400] text-black/50 line-through invisible"> R$ 0,00 </p>
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="text-[22px] leading-none font-[700] text-black">R$ 0,00</p>
                                    <p className="text-[16px] leading-none font-[400] text-black/50"> (1 un.)</p>
                                </div>
                                <hr className="border-black/30"/>
                                <p className="text-[16px] leading-nomne font-[400] text-black/50">+99 Em estoque</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Home widget</p>
                        <p className="text-white font-regular text-[16px]">Focused to display the main workflows in the app.</p>
                    </div>
                </div>

                {/* Product  added*/}
                <div className="flex flex-col gap-6">
                    <div className="bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
                        <div className="w-[180px] flex flex-col gap-2">
                            <div className=" flex justify-end items-end p-2
                            bg-[url('/images/product-card-image.png')] bg-no-repeate bg-no-repeat bg-cover bg-center w-full h-[180px]">
                                <button className=" flex justify-center items-center
                                w-[40px] h-[40px] bg-[#005BE2] hover:bg-[#003788] rounded-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    class="size-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-[16px] font-[500] text-black line-clamp-2">Rexona Men Antitranspirante Aerossol Invisible 250ml</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-[16px] leading-none font-[400] text-black/50 line-through invisible"> R$ 0,00 </p>
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="text-[22px] leading-none font-[700] text-black">R$ 0,00</p>
                                    <p className="text-[16px] leading-none font-[400] text-black/50"> (1 un.)</p>
                                </div>
                                <hr className="border-black/30"/>
                                <p className="text-[16px] leading-nomne font-[400] text-black/50">+99 Em estoque</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Home widget</p>
                        <p className="text-white font-regular text-[16px]">Focused to display the main workflows in the app.</p>
                    </div>
                </div>
                
            </div>



        </section>
    )

}