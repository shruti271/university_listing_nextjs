const CardWrapper = ({ className = '', children ,borderNone}) => {
  return (
    <div
      className={`bg-colorWhite border border-colorGrey rounded-md ${className} ${borderNone}`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
