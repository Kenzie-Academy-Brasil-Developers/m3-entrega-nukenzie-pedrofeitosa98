import componentsGroup from "./componentsGroup.svg";
import logoDark from "./logo-dark-mode.svg";
import "./style.css";
import { FaSignInAlt } from "react-icons/fa";

function Login({ setLogin }) {
  return (
    <div className="login__window">
      <div className="login__container fadeIn">
        <section className="login__infos">
          <img src={logoDark} alt="NuKenzie" />
          <h1 className="login__title">
            Centralize o controle das suas finanças...
          </h1>
          <p>...de forma rápida e segura</p>
          <button className="button--big" onClick={() => setLogin(true)}>
            <FaSignInAlt />
            Iniciar
          </button>
        </section>
        <section className="login_image">
          <img src={componentsGroup} alt="..." />
        </section>
      </div>
    </div>
  );
}

export default Login;
