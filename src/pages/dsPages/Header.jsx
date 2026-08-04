export default function Header() {
    return(
        <article className=" flex flex-col gap-6">
            <h1 className="text-white text-[40px] font-medium">Header</h1>

                {/* Left column */}
                <section className="flex flex-col w-full gap-6  pb-[80px]">
                    <div className="h-[300px] bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
                        <div className="
                            flex flex-row p-4 items-center justify-between w-full max-w-[400px]
                            border-b-2 border-[#E1E9EF]">
                            <img src="../public/images/inventa-logo.svg" alt="Arrow" />
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-6">
                                    <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                                    />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Default</p>
                        <p className="text-white font-regular text-[16px]">Default state that displays the Inventa logo and menu button in all workflows except Checkout.</p>
                    </div>
                </section>

                {/* Right column */}
                <section className="flex flex-col w-full gap-6">
                    <div className="h-[300px] bg-[#ffffff] flex p-6 flex-col justify-center items-center rounded-[16px]">
                        <div className="
                            flex flex-row p-4 items-center justify-between w-full max-w-[400px]
                            border-b-2 border-[#E1E9EF]">
                            <span className="
                            underline font-semibold text-black
                            ">
                                Salvar rascunho e sair
                            </span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-6">
                                    <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Checkout</p>
                        <p className="text-white font-regular text-[16px]">Exclusive to the Checkout workflow. Allows users to save the order as a quotation to complete later or share the quotation to the customer as a PDF.</p>
                    </div>
                </section>
        </article>

    )
}