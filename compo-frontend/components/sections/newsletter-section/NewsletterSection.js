import waveElement from '../../../assets/newsletter-section/waveElement.svg';
const NewsletterSection = () => {
  return (
    <section className="">
      <div
        className="container bg-colorPrimary text-colorWhite py-20 px-4 rounded-xl flex flex-col items-center gap-20 bg-cover bg-no-repeat bg-left-bottom"
        style={{ backgroundImage: `url(${waveElement.src})` }}
      >
        <h2 className="text-colorWhite font-semibold text-center text-xl md:text-2xl max-w-lg">
          Don&apos;t miss our weekly updates about academics information
        </h2>

        <form className="flex items-center gap-2 md:gap-20 border-b-2 text-sm md:text-base py-3 w-full max-w-lg">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="bg-transparent placeholder:text-colorWhite border-none outline-none grow w-full"
          />
          <button className="uppercase font-semibold hover:opacity-50">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
