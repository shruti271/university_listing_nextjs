import MainSearch from "../../filter/major-filter/MainSearch";

const MajorUniversitiesFilter = () => {
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
export default MajorUniversitiesFilter;
