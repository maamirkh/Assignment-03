import Image from "next/image"
import Button2 from "../../../public/assets/Btn-get-started.png"
import WorkTogether from "../../../public/assets/Work Together Image.png"
import Tryit from "../../../public/assets/try-it-now.png"
export default function Management () {
    return (
        <div className="w-[1920px] h-[1588px] flex flex-col gap-[100px] justify-center items-center">
            <div className="w-[1480px] h-[547px] flex flex-row gap-[60px] items-center">
                <div className="w-[672px] h-[411px] relative">
                    <h1 className="text-[72px] font-bold leading-[87.14px]">Project Management</h1>
                    <p className=" w-[656px] h-[60px] mt-[30px] text-lg font-normal leading-[30px] tracking-[0.1px]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                <button className="w-[219px] h-[63px] absolute inset bottom-0 left-0 rounded-lg"><Image src={Button2} alt=""/></button>
                </div>
                <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
            </div>
            <div className="w-[1480px] h-[661px] flex gap-[60px] items-center relative">
                <div className="w-[710px] h-[661px]"><Image src={WorkTogether} alt=""/></div>
                <div className="w-[670px] h-[294px] absolute right-0">
                    <h1 className="text-7xl font-bold leading-[87.14px]">Work together</h1>
                    <p className="text-lg font-normal leading-[30px] tracking-[-2%] mt-[30px]">With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                    </p>
                    <button className="absolute inset bottom-0 left-0"><Image src={Tryit} alt=""/></button>
                </div>
            </div>
        </div>
    )
}