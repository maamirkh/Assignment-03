import Image from "next/image"
import Letsgo from "../../..//public/assets/lets-go.png"
export default function Customize2 () {
    return (
        <div className="w-[1920px] h-[812px] flex justify-center items-center gap-[100px]">
            <div className="w-[714px] h-[532px] bg-[#C4DEFD]">
                
            </div>
            <div className="w-[669px] h-[411px] relative">
            <h1 className="text-7xl font-bold leading-[87.14px] tracking-[-2%]">Customise it
            to your needs</h1>
                <p className="text-lg font-normal leading-[30px] tracking-[0.2px] mt-[30px]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                <button className="absolute bottom-0 left-0"><Image src={Letsgo} alt=""/></button>
            </div>
        </div>
    )
}