import InputField from "../componnets/InputField";
import Button from "../componnets/Button";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long.")
    .required("Username mustn't be empty."),
  password: Yup.string()
    .min(6, "Password must be at least 3 characters long.")
    .required("Password mustn't be empty."),
});
function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen bg-login-background bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl w-96 flex flex-col gap-6">
          <h1 className="text-center text-3xl font-bold text-white">Login</h1>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              login(values.username, values.password);
              navigate("/");
            }}
          >
            {() => (
              <Form className="flex flex-col gap-4">
                <Field
                  as={InputField}
                  type="text"
                  name="username"
                  placeholder="Enter username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-700 text-sm"
                />
                <Field
                  as={InputField}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-700 text-sm "
                />
                <Button type="submit">Login</Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
