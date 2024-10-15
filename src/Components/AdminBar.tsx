"use client";
import React from "react";
import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import Image from "next/image";
import { SiTrainerroad } from "react-icons/si";
import { LiaUsersSolid } from "react-icons/lia";
import { AiOutlineForm } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { signOut } from "next-auth/react";
const NavLinks = [
  {
    title: "Home",
    icon: <CiHome />,
    link: "/admin-dashboard/profile",
  },
  {
    title: "Newsletter",
    icon: <IoNewspaperOutline />,
    link: "/admin-dashboard/newsletter",
  },
  {
    title: "Trainers",
    icon: <SiTrainerroad />,
    link: "/admin-dashboard/trainers",
  },
  {
    title: "Users",
    icon: <LiaUsersSolid />,
    link: "/admin-dashboard/applicant-trainers",
  },
  {
    title: "Forms",
    icon: <AiOutlineForm />,
    link: "/admin-dashboard/add-new-class",
  },
];
const AdminBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="w-24 flex flex-col items-center py-3 justify-between rounded-[40px] bg-[#24262b] min-h-[calc(100vh-40px)] border-2 border-none outline-none shadow-lg">
      <div className="">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.1806 5.3937C25.467 4.48917 22.5154 4.49511 19.8018 5.39964C18.6894 5.77043 17.847 6.70224 17.597 7.84784L16.9295 10.9071C16.3903 13.3787 16.1206 14.6146 15.2746 15.4489C14.4286 16.2833 13.1891 16.5358 10.7102 17.0407L7.8741 17.6185C6.71464 17.8547 5.76901 18.6935 5.39482 19.8161C4.49029 22.5297 4.48908 25.4671 5.39362 28.1807C5.76866 29.3058 6.71785 30.1438 7.88082 30.3763L10.7704 30.9543C13.3053 31.4613 14.5728 31.7147 15.4292 32.5711C16.2856 33.4275 16.5391 34.695 17.0461 37.23L17.624 40.1195C17.8566 41.2825 18.6945 42.2317 19.8196 42.6067C22.5332 43.5112 25.467 43.5112 28.1806 42.6067C29.3057 42.2317 30.1437 41.2825 30.3763 40.1195L30.9542 37.23C31.4612 34.695 31.7147 33.4275 32.571 32.5711C33.4274 31.7147 34.6949 31.4613 37.2299 30.9543L40.1194 30.3763C41.2824 30.1438 42.2316 29.3058 42.6066 28.1807C43.5112 25.4671 43.5112 22.5333 42.6066 19.8197C42.2316 18.6946 41.2824 17.8567 40.1194 17.6241L37.2299 17.0462C34.6949 16.5392 33.4274 16.2857 32.571 15.4293C31.7147 14.5729 31.4612 13.3054 30.9542 10.7704L30.3763 7.8809C30.1437 6.71793 29.3057 5.76875 28.1806 5.3937Z"
            fill="#F97316"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-between  lg:h-[50%] w-[84px] ">
        {/* Nav Links */}
        {NavLinks.map((link, idx) => (
          <span
            key={idx}
            className={`w-full border-l-2  ${
              pathName === link.link &&
              "after:content-[''] after:block after:h-[80%] after:w-2 after:rounded-br-full after:rounded-tr-full after:bg-[#F97316] relative after:absolute after:left-0 after:top-[6px]"
            }`}
          >
            <Link
              href={link.link}
              title={link.title}
              className="[&>svg]:text-4xl  [&>svg]:text-[#ffffff] [&>svg]:mx-auto "
            >
              {link.icon}
            </Link>
          </span>
        ))}
      </div>
      <div className=" h-[10%]">
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="  lg:relative lg:top-[30px] lg:-left-1  dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    onClick={() => signOut({ callbackUrl: "/sign-in" })}
                  >
                    <RiLogoutCircleRLine className="text-4xl text-[#f97316]  " />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#2f3138] text-white rounded-md">
                    <p>Sign Out</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
