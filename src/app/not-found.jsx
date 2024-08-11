import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>The page you are looking is not found</p>
      <Link href="/">Go to HomePage</Link>
    </div>
  );
};

export default Notfound;
