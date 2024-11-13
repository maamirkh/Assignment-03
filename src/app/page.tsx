import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Management from "./components/management";
import Customize from "./components/customize";
import Customize2 from "./components/customize2";
import Yourwork from "./components/yourwork";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";

export default function Home() {
  return (
        <div>
          <Navbar/>
          <Hero/>
          <Management/>
          <Customize/>
          <Customize2/>
          <Yourwork/>
          <Sponsors/>
          <Footer/>

        </div>
  );
}
