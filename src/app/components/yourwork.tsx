import Image from "next/image"
import TryPass from "../../../public/assets/try-it-now.png"
export default function Yourwork () {
    return (
        <div className="w-[1920px] h-[574px] bg-[#043873] flex justify-center items-center">
        <div className="w-[1480px] h-[294px] flex flex-col items-center relative">
        <h1 className =" w-[1064px] h-[87px] font-inter text-7xl font-bold leading-[87.14px] tracking-[-2%] text-white">Your work, everywhere you are</h1>
        <p className=" w-[1064px] h-[60px] text-center content- center text-lg font-normal leading-[30px] tracking-[-2%] mt-[30px] text-white">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and<br></br> OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        <button className="absolute bottom-0 mt-[npx]"><Image src={TryPass} alt=""/></button>
        </div>
        </div>
    )
}