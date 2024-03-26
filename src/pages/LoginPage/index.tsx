import { Link } from "react-router-dom"
import "./styles.scss"
import { RiArrowGoBackFill } from "react-icons/ri";

export function LoginPage(){
    

    return (
        <div className="div-login">
            <section>
                <div className="div-title">
                    <h3>Login</h3>
                    <Link to="/"><RiArrowGoBackFill/></Link>
                </div>
                <form className="login-form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" />
                    </div>
                    <button>Entrar</button>
                </form>
            </section>
        </div>
    )

}