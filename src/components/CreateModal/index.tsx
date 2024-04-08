import { useContext } from "react"
import "./styles.scss"
import { DataContext } from "../../providers/DataContext"
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { TCreateFood, createFoodSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";


export function CreateModal(){
    const { setCreateModalState, createFood } = useContext(DataContext)
    const { register, handleSubmit, formState:{ errors }} = useForm<TCreateFood>({
        resolver:zodResolver(createFoodSchema)
    })

    return (
        <div>
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Novo Alimento</h3>
                        <button onClick={()=>setCreateModalState(false)}><VscChromeClose size={22} /> </button>
                    </div>
                    <form onSubmit={handleSubmit(createFood)}>
                        <div>
                            <label htmlFor="name">Nome*</label>
                            <input id="name" {...register("name")} />
                            <p>{errors.name?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="weight">Peso*</label>
                            <input id="weight" type="number" {...register("weight")}/>
                            <p>{errors.weight?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="side">Complemento</label>
                            <input id="side" {...register("side")} />
                            <p>{errors.side?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="side-weight">Peso Complemento</label>
                            <input id="side-weight" type="number" {...register("weight_side")} />
                            <p>{errors.weight_side?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="result">Resultado*</label>
                            <input id="result" type="number" {...register("result")} />
                            <p>{errors.result?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="insta">Insta</label>
                            <input id="insta"  {...register("insta")} />
                            <p>{errors.insta?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="hipoglycemic">Hipoglicemia*</label>
                            <select id="hipoglycemic" {...register("hipoglycemic")}>
                                <option value="">Não</option>
                                <option value="sim">Sim</option>
                            </select>
                            <p>{errors.hipoglycemic?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="highlight">Destaque*</label>
                            <select id="highlight" {...register("highlight")}>
                                <option value="">Não</option>
                                <option value="sim">Sim</option>
                            </select>
                            <p>{errors.highlight?.message}</p>
                        </div>
                        <button className="btn-create">Inserir</button>
                    </form>





                </div>
            </div>
        </div>
    )
        
}