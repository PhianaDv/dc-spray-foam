import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 text-center space-y-10">
      {/* Hero Section */}
      <section>
        <h1 className="text-5xl text-[#03072b] font-bold mb-4">DC SPRAY FOAM</h1>
        <p className="text-xl max-w-3xl mx-auto mb-6 text-[#03072b]">
          Professional spray foam insulation serving Oakes, North Dakota and surrounding areas. We help homeowners, farmers, and businesses stay energy-efficient and protected — year-round.
        </p>
        <Link href="/contact" legacyBehavior>
          <a
            className="inline-block bg-[#03072b] text-white py-3 px-6 rounded hover:bg-[#d4d5d8] hover:text-[#03072b] transition"
          >
            Get a Free Estimate
          </a>
        </Link>
      </section>

      {/* Services / Project Highlights */}
      <section className="text-left max-w-4xl mx-auto space-y-4 text-[#03072b]">
        <h2 className="text-2xl font-semibold">Looking for insulation? We've got you covered.</h2>
        <ul className="list-disc pl-6 text-left">
          <li>Residential attics, basements, and walls</li>
          <li>Commercial and agricultural buildings</li>
          <li>Barns and pole sheds</li>
          <li>Spray foam trailers</li>
          <li>Trusted by farms, contractors, and families throughout rural North Dakota.</li>
          <li>Based in Oakes, ND — serving Ellendale, Jamestown, Valley City, Lisbon, Edgeley, Wahpeton, Fargo and beyond.</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#03072b] text-white p-6 rounded shadow max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Sealed tight, done right.</h2>
         <li>Open and Closed Cell</li>
          <li>Blow In</li>
          <li>Roof applications and Coatings</li>
        <p className="mb-4">
          Call or text <strong>(701) 308-2004</strong> or <strong>(701) 936-9935</strong> for a free estimate.
        </p>
        <Link href="/contact" legacyBehavior>
          <a
            className="inline-block bg-white text-[#03072b] font-semibold py-2 px-5 rounded hover:bg-[#d4d5d8] transition"
          >
            Contact Us
          </a>
        </Link>
      </section>

      {/* SEO helper (invisible) */}
      <div className="sr-only">
        Providing professional spray foam insulation in Oakes, North Dakota and surrounds including: Jamestown, Valley City, Wahpeton, Lisbon, Edgeley, Ellendale, Fargo and nearby rural communities. Ideal for residential, commercial, farm, and new construction projects. Reduce heating and cooling costs, increase comfort, and protect your investment with DC Spray Foam.
      </div>
    </div>
  );
}
