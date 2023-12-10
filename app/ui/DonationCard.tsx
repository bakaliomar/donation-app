'use client';
import AmountButton from "@/app/ui/AmountButton";


export default function DonationCard() {

  const setClick = (val: number | string) => {
    console.log(val);
  }

  const amounts = [100, 200,300 ,400, 500, 600, 800, 1000, 2000, 4000, 5000, "other"];
  const AmountList = amounts.map((num: number | string) =>
    <AmountButton key={num}  amount={num} handleClick={setClick}/>
  );

  return (
    <div className="donation-card hadow-lg shadow-green-700/50 rounded-lg p-5 bg-white">
      <h2 className='font-bold text-xl'>Palestine needs our support for the long-haul. Can you make an ongoing commitment to our work?</h2>
      <div className="mt-[10px] flex flex-col">
        <div className="one-off flex items-center">
          <input type="radio" name="radio-5" className="radio" checked/>
          <span className="ml-1 text-[14px]">One-off donation</span>
        </div>
        <div className="monthly flex items-center mt-2">
          <input type="radio" name="radio-5" className="radio radio-success"/>
          <strong className="text-green-700 ml-1 text-[14px]">I’ll keep supporting your work for Palestine - make my donation monthly</strong>
        </div>
      </div>
      <hr className="my-[20px]"/>
      <div className="amount-group grid grid-cols-3 grid-flow-row gap-1">
        { AmountList }
      </div>
    </div>
  )
}