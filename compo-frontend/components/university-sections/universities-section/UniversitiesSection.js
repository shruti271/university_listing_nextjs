import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  appendToUniversities,
  getUniversities,
  incrementPage,
} from "../../../store/university/universitySlice";
import CircularProgress from "@mui/material/CircularProgress";
import UpperFilter from "../../upper-filter/UpperFilter";
import UniversityCard from "./UniversityCard";
import { useInView } from "react-intersection-observer";
import MobileFilter from "../../universities-dir-filter/MobileFilter/MobileFilter";

const UniversitiesSection = ({ className = "" }) => {
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
    <section className={`pt-20 md:pt-32 pb-11 ${className}`}>
      <UpperFilter />
      <div className="mb-10">
        <MobileFilter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mb-14">
        {universities?.map((university, index) =>
          universities.length === index + 1 ? (
            <UniversityCard key={university.id} university={university} />
          ) : (
            <UniversityCard key={university.id} university={university} />
          )
        )}
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
    </section>
  );
};

export default UniversitiesSection;
