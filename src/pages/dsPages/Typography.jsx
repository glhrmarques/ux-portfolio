export default function Typography() {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-[40px] font-medium">Typography</h1>

        <div className="flex flex-row gap-4 w-full py-[56px]">
          <div className="w-full h-[200px] flex flex-col justify-center">
            <p className="font-['Inter',sans-serif] text-[24px] text-white font-medium">Typeface</p>
          </div>
          <div className="w-full h-[200px] bg-[#FFFFFF] flex flex-col justify-center items-center">
            <p className="text-black text-[48px] font-bold">Inter</p>
          </div>
        </div>


        <p className="font-['Inter',sans-serif] text-[24px] text-white font-medium">Heading</p>
  
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[60px] text-white font-regular">Display large</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">60px</p>
          </div>
        </div>
  
        <hr className="border-t border-[#3d3d3d]" />
  
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[48px] text-white font-regular">Display medium</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">48px</p>
          </div>
        </div>
  
        <hr className="border-t border-[#3d3d3d]" />
  
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[40px] text-white font-regular">Display small</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">40px</p>
          </div>
        </div>
  
        <hr className="border-t border-[#3d3d3d]" />
  
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[32px] text-white font-regular">Title screen</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">32px</p>
          </div>
        </div>

        <hr className="border-t border-[#3d3d3d]" />
  
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[24px] text-white font-regular">Title section</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">24px</p>
          </div>
        </div>

        <hr className="border-t border-[#3d3d3d]" />
  
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[18px] text-white font-regular">Title body</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">18px</p>
          </div>
        </div>

        <hr className="border-t border-[#3d3d3d]" />
  
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular">Body large</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">16px</p>
          </div>
        </div>

        <hr className="border-t border-[#3d3d3d]" />

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[14px] text-white font-regular">Body default</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">14px</p>
          </div>
        </div>

        <hr className="border-t border-[#3d3d3d]" />

        <div className="flex flex-col gap-6 w-full pb-[56px]">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[12px] text-white font-regular">Label</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">12px</p>
          </div>
        </div>

        <p className="font-['Inter',sans-serif] text-[24px] text-white font-medium">Font-weight</p>

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular">Bold</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">700</p>
          </div>
        </div>

        <hr className="border-t border-[#3d3d3d]" />

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular">Semibold</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">600</p>
          </div>
        </div>

        <hr className="border-t border-[#3d3d3d]" />

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-6 items-center">
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular">Regular</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-white font-regular text-center">400</p>
          </div>
        </div>




      </div>
    )
  }
