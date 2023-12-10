'use client';

import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from 'clsx';
export default function Collapse () {
  const [open, setOpen] = useState(false);
  const className = clsx(
      'ctitle flex rounded-md justify-between px-[20px] py-[12px] transition-all duration-500 ease-out',
      {
        'border-l-4 border-green-700': !open,
        'bg-green-700 text-white': open,
      },
  );

  function handleClick() {
    setOpen(!open);
  }

  return (
    <details className="collapse-container mt-[16px] cursor-pointer" onClick={handleClick}>
      <summary className={className}>
        <div className="ctitle-text text-xl text-gray-900 font-medium text-inherit">How your donation will make a difference</div>
        {!open
            ? <ChevronRightIcon className="text-green-700 w-6 font-bold" />
            : <ChevronDownIcon className="text-white w-6 font-bold" />
        }
      </summary>
      <div className="content font-[14px]">
        <p className="mt-[8px]">Your donation will help fund:</p>
        <ul className="pl-[40px] mt-[5px] list-disc">
          <li>Buying food and medication and oil for palestinian people</li>
          <li>Buying clothes and tents for palestinian people</li>
          <li>Transportation fee to deliver the previous stuff</li>
        </ul>
        <p className="py-[10px] text-gray-600">
          Anonymous is the biggest organisation in the Morocco dedicated to securing Palestinian human rights. We are almost entirely funded by donations from our members and supporters. We don’t accept money from governments, political parties, or big businesses so we are truly independent in our campaigning. You can find out more about Anonymous here.
        </p>
      </div>
    </details>
  )
}