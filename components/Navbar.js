import React from "react";
import Link from "next/link";



function Navbar({ places, links }) {


  return (
    <div className="flex w-full justify-end gap-4 mt-3 text-sm dark:text-slate-100">
      {places.map((place, item) => {
        return (
          <div
            className="underline  underline-offset-2 hover:underline-offset-2 hover:decoration-wavy"
            key={place}
          >
            <Link href={links[item]}>{place}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
