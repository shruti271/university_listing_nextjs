import {
  appendToUniversities,
  getUniversities,
  incrementPage,
} from "../../../store/university/universitySlice";
import UniversityCard from "../../university-sections/universities-section/UniversityCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useInView } from "react-intersection-observer";
import MobileFilterMajorUni from "./MobileFilterMajorUni";

const ProgramUniversities = () => {
  const dispatch = useDispatch();

  const universities = useSelector(
    (state) => state.universities.filteredUniversities
  );

  const isLoading = useSelector((state) => state.universities.pending);
  const currentPage = useSelector((state) => state.universities.currentPage);

  const handleAppend = () => {
    dispatch(appendToUniversities({ universities, page: currentPage }));
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    dispatch(getUniversities());
  }, []);

  useEffect(() => {
    if (inView && universities.length) {
      dispatch(incrementPage());
    }
  }, [inView]);

  useEffect(() => {
    if (currentPage > 1)
      dispatch(appendToUniversities({ universities, page: currentPage }));
  }, [currentPage]);

  return (
    <>
      <div className="mb-10 lg:hidden">
        <MobileFilterMajorUni />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {universities.map((university) => (
          <UniversityCard key={university.id} university={university} />
        ))}
      </div>
      <button
        className="p-2 border mb-2 opacity-0"
        onClick={handleAppend}
        ref={ref}
      >
        append
      </button>
      {isLoading && (
        <div className="text-center">
          <CircularProgress />
        </div>
      )}
    </>
  );
};
export default ProgramUniversities;
