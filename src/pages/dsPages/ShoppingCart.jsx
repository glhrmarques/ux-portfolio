export default function ShoppingCart() {
    return(
        <section>
            <h1 className="text-white text-[40px] font-medium pb-[80px]">Shopping Cart</h1>

            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[120px]">
                <div className="flex flex-col gap-6">
                    <div className="
                    flex justify-center items-center
                    min-h-[400px] bg-[#ffffff] rounded-[16px] p-10">
                        <div className="
                        flex justify-between items-center
                        max-w-[400px] w-[400px] h-[100px] bg-[#005BE2] p-6">
                            <div className=" flex flex-col gap-3">
                                <p className="text-[14px] leading-none text-[#ffffff] font-[400]">Total do pedido</p>
                                <div className="flex flex-row gap-1 items-center">
                                    <p className="text-[22px] leading-none text-[#ffffff] font-[400]">R$ 288,00</p>
                                    <p className="text-[14px] leading-none text-[#ffffff] font-[400]">/ 70 itens</p>
                                </div>
                            </div>
                            <p className="text-[16px] leading-none text-[#ffffff] font-[700]">Ver itens</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Default</p>
                        <p className="text-white font-regular text-[16px]">Products available to be sold without any discount</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="
                    flex justify-center items-center
                    min-h-[400px] bg-[#ffffff] rounded-[16px] p-6">
                        <div className="
                        flex justify-between items-center
                        max-w-[1000px] w-full h-[100px] bg-[#ffffff] p-6 border-t border-black/20">
                            <div className=" flex flex-col gap-3">
                                <p className="text-[14px] leading-none text-[#000000] font-[400]">Total do pedido</p>
                                <div className="flex flex-row gap-1 items-center">
                                    <p className="text-[22px] leading-none text-[#000000] font-[400]">R$ 288,00</p>
                                    <p className="text-[14px] leading-none text-[#000000] font-[400]">/ 70 itens</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="w-fit rounded-[16px] bg-[#E1E9EF] px-4 py-3 text-[14px] font-semibold text-[#777A7C]"
                                >
                                Continuar
                                </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Default</p>
                        <p className="text-white font-regular text-[16px]">Products available to be sold without any discount</p>
                    </div>
                </div>
            </div>


        </section>
    )
}