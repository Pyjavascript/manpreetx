function Navigation({ onContactClick }) {
  return (
    <nav className="text-white z-10 flex justify-between items-center">
      <div className="w-30 md:w-fit">
        <img src="./logo.svg" alt="logo" />
      </div>
      <div className="flex gap-4">
        <button
          className="text-black bg-white p-2 border-2 border-white rounded-lg text-[0.8rem] md:text-md cursor-pointer"
          onClick={onContactClick}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
