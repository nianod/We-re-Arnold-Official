
const navContents = {
    image: 'public/pic1.png',
    title: "We're Arnold's Tech"
}

const Header = () => {
  return (
    <div className="top-0 z-auto">
      <div className="flex items-center gap-1 p-3 bg-transparent text-[#6b57d2] font-bold text-xl border-b border-gray-400">
        <img src={navContents.image}
         className="rounded-full h-10 -w-10"
         alt="Arnold" />
         <h1>
            {navContents.title}
         </h1>
      </div>
    </div>
  )
}

export default Header
