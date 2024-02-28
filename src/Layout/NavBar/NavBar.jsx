import { useState } from "react";
import logo from "./Logo.png"
import { MdOutlineSort } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = ''
  };

  return (
    <nav className="max-w-full px-2 sm:px-6 md:px-24 dark:bg-gray-900  pt-4 pb-4  z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
        </div>

        <div className="hidden md:flex space-x-8">
          {/* Botones para pantallas grandes */}
          <button className="text-white hover:bg-gray-400">Home</button>
          <button className="text-white">Product</button>
          <button className="text-white">Pricing</button>
          <button className="text-white">About</button>
          <button className="text-white">Contact</button>
          <button onClick={logout} className="text-white">
            Logout
          </button>
        </div>

        {/* Menú desplegable para pantallas móviles */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            <MdOutlineSort size={30} style={{ transform: "scaleX(-1)" }} />
          </button>
          {isMobileMenuOpen && (
            <>
              <>
                <div className="absolute top-16 left-0 right-0 dark:bg-gray-900 py-2 flex flex-col items-center  z-50">
                  <button className="block text-white px-4 py-2">Home</button>
                  <button className="block text-white px-4 py-2">
                    Product
                  </button>
                  <button className="block text-white px-4 py-2">
                    Pricing
                  </button>
                  <button className="block text-white px-4 py-2">About</button>
                  <button className="block text-white px-4 py-2">
                    Contact
                  </button>
                  <button onClick={logout} className="text-white">
                    Logout
                  </button>
                </div>
              </>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
