
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




export const metadata = {
  title: 'Cloud Nine Coaches | Limousine Service in Yorkton & Area',
  description: 'Cloud Nine Coaches offers premium limousine services for weddings, grads, special occasions, and more across Yorkton, Melville, Esterhazy, and nearby areas. Travel in luxury, comfort, and style.',
  keywords: [
    'Yorkton limo', 'limousine service Yorkton', 'wedding limo Yorkton', 'wedding transportation',
    'grad limo Yorkton', 'graduation limousine Yorkton', 'airport limo Yorkton', 'graduation vehichle', 'prom vehicle',
    'special occasion limo', 'luxury vehicle rental', 'chauffeur service Yorkton',
    'party limo', 'Yorkton party bus', 'limo hire Yorkton', 'event transportation',
    'limo Melville', 'limo Esterhazy', 'limo Langenburg', 'limo Canora', 'limo Foam Lake',
    'limo Wadena', 'limo Ituna', 'limo Churchbridge', 'limo Kamsack', 'limo Roblin',
    'limo Saltcoats', 'limo Invermay', 'limo Springside', 'limo Theodore',
    'limo Good Spirit Lake', 'luxury limo Saskatchewan', 'affordable limo Yorkton',
    'limousine service Saskatchewan', 'Cloud Nine Coaches',
  ],
  robots: 'index, follow',
}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/197ee72212c08113764c603df0dab916?family=Lavanderia-Sturdy" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </head>
      <body className="w-full h-full flex flex-col">
        <Navbar />

        {/* Background image as watermark */}
        <div className="absolute inset-0 -z-10 bg-[url('/CNCBanner.jpg')] bg-cover bg-[0%_20%] opacity-20 mix-blend-multiply" />

        {/* Content */}
        <main className="flex-grow absolute top-[13vh] bottom-[6.5vh] left-0 right-0 overflow-y-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
