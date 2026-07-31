export default function Widget() {
    return(
        <article className=" flex flex-col gap-6">
            <h1 className="text-white text-[40px] font-medium">Widget</h1>

            <section className="flex flex-col gap-6 pb-[80px]">
                <div className="flex flex-col w-full gap-6">
                    <div className="h-[300px] bg-[#ffffff] px-[200px] flex flex-col justify-center items-center rounded-[16px]">
                        <div className="flex flex-col gap-3 w-full">
                            <button
                                type="button"
                                className="flex h-[100px] w-full flex-col
                                    flex flex-col justify-between p-[16px]
                                    rounded-xl bg-[#005BE2] cursor-pointer"
                            >
                                <div className="flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                    </svg>
                                </div>
                                <div className="flex justify-start">
                                    <span className="text-white">Clientes</span>
                                </div>
                            </button>
                            <div className="grid grid-cols-3 gap-3">                   
                                <button
                                    type="button"
                                    className="flex h-[100px] w-full flex-col
                                    flex flex-col justify-between p-[16px]
                                    rounded-xl bg-[#E1E9EF] cursor-pointer"
                                    >
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-center">
                                        <span className="text-black text-[14px]">Catálogo</span>
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className="flex h-[100px] w-full flex-col
                                    flex flex-col justify-between p-[16px]
                                    rounded-xl bg-[#E1E9EF] cursor-pointer"
                                    >
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-center">
                                        <span className="text-black text-[14px]">Orçamentos</span>
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className="flex h-[100px] w-full flex-col
                                    flex flex-col justify-between p-[16px]
                                    rounded-xl bg-[#E1E9EF] cursor-pointer"
                                    >
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-center">
                                        <span className="text-black text-[14px]">Pedidos</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Home widget</p>
                        <p className="text-white font-regular text-[16px]">Focused to display the main workflows in the app.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6 pb-[80px]">
                <div className="flex flex-col w-full gap-6">
                    <div className="h-[300px] bg-[#ffffff] p-4 flex flex-col justify-center items-center rounded-[16px]">
                        <button
                            type="button"
                            className="flex h-[100px] w-[256px] flex-col
                                flex flex-col justify-between p-[16px]
                                rounded-xl bg-[#005BE2] cursor-pointer"
                        >
                            <div className="flex justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                            </div>
                            <div className="flex justify-start">
                                <span className="text-white">Clientes</span>
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Primary widget</p>
                        <p className="text-white font-regular text-[16px]">The most accessed page in the app.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6 pb-[80px]">
                <div className="flex flex-col w-full gap-6">
                    <div className="h-[300px] bg-[#ffffff] p-4 flex flex-col justify-center items-center rounded-[16px]">
                        <button
                            type="button"
                            className="flex h-[100px] w-[256px] flex-col
                                flex flex-col justify-between p-[16px]
                                rounded-xl bg-[#E1E9EF] cursor-pointer"
                        >
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-black">Catálogo</span>
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Secondary widget</p>
                        <p className="text-white font-regular text-[16px]">Focused in the other workflows, order by the most access to the least accessed.</p>
                    </div>
                </div>
            </section>

        </article>

    )
}