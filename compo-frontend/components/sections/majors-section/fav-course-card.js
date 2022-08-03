import Image from "next/image";

const FavCourseCard = ({ image, label, numOfCourse }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[10px] text-center w-[175px] p-5">
      <Image src={image} className=" rounded-[10px]" />
      <p className="font-semibold text-[#1B1D21] text-base leading-[28px]">
        {label}
      </p>
      <p className="font-normal text-[#1B1D21] text-sm leading-[28px]">
        {numOfCourse} Course
      </p>
    </div>
  );
};

export default FavCourseCard;
