const ScholarshipDescription = ({ scholarship }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg min-h-auto h-auto sm:min-h-[650px] lg:min-h-[auto]">
      <p className="text-[#000000] text-xl font-semibold">Brief</p>
      <p className="text-[#06040A] font-normal text-lg mt-2  ">
        {scholarship.description}
      </p>
    </div>
  );
};

export default ScholarshipDescription;
