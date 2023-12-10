'use client';

export default function AmountButton({ amount, handleClick }: {amount: number | string; handleClick: () => void}) {
  const handleLocalClick = () => {
    handleClick(amount)
  }

  return (
      <div className="border rounded px-[12px] py-[7.5px] text-center cursor-pointer" onClick={handleLocalClick}>
        { typeof amount === "number" ? `${amount} DH` : amount }
      </div>
  )
}