
import Image from 'next/image';
import Logo from '../../../public/assets/Logo.png';
export default function Navbar () {
    return (
        <div className="w-[1920px] h-[92px] py-4 px-220 bg-[#043873] flex justify-around">
        <div className="w-[191px] h-[34px] flex justify-between mt-2">
        <Image src={Logo} alt='' className="w-[191px] h-[34px] mt-1 absolute"/>
    </div>
    <div className="w-[737.5px] h-[60px] flex justify-between items-center">
        <div className="w-[549px] h-[23px]">
            <ul className="flex flex-row justify-between text-white">
                <li>Products</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Pricing</li>

            </ul>
        </div>
        <div className="w-[126px] h-[60px]">
            <button className="px-10 py-4 rounded-lg bg-[#ffe492]">Login</button>
        </div>
    </div>
</div>

    )
}

