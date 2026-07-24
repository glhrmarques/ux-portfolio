export default function Button() {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-[40px] font-medium">Button</h1>

        <div className="grid grid-cols-2 gap-6 w-full">
            <div className="flex flex-col w-full gap-6">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full bg-[#005BE2] px-12 py-6 text-[16px] font-semibold text-white hover:bg-[#003788] cursor-pointer"
                    >
                    Primary
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-white font-semibold text-[18px]">Primary</p>
                    <p className="text-white font-regular text-[16px]">The most important action to move forward in a flow, acknowledge and dismiss, or finish a task.</p>
                </div>
            </div>
            <div className="flex flex-col w-full gap-6">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full border border-[#E1E9EF] bg-[#FFFFFF] px-12 py-6 text-[16px] font-semibold text-black hover:bg-[#E1E9EF] cursor-pointer"
                    >
                    Secondary
                    </button>
                    
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-white font-semibold text-[18px]">Secondary</p>
                    <p className="text-white font-regular text-[16px]">Supports the primary action by providing an alternative action with lower emphasis.</p>
                </div>
            </div>
            <div className="flex flex-col w-full gap-6">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full px-12 py-6 text-[16px] underline font-semibold text-white cursor-pointer"
                    >
                    Tertiary
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-white font-semibold text-[18px]">Tertiary</p>
                    <p className="text-white font-regular text-[16px]">Used for optional or low-priority actions that should remain available without competing for attention.</p>
                </div>
            </div>
            <div className="flex flex-col w-full gap-6">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full bg-[#E1E9EF] px-12 py-6 text-[16px] font-semibold text-[#777A7C]"
                    >
                    Disabled
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-white font-semibold text-[18px]">Disabled</p>
                    <p className="text-white font-regular text-[16px]">Indicates an action that is currently unavailable because the required conditions have not been met.</p>
                </div>
            </div>
        </div>

        <p className="font-['Inter',sans-serif] text-[24px] text-white font-medium pt-[56px]">Size</p>

        <div className="flex flex-row gap-6 w-full">
            <div className="flex flex-col w-full gap-6">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full bg-[#005BE2] px-12 py-6 text-[16px] font-semibold text-white hover:bg-[#003788] cursor-pointer"
                    >
                    Large
                    </button>
                </div>
                <p className="text-white font-semibold text-[18px]">Large</p>
            </div>
            <div className="flex flex-col w-full gap-6">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full bg-[#005BE2] px-10 py-4 text-[16px] font-semibold text-white hover:bg-[#003788] cursor-pointer"
                    >
                    Medium
                    </button>
                </div>
                <p className="text-white font-semibold text-[16px]">Medium</p>
            </div>
            <div className="flex flex-col w-full gap-6">
                <div className="h-[300px] bg-[#0E0E0E] p-4 flex flex-col justify-center items-center">
                    <button
                    type="button"
                    className="w-fit rounded-full bg-[#005BE2] px-8 py-2 text-[12px] font-semibold text-white hover:bg-[#003788] cursor-pointer"
                    >
                    Small
                    </button>
                </div>
                <p className="text-white font-semibold text-[18px]">Small</p>
            </div>
            

        </div>

      </div>
    )
  }
