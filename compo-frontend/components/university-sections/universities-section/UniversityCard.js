import Image from 'next/image';
import Link from 'next/link';

import dubaiUniLogo from '../../../assets/universities-page/universities-section/uni-dubai.jpg';
import compassIcon from '../../../assets/universities-page/universities-section/Combined Shape.svg';
import PrimaryButton from '../../PrimaryButton';
import FavoriteButton from '../../FavoriteButton';

const UniversityCard = ({ university }) => {
  const {
    id,
    logo = dubaiUniLogo,
    location,
    institute_type = 'public',
    stats_pc_intl_students,
    name,
    description,
    student_body_size,
    rank_order,
    linkApply = '/',
    linkView = '/',
  } = university;

  return (
    <div
      className="bg-colorWhite p-5 rounded-xl"
      style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="relative w-20 h-20">
          <Image src={dubaiUniLogo} alt={`${name} logo`} layout="fill" />
        </div>
        <FavoriteButton />
      </div>
      <h3 className="text-colorSecondary mb-2">{location}</h3>
      <div className="text-[0.75rem] mb-4 flex items-center gap-2">
        <span className="text-colorBlack pr-2 border-r-2 border-colorBlack capitalize">
          {institute_type}
        </span>
        <span className="text-[#92929D]">
          <span className="text-colorBlack">{stats_pc_intl_students}</span>{' '}
          Acceptance rate
        </span>
      </div>
      <h3 className="flex items-center gap-4 font-semibold mb-2">
        {name}
        <span className="block relative w-3 h-3">
          <Image src={compassIcon} alt="compass" layout="fill" />
        </span>
      </h3>
      <p className="text-[0.875rem] text-[#696974] mb-5">
        {description.slice(0, 250) + '...'}
      </p>
      <ul className="flex items-center justify-start gap-1 flex-wrap mb-8">
        <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
          Ranking: <span className="font-bold">{rank_order}</span>
        </li>
        <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
          Student Body Size:{' '}
          <span className="font-bold">{student_body_size}+</span>
        </li>
        <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
          Average cost: <span className="font-bold">$2000</span>
        </li>
        <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
          Average ACT: <span className="font-bold">20%</span>
        </li>
      </ul>
      <div className="flex gap-2">
        <Link href={linkApply} passHref>
          <PrimaryButton
            type="button"
            className="basis-1/2 !rounded-md text-[0.75rem] md:text-[0.75rem] !p-2"
          >
            Apply Now
          </PrimaryButton>
        </Link>
        <Link href={`/universities/${university.id}`} passHref>
          <PrimaryButton
            isPrimary={false}
            type="button"
            className="basis-1/2 !rounded-md text-[0.75rem] md:text-[0.75rem] !p-2"
          >
            View
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default UniversityCard;
