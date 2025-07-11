export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-black text-[#c4bc91] text-xs md:text-sm px-4 py-2 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Left side */}
        <div className="flex space-x-2 md:space-x-4 whitespace-nowrap">
          <span>📍 Hwy 52 West, Yorkton SK</span>
          <a href="tel:+13066414724">📞 (306) 641-4724</a>
        </div>

        {/* Right side */}
        <div className="flex space-x-2 md:space-x-4 mt-1 md:mt-0 whitespace-nowrap">
          <span>&copy; {new Date().getFullYear()} Cloud Nine Coaches</span>
          <a
            href="https://b-lyt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-500 flex items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[#c4bc91]"
            >
              <circle cx="12" cy="12" r="10" />
              <ellipse cx="12" cy="12" rx="10" ry="4" />
              <path d="M2 12h20M12 2c3 4 3 16 0 20M12 2c-3 4-3 16 0 20" />
            </svg>
            <span>by b·lyt</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
