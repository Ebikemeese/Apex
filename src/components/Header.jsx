export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[72px] bg-[#090d16]/85 backdrop-blur-xl border-b border-gray-800 z-50 transition-all">
      <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center font-extrabold text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            A
          </div>
          <span>
            Apex<span className="text-indigo-400">Engine</span>
          </span>
        </a>

        {/* Scroll Navigation */}
        <nav>
          <ul className="flex items-center gap-1 sm:gap-6 text-xs sm:text-sm font-medium text-gray-400">
            <li>
              <a
                href="#features"
                className="hover:text-white hover:bg-gray-800/60 px-3 py-2 rounded-lg transition-colors"
              >
                Modules
              </a>
            </li>
            <li>
              <a
                href="#workflow"
                className="hover:text-white hover:bg-gray-800/60 px-3 py-2 rounded-lg transition-colors"
              >
                Workflow
              </a>
            </li>
            <li>
              <a
                href="#architecture"
                className="hover:text-white hover:bg-gray-800/60 px-3 py-2 rounded-lg transition-colors"
              >
                Architecture
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-white hover:bg-gray-800/60 px-3 py-2 rounded-lg transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-white hover:bg-gray-800/60 px-3 py-2 rounded-lg transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <a
          href="#pricing"
          className="hidden lg:inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all shadow-md shadow-indigo-500/20"
        >
          Deploy Now
        </a>
      </div>
    </header>
  );
}
