export default function InputText() {
    return(
        <article className=" flex flex-col gap-6">
            <h1 className="text-white text-[40px] font-medium">Input Text</h1>

            <section className="flex flex-col gap-6 pb-[80px]">
                <div className="flex flex-col w-full gap-6">
                    <div className="h-[300px] bg-[#ffffff] px-[200px] flex flex-col justify-center items-center rounded-[16px]">
                        <div className="flex flex-col gap-3 w-full">
                            <label>Label</label>
                            <input type="text" placeholder="Text" 
                                className="
                                border-2 border-[#E1E9EF] rounded-[12px] p-3
                                hover:border-[#000000]
                                
                                "></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-semibold text-[18px]">Home widget</p>
                        <p className="text-white font-regular text-[16px]">Focused to display the main workflows in the app.</p>
                    </div>
                </div>
            </section>

        
        </article>
    )
}