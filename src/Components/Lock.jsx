import React from "react";

const Lock = ({ hide }) => {
  return (
    <div className={`absolute top-[55%] left-4 ${hide ? "hidden" : ""}`}>
      <svg
        className="w-6 h-6 lg:w-7 lg:h-7  "
        viewBox="0 0 24 24"
        fill="#0000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.10202 9.39942L6.50233 9.57076C5.5547 9.84151 4.78575 10.5356 4.41972 11.4507C3.50834 13.7291 3.50834 16.2709 4.41972 18.5493C4.78575 19.4644 5.5547 20.1585 6.50233 20.4292L7.10202 20.6006C10.3033 21.5152 13.6967 21.5152 16.898 20.6006L17.4977 20.4292C18.4453 20.1585 19.2143 19.4644 19.5803 18.5493C20.4917 16.2709 20.4917 13.7291 19.5803 11.4507C19.2143 10.5356 18.4453 9.84151 17.4977 9.57076L16.898 9.39942C13.6967 8.48477 10.3033 8.48477 7.10202 9.39942Z"
          stroke="#fff"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M12 13L12 17"
          stroke="#fff"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M9 9V5.32456C9 4.53354 9.50616 3.83128 10.2566 3.58114V3.58114C11.3883 3.20392 12.6117 3.20392 13.7434 3.58114V3.58114C14.4938 3.83128 15 4.53354 15 5.32456V9"
          stroke="#fff"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Lock;
