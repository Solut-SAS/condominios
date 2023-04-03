import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppForm from "../../components/form/AppForm";
import { login } from "../../data/form/FormFields";
import "./styles.css";
import bgImage from "../../assets/bg3.jpg";
import logo from "../../assets/logo.png";
import { login as signIn } from "../../features/authentication";

function Login() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toLogin = async (formData) => {
    setLoading(true);
    try {
      await signIn(formData);
      navigate("/commerces");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden ">
      <div className="flex flex-row">
        <div className="basis-3/5 bg-gradient-to-r from-red-100">
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-center opacity-90 rounded-br-full"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <p className="flex h-full items-center text-white w-3/6 text-6xl font-bold my-0 mx-auto">
              La mejor forma de administrar tu hogar
            </p>
          </div>
        </div>
        <div className="flex flex-col basis-2/5 h-screen grid-cols-1">
          <div className="flex basis-1/12 justify-end mt-9 mr-9">
            <p className="text-left">
              ¿No tienes cuenta?
              <a href=""> Regístrate</a>
            </p>
          </div>
          <div className="mt-10 m-auto flex flex-col basis-3/4">
            <div className="justify-center flex">
              <img src={logo} alt="" style={{ width: "50%" }} />
            </div>
            <div className="mt-4">
              <AppForm
                form={login}
                onSubmit={(e) => toLogin(e)}
                loading={loading}
              />
              <div className="flex flex-row w-full justify-center">
                <div className="basis-2/5">
                  <input type="checkbox" className="checked:bg-red-500" />
                  Recordarme
                </div>
                <div>
                  <a href="" className="basis-11/12">
                    Ups! Olvidé mi contraseña
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
