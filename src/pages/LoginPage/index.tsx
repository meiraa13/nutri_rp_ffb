import "./styles.scss"

export function LoginPage(){
    

    return (
        <div className="div-login">
            <section>
                <h3>Login</h3>
                <form>
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