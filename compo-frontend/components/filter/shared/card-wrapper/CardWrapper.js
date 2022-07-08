const CardWrapper = ({ className = '', children }) => {
  return (
    <div
      className={`bg-colorWhite border border-colorGrey rounded-md ${className}`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
