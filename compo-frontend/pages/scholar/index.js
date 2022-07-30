import FavoriteButton from '../../components/FavoriteButton';
import DirectoryLayout from '../../components/layouts/DirectoryLayout';
import UpperFilter from '../../components/upper-filter/UpperFilter';

const scholarshipCards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const Scholarships = () => {
  return (
    <DirectoryLayout>
      <section className="lg:basis-[200px] xl:basis-[350px] hidden lg:block pt-14 pb-20">
        filter
      </section>
      <section className={`pt-32 pb-11`}>
        <UpperFilter />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mb-14">
          {scholarshipCards.map((card) => (
            <div
              className="py-7 px-5 rounded-lg"
              style={{
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-colorPrimary font-medium">$1000</span>
                <FavoriteButton />
              </div>
              <h3 className="font-semibold mb-2">QCSEF General Scholarship</h3>
              <p className="text-[0.875rem] text-[#696974] mb-5 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[0.875rem] font-medium mb-3">
                <span className="text-[#696974]">Deadline:</span>{' '}
                <span className="text-colorBlack font-bold">June 24, 2022</span>
              </p>
              <p className="text-[0.875rem] font-medium mb-4">One time award</p>
              <button className="block w-full text-center font-semibold py-3 border border-colorPrimary text-colorPrimary rounded hover:bg-colorPrimary hover:text-colorWhite transition duration-200">
                Apply now
              </button>
            </div>
          ))}
        </div>
      </section>
    </DirectoryLayout>
  );
};

export default Scholarships;
