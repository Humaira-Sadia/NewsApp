import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const nav = [
    { title: "Home", sm_title: "Home", link: "/" },
    { title: "Business", sm_title: "Buss", link: "/business" },
    { title: "Entertainment", sm_title: "Entm", link: "/entertainment" },
    { title: "Health", sm_title: "Health", link: "/health" },
    { title: "Science", sm_title: "Sci", link: "/science" },
    { title: "Sports", sm_title: "Sports", link: "/sports" },
    { title: "Technology", sm_title: "Tech", link: "/technology" },
  ];

  return (
    <div className="h-24 flex items-center mb-2 -mt-14 shadow-xl">
      <div className="flex flex-col w-screen md:w-full">
        <div className="flex justify-between items-center p-1">
          <div className="font-bold text-4xl">
            <p className="text-[#5F6F52] mb-2">
              Insight<span className="text-[#B99470]">Feed</span>
            </p>
          </div>
        </div>

        <div className="category flex justify-center">
          <ul className="flex lg:w-1/2 justify-around cursor-pointer md:text-lg sm:text-[10px] text-[12px] gap-4 tracking-widest">
            {nav.map((item) => (
              <li
                key={item.title}
                className={`${
                  active === item.title ? "text-[#B99470] font-bold" : ""
                }`}
                onClick={() => setActive(item.title)}
              >
                <Link to={item.link}>
                  <span className="hidden sm:inline">{item.title}</span>
                  <span className="sm:hidden">{item.sm_title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
