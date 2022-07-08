import StarUni from '../../svg/StarUni';

const FeaturesUniItem = ({ university }) => {
  const { rank, name } = university;

  const listClass =
    rank === '1st'
      ? 'scale-105 rounded-xl shadow-md font-semibold text-colorBlack text-xl'
      : 'border';
  const starClass = rank === '1st' ? 'w-8 h-8' : 'grayscale w-5 h-5';

  return (
    <li
      className={`px-7 py-6 flex items-center justify-between bg-colorWhite last:rounded-b-2xl ${listClass}`}
    >
      <h4 className="flex items-center gap-2">
        <div className={`${starClass}`}>
          <StarUni />
        </div>
        {name}
      </h4>
      <span className="">{rank}</span>
    </li>
  );
};

export default FeaturesUniItem;
