import { Link } from 'react-router-dom'
const SideModal = ({sideMenu, setSideMenu}) => {
  
  return (
    <div>  
      {sideMenu && (
        <div
          className="fixed inset-0  z-40 backdrop-blur-md"
          onClick={() => setSideMenu(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-[30%] bg-blue-950 z-50 transform transition-transform duration-300 ${
          sideMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-green-500 text-xl font-[helvetica]">Menu</h2>
          <button onClick={() => setSideMenu(false)} className="text-gray-300 font-bold cursor-pointer">
            ╳
          </button>
        </div>
        <div className="p-4 text-white">
          <p><Link to="/">🏠︎ Home</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SideModal
