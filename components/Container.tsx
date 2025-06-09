"use client";

import { useState } from "react";
import { useRouter } from "next/router";

interface ContainerProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  avil?: boolean;
}

function Container({ title, description, date, slug, avil = false }: ContainerProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (avil) {
      router.push(`/journal/${slug}`);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => !avil && setShowTooltip(true)}
      onMouseLeave={() => !avil && setShowTooltip(false)}
    >
      <div
        className="border-b-2 mb-2 border-[#e8e8e8] grid grid-cols-3 content-center py-1 text-sm hover:text-slate-600 cursor-pointer"
        onClick={handleClick}
      >
        <div className="justify-self-start col-span-2">
          {title}
          <div className="inline pl-1 text-xs"> - {description}</div>
        </div>
        <div className="justify-self-end text-gray-500">{date}</div>
      </div>

      {!avil && showTooltip && (
        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md shadow-sm -top-10 left-0">
          Still in the works
          <div className="absolute w-2 h-2 bg-gray-200 transform rotate-45 -bottom-1 left-4"></div>
        </div>
      )}
    </div>
  );
}

export default Container;
