export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#03072b] text-[#d4d5d8] text-xs md:text-sm px-4 py-2 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Left side */}
        <div className="flex space-x-2 md:space-x-4 whitespace-nowrap items-center">
          <a href="mailto:dcsprayfoam22@gmail.com" className="flex items-center space-x-1 hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v0.01L12 13 2 4.01V4zm0 2.236V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.236l-10 8.8-10-8.8z"/>
            </svg>
            <span>dcsprayfoam22@gmail.com</span>
          </a>
          <a href="tel:+17013082004">📞 (701) 308-2004</a>
          <a href="tel:+17019369935">(701) 936-9935</a>
        </div>

        {/* Right side */}
        <div className="flex space-x-2 md:space-x-4 mt-1 md:mt-0 items-center">
          <span>&copy; {new Date().getFullYear()} DC Spray Foam LLC</span>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/dcsprayfoam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* b·lyt link */}
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
              className="text-[#d4d5d8]"
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
