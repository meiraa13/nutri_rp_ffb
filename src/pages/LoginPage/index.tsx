import { Link } from "react-router-dom"
import "./styles.scss"
import { RiArrowGoBackFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { TLoginData, loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";


export function LoginPage(){
    const { register, handleSubmit } = useForm<TLoginData>({
        resolver: zodResolver(loginSchema)
    })
    const { userLogin  } = useContext(UserContext)

    return (
        <div className="div-login">
            <section>
                <div className="div-title">
                    <h3>Login</h3>
                    <Link to="/"><RiArrowGoBackFill/></Link>
                </div>
                <form onSubmit={handleSubmit(userLogin)} className="login-form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" {...register("email")} />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" {...register("password")} />
                    </div>
                    <button>Entrar</button>
                </form>
            </section>
        </div>
    )

}