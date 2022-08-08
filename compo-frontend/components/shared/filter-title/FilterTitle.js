const FilterTitle = ({
  className = "",
  children,
  borderNone,
  titleClass,
  handleOpenClick,
}) => {
  return (
    <div
      className={`p-8 pb-10 border-b border-colorGrey cursor-pointer	 ${borderNone}`}
      onClick={handleOpenClick}
    >
      <h4 className={`font-semibold text-2xl ${className} ${titleClass}`}>
        {children}
      </h4>
    </div>
  );
};

export default FilterTitle;
