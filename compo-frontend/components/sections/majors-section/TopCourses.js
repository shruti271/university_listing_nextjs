import React from "react";
import CardInteractive from "../../filter/shared/card-interactive/CardInteractive";
import { CustomTextField } from "./../../core/CustomMUIComponents";

const TopCourses = () => {
    const TopCourses = [
        "Nursing School","Art/Art Studies, General","Zoology","Business/Commerce","Psychology, General","Computer Scienses","Social Work","Communication, General","Criminal Justice","Liberal Arts & Sciences"
    ]
  return (
    <div className="bg-[#FFFFFF] rounded-[6px] border border-[#F0F0F0] p-8 mt-5">
      <p className="text-2xl font-semibold text-[#000000]">Top 10 Courses</p>

      <div className="mt-[60px] flex flex-col gap-8">
       {TopCourses?.map((itm)=>(
 <CardInteractive
 cardTitle= {itm} borderNone="border-none !p-0" titleClass="!font-semibold !text-xl !text-[#000000]" defaultValue={false}
 bottomComponent={
   <h1>{itm}</h1>
 }
/>
       ))}
       
      </div>
    </div>
  );
};

export default TopCourses;
