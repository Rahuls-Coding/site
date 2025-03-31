"use client"

import { useState } from "react"

interface ContainerProps {
  title: string
  description: string
  date: string
  slug: string
}

function Container({ title, description, date, slug }: ContainerProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      {/* Using a div instead of Link but keeping all the styling */}
      <div
        className="border-b-2 dark:border-[#2e2e2e] mb-2 border-[#e8e8e8] grid grid-cols-3 content-center py-1 text-sm dark:text-slate-100 dark:hover:text-slate-300 hover:text-slate-600 cursor-pointer"
        onClick={(e) => e.preventDefault()}
      >
        <div className="justify-self-start col-span-2">
          {title}

          <div className="inline pl-1 text-xs "> - {description}</div>
        </div>
        <div className="justify-self-end text-gray-500 dark:text-gray-400">{date}</div>
      </div>

      {/* Tooltip that appears on hover */}
      {showTooltip && (
        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md shadow-sm -top-10 left-0">
          Still in the works
          <div className="absolute w-2 h-2 bg-gray-200 transform rotate-45 -bottom-1 left-4"></div>
        </div>
      )}
    </div>
  )
}

export default Container

