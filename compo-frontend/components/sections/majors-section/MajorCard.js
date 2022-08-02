import React from "react";
import Image from "next/image";

const MajorCard = ({image,title}) => {
  return (
    <div className="pb-5">
      <Image src={image} />
      <div className="mt-8 w-[90%]">
        <p className="font-semibold text-lg sm:text-xl lg:text-2xl  text-[#000000]">
          {title}
        </p>
        <ul className="gap-1 flex flex-col mt-3">
          <li>Kinesiology and Exercise Science</li>
          <li>Health Services/Allied Health/</li>
          <li>Health Sciences, General</li>
          <li>Physical Education Degree</li>
          <li>Physical Therapy/Therapist</li>
          <li>Nursing School</li>
          <li>Athletic Training/Trainer</li>
        </ul>
      </div>
    </div>
  );
};

export default MajorCard;
