"use client";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const PaginationBtn = () => {
  return (
    <>
      <button className="active:scale-95 transition-all duration-300 flex items-center bg-[#36373b] py-1 pr-2 rounded-xl shadow-lg hover:bg-[#56585f]">
        <MdKeyboardArrowLeft className="text-xl" />
        <span className="text-xl">Previous</span>
      </button>
      <button className="active:scale-95 transition-all duration-300 flex items-center bg-[#36373b] py-1 pl-2 rounded-xl shadow-lg hover:bg-[#56585f]">
        <span className="text-xl">Next</span>
        <MdKeyboardArrowRight className="text-xl" />
      </button>
    </>
  );
};

export default PaginationBtn;
