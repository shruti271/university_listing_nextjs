const DirectoryHero = ({ title, bgImg }) => {
  return (
    <section
      className="py-16 md:py-24 mt-[112px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <h1 className="text-center font-semibold text-colorWhite text-2xl md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default DirectoryHero;
