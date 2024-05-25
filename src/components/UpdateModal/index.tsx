import { VscChromeClose } from "react-icons/vsc"
import "../CreateModal/styles.scss"
import { useContext } from "react"
import { DataContext } from "../../providers/DataContext"
import { Button } from "../ui/button"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TCreateFood, createFoodSchema } from "../CreateModal/validator"

export function UpdateModal(){

    const { setUpdateContent, updateContent, updateFood } = useContext(DataContext)
    const { register, handleSubmit, formState:{ errors }} = useForm<TCreateFood>({
        resolver:zodResolver(createFoodSchema)
    })

    const onSubmit:SubmitHandler<TCreateFood> = (data) =>{
        const foodId = updateContent!.id
        updateFood(data, foodId)
    }

    return (
        <div>
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-title">
                    <h3>Editar</h3>
                    <button onClick={()=>setUpdateContent(null)} ><VscChromeClose size={22} /> </button>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <label htmlFor="name">Nome*</label>
                        <input 
                        id="name" 
                        defaultValue={updateContent?.name}
                        {...register("name")}  
                        />
                        <p>{errors.name?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="weight">Peso*</label>
                        <input 
                        id="weight" 
                        type="number" 
                        defaultValue={updateContent?.weight}
                        {...register("weight")}
                        />
                        <p>{errors.weight?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="side">Complemento</label>
                        <input 
                        id="side" 
                        defaultValue={updateContent?.side} 
                        {...register("side")}
                        />
                        <p>{errors.side?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="side-weight">Peso Complemento</label>
                        <input 
                        id="side-weight" 
                        type="number" 
                        defaultValue={updateContent?.weight_side}  
                        {...register("weight_side")}
                        />
                        <p>{errors.weight_side?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="result">Resultado*</label>
                        <input 
                        id="result" 
                        type="number" 
                        defaultValue={updateContent?.result}  
                        {...register("result")}
                        />
                        <p>{errors.result?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="insta">Insta</label>
                        <input 
                        id="insta" 
                        defaultValue={updateContent?.insta} 
                        {...register("insta")}
                        />
                        <p>{errors.insta?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="hipoglycemic">Hipoglicemia*</label>
                        <select 
                        id="hipoglycemic" 
                        defaultValue={updateContent?.hipoglycemic ? "sim": ""}
                        {...register("hipoglycemic")}
                        >
                            <option value="">Não</option>
                            <option value="sim">Sim</option>
                        </select>
                        <p>{errors.hipoglycemic?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="highlight">Destaque*</label>
                        <select 
                        id="highlight" 
                        defaultValue={updateContent?.highlight? "sim": ""} 
                        {...register("highlight")}
                        >
                            <option value="">Não</option>
                            <option value="sim">Sim</option>
                        </select>
                        <p>{errors.highlight?.message}</p>
                    </div>
                    <Button className="w-full">Atualizar</Button>
                </form>

            </div>
        </div>
    </div>
    )

}