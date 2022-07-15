const UpperFilter = () => {
  return (
    <div className="py-5 px-6 bg-colorWhite border border-[#F0F0F0] rounded-md mb-11 overflow-x-auto">
      <ul className="flex items-center text-[0.9rem] gap-10">
        <li className="font-semibold text-colorBlack">All</li>
        <li>Top Rated</li>
        <li>Sciences</li>
        <li>Arts</li>
        <li>Technology</li>
        <li>Humanity</li>
        <li>Social</li>
      </ul>
    </div>
  );
};

export default UpperFilter;
