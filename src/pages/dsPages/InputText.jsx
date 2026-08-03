export default function InputText() {
    return(
        <article className=" flex flex-col gap-6">
            <h1 className="text-white text-[40px] font-medium">Input Text</h1>

            <section className="flex flex-col gap-6 pb-[80px]">
                <div className="flex flex-col w-full gap-6">
                    <div className="h-[300px] bg-[#ffffff] px-[200px] flex flex-col justify-center items-center rounded-[16px]">
                        <form className="flex flex-col gap-2 w-full">
                            <label className="px-3 text-[14px] font-semibold">
                                Label
                            </label>
                            <input type="text" placeholder="Placeholder" 
                                className="
                                border-2 border-[#E1E9EF] rounded-[12px] p-3
                                hover:border-[#000000] cursor-pointer transition-colors
                                focus:border-[#000000] focus:outline-[#000000]
                                not-placeholder-shown:border-[#000000]
                                text-[16px]
                                ">
                            </input>
                        </form>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Default State</p>
                        <p className="text-white font-regular text-[16px]">Focused to display the main workflows in the app.</p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 gap-6 w-full">

                <div className="flex flex-col w-full gap-6">
                    <div className="h-[300px] bg-[#ffffff] p-6 flex flex-col justify-center items-center rounded-[16px]">
                        <form className="flex flex-col gap-2 w-full">
                            <label className="px-3 text-[14px] font-semibold">
                                Label
                            </label>
                                <input type="text" placeholder="Placeholder" value="email@123" 
                                    className="
                                    border-2 border-[#A8200D] rounded-[12px] p-3
                                    focus:border-[#A8200D] focus:outline-[#A8200D]
                                    text-[16px]
                                    ">
                                </input>
                            <span 
                                className="
                                px-2
                                text-[12px] font-bold text-[#A8200D]
                                ">
                                Error message
                            </span>
                        </form>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Error</p>
                        <p className="text-white font-regular text-[16px]">The most important action to move forward in a flow, acknowledge and dismiss, or finish a task.</p>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-6">
                    <div className="h-[300px] bg-[#ffffff] p-6 flex flex-col justify-center items-center rounded-[16px]">
                        <form className="flex flex-col gap-2 w-full">
                            <label className="px-3 text-[14px] font-semibold">
                                Label
                            </label>
                                <input type="text" placeholder="Placeholder" 
                                    className="
                                    border-2 border-[#E1E9EF] rounded-[12px] p-3
                                    hover:border-[#000000] cursor-pointer transition-colors
                                    focus:border-[#000000] focus:outline-[#000000]
                                    not-placeholder-shown:border-[#000000]
                                    text-[16px]
                                    ">
                                </input>
                        </form>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Disable</p>
                        <p className="text-white font-regular text-[16px]">The most important action to move forward in a flow, acknowledge and dismiss, or finish a task.</p>
                    </div>
                </div>
            </section>

        
        </article>
    )
}