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
                                    flex flex-col justify-between px-[16px] py-[24px]
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
                                    flex flex-col justify-between px-[16px] py-[24px]
                                    rounded-xl bg-[#E1E9EF] cursor-pointer"
                                    >
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                        </svg>

                                    </div>
                                    <div className="flex justify-center">
                                        <span className="text-black text-[14px]">Orçamentos</span>
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className="flex h-[100px] w-full flex-col
                                    flex flex-col justify-between px-[16px] py-[24px]
                                    rounded-xl bg-[#E1E9EF] cursor-pointer"
                                    >
                                    <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
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
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
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