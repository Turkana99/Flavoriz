import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4sm:px:6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>FLAVORIZ</div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="/" className="text-gray-700 hover:text-mainColor hover:font-bold">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-mainColor hover:font-bold">
              About
            </a>
            <a href="/recipes" className="text-gray-700 hover:text-mainColor hover:font-bold">
              Recipes
            </a>
            <a href="/contact" className="text-gray-700 hover:text-mainColor hover:font-bold">
              Contact
            </a>

            {user && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-mainColor rounded-full flex items-center justify-center text-white font-bold">
                  {user.username[0].toUpperCase()}
                </div>
                <span className="text-gray-700">{user.username}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
