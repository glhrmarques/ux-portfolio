export default function ClientCard() {
    return (
        <article className=" flex flex-col gap-20">
            <h1 className="text-white text-[40px] font-medium">Client Card</h1>

            {/* First card */}  
            <div className="flex flex-col gap-6">
                <div className="flex h-[340px] items-center justify-center bg-[#ffffff] p-4 rounded-[16px]">
                    <div className="flex w-full max-w-[460px] flex-col gap-4 rounded-[16px] border-2 border-[#E1E9EF] bg-white p-4 text-[#1E1E1E] shadow-[0_12px_32px_rgba(0,0,0,0.16)]">
                        <p className="truncate text-[28px] font-bold uppercase leading-none md:text-[18px]">
                            E. B. Perfumaria e Cosmeticos Ltda
                        </p>

                        <div className="flex items-center justify-between gap-4">
                            <p className="text-[28px] font-normal text-[#7B7B7B] md:text-[16px]">
                                Limite de crédito
                            </p>
                            <p className="rounded-[8px] bg-[#D0F4E3] px-4 py-2 leading-none md:text-[16px]">
                                R$ 2.120,00
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <button
                                type="button"
                                className="w-fit rounded-[16px] border-2 border-[#E1E9EF] bg-[#FFFFFF] px-8 py-4 text-[16px] font-bold text-black hover:bg-[#E1E9EF] cursor-pointer"
                                >
                                Criar orçamento
                            </button>
                            <button
                                type="button"
                                className="w-fit rounded-full px-12 py-6 text-[16px] underline font-semibold text-black cursor-pointer"
                                >
                                Mais detalhes
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="flex flex-col gap-4">
                    <p className="text-white font-semibold text-[18px]">Credit approved</p>
                    <p className="text-white font-regular text-[16px]">Credit limit approved allow sales representatives to sell.</p>
                </div>
            </div>

            {/* Second card */}  
            <div className="flex flex-col gap-6">
                <div className="flex h-[340px] items-center justify-center bg-[#ffffff] p-4 rounded-[16px]">
                    <div className="flex w-full max-w-[460px] flex-col gap-4 rounded-[16px] border-2 border-[#E1E9EF] bg-white p-4 text-[#1E1E1E] shadow-[0_12px_32px_rgba(0,0,0,0.16)]">
                        <p className="truncate text-[28px] font-bold uppercase leading-none md:text-[18px]">
                            E. B. Perfumaria e Cosmeticos Ltda
                        </p>

                        <div className="flex items-center justify-between gap-4">
                            <p className="text-[28px] font-normal text-[#7B7B7B] md:text-[16px]">
                                Limite de crédito
                            </p>
                            <p className="rounded-[8px] bg-[#005BE2]/20 px-4 py-2 leading-none md:text-[16px]">
                                Apenas PIX
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <button
                                type="button"
                                className="w-fit rounded-[16px] border-2 border-[#E1E9EF] bg-[#FFFFFF] px-8 py-4 text-[16px] font-bold text-black hover:bg-[#E1E9EF] cursor-pointer"
                                >
                                Criar orçamento
                            </button>
                            <button
                                type="button"
                                className="w-fit rounded-full px-12 py-6 text-[16px] underline font-semibold text-black cursor-pointer"
                                >
                                Mais detalhes
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="flex flex-col gap-4">
                    <p className="text-white font-semibold text-[18px]">Credit denied</p>
                    <p className="text-white font-regular text-[16px]">Denied credit limit restricts payment to PIX only.</p>
                </div>
            </div>

            {/* third card */}  
            <div className="flex flex-col gap-6">
                <div className="flex h-[340px] items-center justify-center bg-[#ffffff] p-4 rounded-[16px]">
                    <div className="flex w-full max-w-[460px] flex-col gap-4 rounded-[16px] border-2 border-[#E1E9EF] bg-white p-4 text-[#1E1E1E] shadow-[0_12px_32px_rgba(0,0,0,0.16)]">
                        <p className="truncate text-[28px] font-bold uppercase leading-none md:text-[18px]">
                            E. B. Perfumaria e Cosmeticos Ltda
                        </p>

                        <div className="flex items-center justify-start gap-2 py-2">
                            <div className="h-[10px] w-[10px] rounded-full bg-[#E1E9EF]"></div>
                            <p className="leading-none md:text-[16px]">
                                Cliente atendido por outro consultor
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <button
                                type="button"
                                className="w-fit rounded-[16px] bg-[#E1E9EF] px-8 py-4 text-[16px] font-semibold text-[#777A7C]"
                                >
                                Criar orçamento
                            </button>
                            <button
                                type="button"
                                className="w-fit rounded-full px-12 py-6 text-[16px] underline font-semibold text-black cursor-pointer"
                                >
                                Mais detalhes
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="flex flex-col gap-4">
                    <p className="text-white font-semibold text-[18px]">Customer blocked</p>
                    <p className="text-white font-regular text-[16px]">Another Sales Representative is currently handling this customer.</p>
                </div>
            </div>


        </article>
    )
}
