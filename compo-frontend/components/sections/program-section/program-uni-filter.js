import MainSearch from "../../filter/program-filter/MainSearch";

const ProgramUniversitiesFilter = () => {
  return (
    <>
      <div className="font-semibold text-[#000000] text-xl xl:text-2xl">
        Universities Offering this Major
      </div>
      <div className="mt-7">
        <MainSearch />
      </div>
    </>
  );
};
export default ProgramUniversitiesFilter;
