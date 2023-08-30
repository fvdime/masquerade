const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-950">
        <div className="max-w-screen-xl mx-auto p-2">
          <div className=" w-full md:w-auto">
            <ul className="uppercase font-light text-sm flex flex-row justify-between items-center md:p-0 md:flex-row md:mt-0 md:border-0  md:bg-gray-950">
              <li>
                <a
                  href="/"
                  className="pl-3 pr-4 md:p-0 text-white md:bg-transparent md:hover:text-slate-500  hover:text-slate-400 md:hover:bg-transparent"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pl-3 pr-4 md:p-0 text-white md:bg-transparent md:hover:text-slate-500  hover:text-slate-400 md:hover:bg-transparent"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="pl-3 pr-4  md:p-0 text-white md:bg-transparent md:hover:text-slate-500 hover:text-slate-400 md:hover:bg-transparent"
                >
                  contact
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="pl-3 pr-4 md:p-0 text-white md:bg-transparent md:hover:text-slate-500 hover:text-slate-400 md:hover:bg-transparent"
                >
                  shopping cart
                </a>
              </li>
              {/* <div className="absolute bg-sky-400 rounded-full px-1 right-3 top-0">
                  12
                </div> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
