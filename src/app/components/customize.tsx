import Image from "next/image"
import Letsgo from "../../../public/assets/lets-go.png"
export default function Customize () {
    return (
        <div className="w-[1920px] h-[759px] bg-[#043873] flex justify-center items-center gap-[100px]">
            <div className="w-[697px] h-[294px] relative">
                <h1 className="text-7xl font-bold leading-[87.14px] tracking-[-2%] text-white">Use as Extension</h1>
                <p className="text-lg font-normal leading-[30px] tracking-[-2%] mt-[30px] text-white">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                </p>
                <button className="absolute bottom-0 left-0"><Image src={Letsgo} alt=""/></button>
            </div>
            <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>

        </div>
        
    )
}