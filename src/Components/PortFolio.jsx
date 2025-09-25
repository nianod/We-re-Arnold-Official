const PortfolioCard = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-black shadow-lg rounded-xl p-6 max-w-sm mx-auto text-center border hover:shadow-2xl transition-all duration-300"
    >
      <h2 className="text-lg font-semibold text-green-500">Visit Our Portfolio</h2>
      <p className="text-gray-500 mt-2">
        Explore our projects, skills, and work experience.
      </p>
      <p className="text-sm text-gray-400 mt-1 italic">
        You’ll be redirected to an external page.
      </p>
      <div className="w-full mt-5 bg-blue-700 text-white p-2 hover:bg-blue-800 transition cursor-pointer rounded">
        <a
          className="font-medium"
          href="https://stack-by-arnold.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 View Portfolio
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
