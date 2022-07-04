import CardWrapper from '../shared/card-wrapper/CardWrapper';
import FilterTitle from '../shared/filter-title/FilterTitle';

const InstituteType = ({ className = '' }) => {
  return (
    <CardWrapper>
      <FilterTitle>Cost</FilterTitle>
      <div className="px-8 pt-5 pb-8">check</div>
    </CardWrapper>
  );
};

export default InstituteType;
