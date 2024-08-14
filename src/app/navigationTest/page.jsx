"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
// Client side navigation
const navigationTest = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();

  const q = searchparams.get("q");

  const handleClick = () => {
    router.back();
  };

  console.log(q);
  return (
    <div>
      <button onClick={() => handleClick()}>navigate</button>
    </div>
  );
};

export default navigationTest;
