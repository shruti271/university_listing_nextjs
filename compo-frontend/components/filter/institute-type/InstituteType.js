import CardWrapper from '../shared/card-wrapper/CardWrapper';
import FilterTitle from '../shared/filter-title/FilterTitle';
import InstituteOptions from './institute-options/InstiuteOptions';

const InstituteType = ({ className = '' }) => {
  return (
    <CardWrapper>
      <FilterTitle>Institute Type</FilterTitle>
      <div className="px-8 pt-5 pb-8">
        <InstituteOptions />
      </div>
    </CardWrapper>
  );
};

export default InstituteType;
