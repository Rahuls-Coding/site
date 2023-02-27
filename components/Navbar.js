import React from "react";
import Link from "next/link";



function Navbar({ places, links }) {


  return (
    <div className="justify-items-end mt-10 text-sm dark:text-slate-100">
      {places.map((place, item) => {
        return (
          <div
            className="underline underline-offset-2 hover:underline-offset-2 hover:decoration-wavy mb-4"
            key={place}
          >
            <Link href={links[item]} className=''>{place}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
