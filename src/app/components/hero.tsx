import Image from "next/image"
import Button1 from "../../../public/assets/button1.png"
export default function Hero () {
    return (
        <div className="w-[1920px] h-[829px] bg-[#043873] flex justify-center items-center">
            <div className="w-[656px] h-[361px] text-white relative" >
                <h2 className=" w-[656px] h-[154px] text-[64px] font-bold leading leading-[77.45px]">Get More Done with whitepace</h2>
                
                <p className="w-[656px] h-[30px] mt-[30px] text-[18px] font-normal leading-[30px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <button className="w-[219px] h-[63px] absolute inset bottom-0 left-0 rounded-lg"><Image src={Button1} alt=""/></button>
                <div className="w-[656px] h-[238px]"></div>
            </div>
            <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
        </div>
    )
}

