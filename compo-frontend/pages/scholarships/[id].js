import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";

import ScholarshipHeader from "../../components/sections/scholarships-section/scholarship-header";
import ScholarshipInfo from "../../components/sections/scholarships-section/scholarship-info";
import ScholarshipContent from "../../components/sections/scholarships-section/scholarship-content";

const ScholarshipDetails = ({ scholarship }) => {
  return (
    <>
      <div className="pb-20">
        <Header />
        <ScholarshipHeader scholarship={scholarship} />

        <ScholarshipInfo scholarship={scholarship} />
        <ScholarshipContent scholarship={scholarship} />
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get scholarships
  const res = await fetch("https://api.composite.digital/v1/scholarships/");
  const scholarships = await res.json();

  // Get the paths we want to pre-render based on scholarships
  const paths = scholarships.map((scholarship) => ({
    params: { id: scholarship.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the scholarship `id`.
  const res = await fetch(
    `https://api.composite.digital/v1/scholarships/${params.id}`
  );
  const scholarship = await res.json();

  // Pass scholarship data to the page via props
  return { props: { scholarship } };
}

export default ScholarshipDetails;
