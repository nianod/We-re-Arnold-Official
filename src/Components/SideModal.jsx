import { Link } from 'react-router-dom';

const SideModal = ({ sideMenu, setSideMenu }) => {
  return (
    <div>
      {sideMenu && (
        <div
          className="fixed inset-0 z-10 backdrop-blur-md bg-black/40"
          onClick={() => setSideMenu(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-70 sm:w-96 md:w-[30%] 
        bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950
        shadow-2xl shadow-blue-900/50 z-50 transform 
        transition-transform duration-300 ease-in-out
        ${sideMenu ? 'translate-x-0' : 'translate-x-full'}`}
      >
  
        <button
          onClick={() => setSideMenu(false)}
          className="cursor-pointer text-gray-300 font-bold absolute top-2 right-2 text-2xl hover:rotate-45 transition-transform duration-300"
        >
          ╳
        </button>
        <div className="p-5 text-white flex flex-col gap-2 mt-8">
          <h2 className="text-green-500 text-xl font-[helvetica] mb-4 font-bold">Navigation</h2>

          {[
            { to: '/', label: '🏠︎ Home' },
            { to: 'services', label: '🛍️ Our Services' },
            { to: '/work', label: '⛓️‍💥 Our Projects' },
            { to: '/', label: '🗑️ About Us' },
          ].map((item, idx) => (
            <p
              key={idx}
              className="hover:bg-blue-800/60 transition p-3 rounded cursor-pointer"
              onClick={() => setSideMenu(false)}
            >
              <Link to={item.to} className="block w-full">
                {item.label}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideModal;