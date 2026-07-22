export default function Padding() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-white text-[40px] font-medium">Padding</h1>

      <div className="flex flex-col gap-6 w-full pb-[56px]">
        <div className="grid grid-cols-2 gap-6 items-center">
          <p className="font-['Figtree',sans-serif] text-[24px] text-white font-medium">What is</p>
          <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular">Padding is the internal spacing in components that separates content from external boundaries.</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-2 gap-6 items-center">
          <p className="font-['Figtree',sans-serif] text-[20px] text-white font-medium">Name</p>
          <p className="font-['Figtree',sans-serif] text-[20px] text-white font-medium">Value</p>
        </div>
      </div>

      <hr className="border-t border-[#3d3d3d]" />

      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-2 gap-6 items-center">
          <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular">padding-x-small</p>
          <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular text-center">8px</p>
        </div>
      </div>

      <hr className="border-t border-[#3d3d3d]" />

      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-2 gap-6 items-center">
          <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular">padding-small</p>
          <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular text-center">16px</p>
        </div>
      </div>

      <hr className="border-t border-[#3d3d3d]" />

      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-2 gap-6 items-center">
          <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular">padding-medium</p>
          <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular text-center">24px</p>
        </div>
      </div>

      <hr className="border-t border-[#3d3d3d]" />

      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-2 gap-6 items-center">
          <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular">padding-large</p>
          <p className="font-['Figtree',sans-serif] text-[16px] text-white font-regular text-center">32px</p>
        </div>
      </div>
    </div>
  )
}
