
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




export const metadata = {
  title: 'DC Spray Foam | Insulation Experts in North Dakota',
  description:
    'DC Spray Foam specializes in residential, commercial, and agricultural spray foam insulation across North Dakota. Increase energy efficiency and comfort with our expert team.',
  keywords: [
    'spray foam insulation', 'North Dakota insulation', 'Oakes insulation',
    'spray foam Fargo', 'spray foam Bismarck', 'spray foam Grand Forks',
    'spray foam Minot', 'spray foam Jamestown', 'spray foam Dickinson',
    'spray foam Williston', 'foam insulation ND', 'insulation North Dakota'
  ],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/65856db74a869d7b983faf5deff95599?family=Protoculture+Italic" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;800&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </head>
      <body className="w-full h-full flex flex-col">
        <Navbar />
        {/* Content */}
        <main className="flex-grow absolute top-[18.5vh] bottom-[6.5vh] left-0 right-0 overflow-y-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
