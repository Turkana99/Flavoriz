function Button({ type, clickFunc, children }) {
  return (
    <button
      type={type}
      onClick={clickFunc}
      className="w-full px-4 py-2 bg-mainColor text-white rounded-md hover:bg-transparent hover:border hover:border-mainColor 
                 hover:text-mainColor transition duration-300
                 hover:font-bold transition duration-300"
    >
      {children}
    </button>
  );
}

export default Button;
