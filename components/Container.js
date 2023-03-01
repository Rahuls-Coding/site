import React from "react";
import Link from "next/link";

function Container({ title, description, date, slug }) {
  return (
    <Link
      href={`/journal/${slug}`}
      className="border-b-2 dark:border-[#2e2e2e] mb-2 border-[#e8e8e8] grid grid-cols-3 content-center py-1 text-sm dark:text-slate-100 dark:hover:text-slate-300 hover:text-slate-600"
    >
      <div className="justify-self-start col-span-2">
        {title}

        <div className="inline pl-1 text-xs "> - {description}</div>
      </div>
      <div className="justify-self-end text-gray-500 dark:text-gray-400">
        {date}
      </div>
    </Link>
  );
}

export default Container;
