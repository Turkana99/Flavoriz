

function InputField({ type, placeholder, className = "", ...props}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`p-3 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}

export default InputField;