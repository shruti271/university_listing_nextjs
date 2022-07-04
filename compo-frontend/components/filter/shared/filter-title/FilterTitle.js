const FilterTitle = ({ className = '', children }) => {
  return (
    <div className={`p-8 pb-10 border-b border-colorGrey ${className}`}>
      <h4 className="font-semibold text-2xl">{children}</h4>
    </div>
  );
};

export default FilterTitle;
