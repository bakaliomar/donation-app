import Image from 'next/image'
import Navbar from "@/app/ui/Navbar";
import Header from "@/app/ui/Header";
import Collapse from "@/app/ui/Collapse";
import DonationCard from "@/app/ui/DonationCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container mx-auto flex mt-4">
        <div className="right-side w-7/12 px-4">
          <h2 className='font-bold text-xl'>Palestinians desperately need us to take action HERE and NOW - please donate what you can to Palestine</h2>
          <h3 className="mt-[24px] text-xl">Israel is raining bombs on the people of Gaza - thousands of Palestinians have already been killed in Israel’s indiscriminate bombardment.</h3>
          <h3 className="mt-[24px] text-xl">Anonymous is working day and night to Deliver food and medication to our brothers and sisters in palestine – please donate what you can to help fund our ongoing response, thank you.</h3>
          <Collapse />
        </div>
        <div className="left-side w-5/12 px-4">
          <DonationCard />
        </div>
      </div>
    </div>
  )
}
