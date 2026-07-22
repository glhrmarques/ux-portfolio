export default function Button() {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-[40px] font-medium">Button</h1>

        <div className="flex flex-row gap-4 w-full pb-[56px]">
            <div className="flex flex-col w-full gap-7">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full bg-[#005BE2] px-12 py-6 text-[16px] font-semibold text-white hover:bg-[#003788] cursor-pointer"
                    >
                    Primary
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-semibold text-[18px]">Primary</p>
                    <p className="text-white font-regular text-[16px]">The most important action to move forward in a flow, acknowledge and dismiss, or finish a task.</p>
                </div>
            </div>
        </div>

        <div className="flex flex-row gap-4 w-full">
            <div className="flex flex-col w-full gap-7">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full border border-[#E1E9EF] bg-[#FFFFFF] px-12 py-6 text-[16px] font-semibold text-black hover:bg-[#E1E9EF] cursor-pointer"
                    >
                    Secondary
                    </button>
                    
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-semibold text-[18px]">Secondary</p>
                    <p className="text-white font-regular text-[16px]">Use secondary for providing alternatives to the primary action, or when none of your actions are more important than the others.</p>
                </div>
            </div>
            <div className="flex flex-col w-full gap-7">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full px-12 py-6 text-[16px] underline font-semibold text-white cursor-pointer"
                    >
                    Tertiary
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-semibold text-[18px]">Tertiary</p>
                    <p className="text-white font-regular text-[16px]">Dismissive actions give users a way out of something, letting them cancel, do nothing, dismiss, or skip.</p>
                </div>
            </div>
        </div>

        <p className="font-['Figtree',sans-serif] text-[24px] text-white font-medium pt-[56px]">Size</p>


        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-3 gap-6 items-center">
            <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular ">Large</p>
            <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular">Primary</p>
            <div className="flex flex-1 justify-center">
                <button
                    type="button"
                    className="w-fit rounded-full bg-[#005BE2] px-12 py-6 text-[16px] font-semibold text-white hover:bg-[#003788] cursor-pointer"
                    >
                    Primary
                </button>
            </div>
            </div>
        </div>

        <hr className="border-t border-[#3d3d3d]" />

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-3 gap-6 items-center">
            <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular ">Medium</p>
            <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular">Primary</p>
            <div className="flex flex-1 justify-center">
                <button
                    type="button"
                    className="w-fit rounded-full bg-[#005BE2] px-10 py-4 text-[14px] font-semibold text-white hover:bg-[#003788] cursor-pointer"
                    >
                    Primary
                </button>
            </div>
            </div>
        </div>

        <hr className="border-t border-[#3d3d3d]" />

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-3 gap-6 items-center">
            <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular ">Small</p>
            <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular">Primary</p>
            <div className="flex flex-1 justify-center">
                <button
                    type="button"
                    className="w-fit rounded-full bg-[#005BE2] px-8 py-2 text-[12px] font-semibold text-white hover:bg-[#003788] cursor-pointer"
                    >
                    Primary
                </button>
            </div>
            </div>
        </div>

      </div>
    )
  }
