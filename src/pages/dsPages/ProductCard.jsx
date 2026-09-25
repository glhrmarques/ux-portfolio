export default function ProductCard() {
    return(
        <section>
            <h1 className="text-white text-[40px] font-medium pb-[80px]">Product Card</h1>
            
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[120px]">
                {/* Default  state*/}
                <div className="flex flex-col gap-6">
                    <div className="min-h-[400px] bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
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
                            <p className="text-[16px] font-[500] text-black line-clamp-2">Rexona Men Invisible Antiperspirant Spray 250ml</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-[16px] leading-none font-[400] text-black/50 line-through invisible"> R$ 0,00 </p>
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="text-[22px] leading-none font-[700] text-black">R$ 0,00</p>
                                    <p className="text-[16px] leading-none font-[400] text-black/50"> (1 unit)</p>
                                </div>
                                <hr className="border-black/30"/>
                                <p className="text-[16px] leading-nomne font-[400] text-black/50">+99 In stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Default</p>
                        <p className="text-white font-regular text-[16px]">Products available to be sold without any discount</p>
                    </div>
                </div>

                {/* Product with discount*/}
                <div className="flex flex-col gap-6">
                    <div className="min-h-[400px] bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
                        <div className="w-[180px] flex flex-col gap-2">
                            <div className=" flex justify-end items-end p-2 relative
                            bg-[url('/images/product-card-image.png')] bg-no-repeate bg-no-repeat bg-cover bg-center w-full h-[180px]">
                                <span className="bg-[#14C774] py-1 px-3 rounded-full text-[12px] font-[700] text-white
                                absolute left-2 top-2
                                ">50% OFF</span>
                                <button className=" flex justify-center items-center
                                w-[40px] h-[40px] bg-[#005BE2] hover:bg-[#003788] rounded-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    class="size-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-[16px] font-[500] text-black line-clamp-2">Rexona Men Invisible Antiperspirant Spray 250ml</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-[16px] leading-none font-[400] text-black/50 line-through"> R$10,00 </p>
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="text-[22px] leading-none font-[700] text-black">R$ 5,00</p>
                                    <p className="text-[16px] leading-none font-[400] text-black/50"> (1 unit)</p>
                                </div>
                                <hr className="border-black/30"/>
                                <p className="text-[16px] leading-nomne font-[400] text-black/50">+99 In stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Discount</p>
                        <p className="text-white font-regular text-[16px]">When discounts are applied on the product</p>
                    </div>
                </div>

                {/* Product  added*/}
                <div className="flex flex-col gap-6">
                    <div className="min-h-[400px] bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
                        <div className="w-[180px] flex flex-col gap-2">
                            <div className=" flex justify-end items-end p-2
                            bg-[url('/images/product-card-image.png')] bg-no-repeat bg-cover bg-center w-full h-[180px]">

                                <div className="flex flex-row justify-center gap-2 bg-[#ffffff] border-2 border-[#E1E9EF] rounded-[12px]">
                                    <button className=" flex justify-center items-center
                                    min-w-[40px] min-h-[40px] cursor-pointer">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                      class="size-6 text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                    </button>
                                    <span className="min-w-[40px] min-h-[40px] flex items-center justify-center leading-none">1</span>
                                    <button className=" flex justify-center items-center
                                    min-w-[40px] min-h-[40px] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                        class="size-6 text-black">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p className="text-[16px] font-[500] text-black line-clamp-2">Rexona Men Invisible Antiperspirant Spray 250ml</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-[16px] leading-none font-[400] text-black/50 line-through invisible"> R$ 0,00 </p>
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="text-[22px] leading-none font-[700] text-black">R$ 0,00</p>
                                    <p className="text-[16px] leading-none font-[400] text-black/50"> (1 unit)</p>
                                </div>
                                <hr className="border-black/30"/>
                                <p className="text-[16px] leading-nomne font-[400] text-black/50">+99 In stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Product added</p>
                        <p className="text-white font-regular text-[16px]">Allows the user to add and remove products from the shopping cart</p>
                    </div>
                </div>

                {/* Product  unavailable*/}
                <div className="flex flex-col gap-6">
                    <div className="min-h-[400px] bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
                        <div className="w-[180px] flex flex-col gap-2">
                            <div className="flex justify-end items-end p-2 saturate-1 opacity-60
                            bg-[url('/images/product-card-image.png')] bg-no-repeate bg-no-repeat bg-cover bg-center w-full h-[180px]">
                            </div>
                            <p className="text-[16px] font-[500] text-black/50 line-clamp-2">Rexona Men Invisible Antiperspirant Spray 250ml</p>
                            <div className="flex flex-col gap-3">
                                <hr className="border-black/30"/>
                                <p className="text-[16px] leading-nomne font-[600] text-black">Out of stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Out of stock</p>
                        <p className="text-white font-regular text-[16px]">Out-of-stock products appear at the end of the list.</p>
                    </div>
                </div>
                
            </div>



        </section>
    )

}