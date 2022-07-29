import { getUniversities } from "../../../store/university/universitySlice";
import PaginationControlled from "../../PaginationControlled/PaginationControlled";
import UniversityCard from "../../university-sections/universities-section/UniversityCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MajorUniversities = () => {
  const dispatch = useDispatch();

  const universities = useSelector(
    (state) => state.universities.filteredUniversities
  );
  const countUniversities = useSelector(
    (state) => state.universities.countUniversities
  );

  useEffect(() => {
    dispatch(getUniversities());
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mb-14">
        {universities.map((university) => (
          <UniversityCard key={university.id} university={university} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-colorBlack">
          Showing {universities.length} of {countUniversities}
        </span>
        <div>
          <PaginationControlled
            countPages={countUniversities}
            itemsPerPage={20}
          />
        </div>
      </div>
    </>
  );
};
export default MajorUniversities;
