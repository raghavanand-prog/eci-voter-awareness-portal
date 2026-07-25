function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-slate-800 to-green-900">

      <div className="h-1 flex">
        <div className="bg-orange-500 w-1/3"></div>
        <div className="bg-white w-1/3"></div>
        <div className="bg-green-600 w-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 text-center">

        <h2 className="text-2xl font-bold text-white">
          Election Commission of India
        </h2>

        <p className="mt-3 text-gray-300">
          Strengthening Democracy Through Every Vote
        </p>

        <div className="mt-6 flex justify-center gap-8">

          <a
            href="https://eci.gov.in"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400"
          >
            Official Website
          </a>

          <a
            href="#"
            className="hover:text-green-400"
          >
            Contact
          </a>

          <a
            href="#"
            className="hover:text-blue-400"
          >
            About
          </a>

        </div>

        <p className="mt-8 text-gray-500 text-sm">
          © 2026 Election Commission of India Awareness Portal
        </p>

      </div>

    </footer>
  );
}

export default Footer;