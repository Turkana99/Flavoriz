import InputField from "../componnets/InputField";
import Button from "../componnets/Button";
import { AuthContext } from "../context/AuthContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate("/");
  };

  return (
    <div className="relative w-screen h-screen bg-login-background bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl w-96 flex flex-col gap-6">
          <h1 className="text-center text-3xl font-bold text-white">Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputField
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              type="password"
              placeholder="Enter paswword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
