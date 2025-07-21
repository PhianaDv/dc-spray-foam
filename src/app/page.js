import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-6 text-center space-y-10">
      {/* Hero Section */}
      <section>
       <div className="flex justify-center items-center">
  <Logo className="h-[100px]" />
</div>
        <p className="text-xl max-w-3xl mx-auto mb-6 text-[#03072b]">
          Professional spray foam insulation located in Oakes, North Dakota - serving all of North Dakota. We help homeowners, farmers, and businesses stay energy-efficient and protected — year-round.
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
        <h2 className="text-2xl font-semibold">Looking for insulation? We&apos;ve got you covered.</h2>
        
        <ul className="list-disc pl-6 text-left">
          <li>Roofing</li>
          <li>Walls</li>
          <li>Crawl Spaces</li>
          <li>Basements</li>
          <li>Attics</li>
          <li>Fish Houses, Hunting Shacks and Trailers.</li>
          
        </ul>
        <p className="text-2xl font-semibold">Agricultural, Residential and Commercial Buildings!</p>
        <p><strong>Trusted by farmers, contractors, and families throughout North Dakota.</strong></p>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#03072b] text-white p-6 rounded shadow max-w-4xl mx-auto text-center list-inside">
        <h2 className="text-2xl font-bold mb-2">Sealed tight, done right.</h2>
        
          <li>Open and Closed Cell</li>
          <li>Blow-in</li>
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
      <section class="sr-only">
  <h2>Service Areas – Eastern North Dakota</h2>
  <p>Fargo, Grand Forks, Wahpeton, Valley City, Jamestown, Casselton, Lisbon, Hillsboro, Mayville, Larimore, Kindred, Enderlin, Grafton, Park River, Cavalier, Pembina, Thompson, Hatton, Buxton, Harwood, Horace, and surrounding communities.</p>

  <h2>Service Areas – Central North Dakota</h2>
  <p>Bismarck, Mandan, Devils Lake, Carrington, Harvey, Steele, Rugby, Fort Yates, Beulah, Hazen, Washburn, Lincoln, Center, Wilton, New Rockford, Turtle Lake, Garrison, Napoleon, Robinson, and surrounding communities.</p>

  <h2>Service Areas – Western North Dakota</h2>
  <p>Dickinson, Williston, Minot, Watford City, Bowman, Stanley, Tioga, Belfield, Beach, Killdeer, New Town, Parshall, Kenmare, Mohall, Velva, Surrey, Glenburn, Alexander, Alamo, and surrounding communities.</p>

  <h2>Service Areas – Southern North Dakota (Based in Oakes)</h2>
  <p>Oakes, Ellendale, Edgeley, LaMoure, Ashley, Forman, Linton, Kulm, Wishek, Napoleon, Gackle, Monango, Forbes, Venturia, and surrounding communities.</p>
</section>

    </div>
  );
}
