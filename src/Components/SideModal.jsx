
const SideModal = ({sideMenu, setSideMenu}) => {
  
  return (
    <div>  
      {sideMenu && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40"
          onClick={() => setSideMenu(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-[30%] bg-green-500 z-50 transform transition-transform duration-300 ${
          sideMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-white text-lg">Menu</h2>
          <button onClick={() => setSideMenu(false)} className="text-gray-800 font-bold cursor-pointer">
            ╳
          </button>
        </div>
        <div className="p-4 text-white">
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default SideModal
