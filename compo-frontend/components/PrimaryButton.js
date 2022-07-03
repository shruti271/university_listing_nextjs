const PrimaryButton = ({
  children = '',
  isPrimary = 'true',
  className = '',
  ...otherProps
}) => {
  const btnColor = isPrimary
    ? 'bg-colorPrimary text-colorPale hover:bg-[#0257e2]'
    : 'bg-colorPale text-[#544E5D] hover:bg-[#ceced0]';
  return (
    <button
      className={`${btnColor} rounded-2xl py-4 px-8 font-semibold hover:scale-95 transition-all duration-300 text-sm md:text-base ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
