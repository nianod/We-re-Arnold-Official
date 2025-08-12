import { Link } from 'react-router-dom'
const SideModal = ({sideMenu, setSideMenu}) => {
  
  return (
    <div>
      {sideMenu && (
        <div
          className="fixed inset-0  z-10 backdrop-blur-md"
          onClick={() => setSideMenu(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-[30%] bg-blue-950 z-50 transform transition-transform duration-300 ${
          sideMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setSideMenu(false)}
          className="text-gray-300 font-bold cursor-pointer top-0 absolute right-0 p-2"
        >
          ╳
        </button>
        <div className="p-5 text-white flex flex-col gap-2">
          <h2 className="text-green-500 text-xl font-[helvetica] mt-6">Menu</h2>
          <p className="hover:bg-gray-700 hover:transition p-3 rounded cursor-pointer" onClick={() => setSideMenu(false)}>
            <Link to="/">🏠︎ Home</Link>
          </p>
          <p className="hover:bg-gray-700 hover:transition p-3 rounded cursor-pointer" onClick={() => setSideMenu(false)}>
            <Link to="services">🛍️ Our Services</Link>
          </p>
          <p className="hover:bg-gray-700 hover:transition p-3 rounded cursor-pointer" onClick={() => setSideMenu(false)}>
            <Link to="/work">⛓️‍💥 Our Woks</Link>
          </p>
          <p className="hover:bg-gray-700 hover:transition p-3 rounded cursor-pointer" onClick={() => setSideMenu(false)}>
            <Link to="/">🗑️ About Us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideModal
