import Image from "next/image"
import Terms from "../../../public/assets/Tems and condition.png"
import Logo2 from "../../../public/assets/Logo2.png"
export default function Footer () {
    return (
        <div className="w-[1920px] h-[461px] bg-[#043873] flex justify-center mb-[100px]">
            <div className="w-[1480px] h-[289px] flex flex-col justify-between mt-[150px]">
                <div className="w-[1480px] h-[169px] flex justify-between">
                    <div className="w-[295px] h-[169px]">
                        <Image className="w-[191px] h-[34px]" src={Logo2} alt=""/>
                        <p className=" w-[240px] h-[120px]text-lg font-normal leading-[30px] tracking-[1px] mt-[30px] text-white">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    <div className="w-[295px] h-[127px] flex flex-col justify-between text-white">
                        <p className="text-lg font-bold leading-[21.7px]">Product</p>
                        <p>Overview</p>
                        <p>Pricing</p>
                        <p>Customer stories</p>
                    </div>
                    <div className="w-[295px] h-[127px] flex flex-col justify-between text-white">
                        <p className="text-lg font-bold leading-[21.7px]">Resources</p>
                        <p>Blog</p>
                        <p>Guides & tutorials</p>
                        <p>Help center</p>
                    </div>
                    <div className="w-[295px] h-[127px] flex flex-col justify-between text-white">
                        <p className="text-lg font-bold leading-[21.7px]">Company</p>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Media kit</p>
                    </div>
                </div>
                <div className="w-[1480px] h-[20px] flex justify-center">
                    <Image src={Terms} alt=""/>
                </div>
            </div>
        </div>
    )
}