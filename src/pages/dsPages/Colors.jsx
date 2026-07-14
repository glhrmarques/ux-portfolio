export default function Colors() {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-[40px] font-medium">Colors</h1>

      <div className="flex flex-col gap-6 w-full pb-[120px]">
        <div className="grid grid-cols-2 gap-6 items-center">
          <p className="font-['Figtree',sans-serif] text-[24px] text-white font-medium">Core</p>
          <p className="font-['Figtree',sans-serif] text-[16px] text-white">As far as the public’s concerned, Wise is green. But to us, it’s Bright Green, Forest Green, and white with an 8% Forest Green tint thrown in.</p>
        </div>

        <div className="flex flex-row gap-4 w-full">
          <div className="w-full h-[200px] bg-[#005BE2] p-4 flex flex-col justify-between">
            <p className="text-white text-[16px]">Label</p>
            <p className="text-white">#005BE2</p>
          </div>
          <div className="w-full h-[200px] bg-[#003788] p-4 flex flex-col justify-between">
            <p className="text-white text-[16px]">Label</p>
            <p className="text-white text-[16px]">#003788</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full pb-[120px]">
        <div className="grid grid-cols-2 gap-6 items-center">
          <p className="font-['Figtree',sans-serif] text-[24px] text-white font-medium">Content</p>
          <p className="font-['Figtree',sans-serif] text-[16px] text-white">Our content colours are based on neutral greys, with a small percentage of green. This creates a clear and accessible visual hierarchy, and makes us distinct by adding hints of our brand colours.</p>
        </div>

        <div className="flex flex-row gap-4 w-full">
          <div className="w-full h-[200px] bg-[#000000] p-4 flex flex-col justify-between border border-white">
            <p className="text-white text-[16px]">Content Primary</p>
            <p className="text-white text-[16px]">#000000</p>
          </div>
          <div className="w-full h-[200px] bg-[#777A7C] p-4 flex flex-col justify-between">
            <p className="text-white text-[16px]">Content Secondary</p>
            <p className="text-white text-[16px]">#777A7C</p>
          </div>
          <div className="w-full h-[200px] bg-[#777A7C] p-4 flex flex-col justify-between">
            <p className="text-white text-[16px]">Disable</p>
            <p className="text-white text-[16px]">#777A7C</p>
          </div>
          <div className="w-full h-[200px] bg-[#FFFFFF] p-4 flex flex-col justify-between">
            <p className="text-black text-[16px]">On-action</p>
            <p className="text-black text-[16px]">#FFFFFF</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full pb-[120px]">
        <div className="grid grid-cols-2 gap-6 items-center">
          <p className="font-['Figtree',sans-serif] text-[24px] text-white font-medium">Surface</p>
          <p className="font-['Figtree',sans-serif] text-[16px] text-white">Our content colours are based on neutral greys, with a small percentage of green. This creates a clear and accessible visual hierarchy, and makes us distinct by adding hints of our brand colours.</p>
        </div>

        <div className="flex flex-row gap-4 w-full">
          <div className="w-full h-[200px] bg-[#005BE2] p-4 flex flex-col justify-between">
            <p className="text-white text-[16px]">On-action primary</p>
            <p className="text-white text-[16px]">#005BE2</p>
          </div>
          <div className="w-full h-[200px] bg-[#003788] p-4 flex flex-col justify-between">
            <p className="text-white text-[16px]">Action-hover primary</p>
            <p className="text-white text-[16px]">#003788</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 w-full">
          <div className="w-full h-[200px] bg-[#FFFFFF] p-4 flex flex-col justify-between">
            <p className="text-black text-[16px]">On-action secondary</p>
            <p className="text-black text-[16px]">#FFFFFF</p>
          </div>
          <div className="w-full h-[200px] bg-[#E1E9EF] p-4 flex flex-col justify-between">
            <p className="text-black text-[16px]">Action-hover secondary</p>
            <p className="text-black text-[16px]">#E1E9EF</p>
          </div>
          <div className="w-full h-[200px] bg-[#FFFFFF] p-4 flex flex-col justify-between">
            <p className="text-black text-[16px]">Background Screen</p>
            <p className="text-black text-[16px]">#FFFFFF</p>
          </div>
          <div className="w-full h-[200px] bg-[#E1E9EF] p-4 flex flex-col justify-between">
            <p className="text-black text-[16px]">Background Neutral</p>
            <p className="text-black text-[16px]">#E1E9EF</p>
          </div>
        </div>
      </div>

    </div>
  )
}