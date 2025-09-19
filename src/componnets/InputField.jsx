

function InputField({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-3 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default InputField;