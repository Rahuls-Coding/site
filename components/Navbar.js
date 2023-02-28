import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'




function Navbar({ places, links }) {

  const router = useRouter()
  const data = router.query;
  console.log(router.asPath);


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
