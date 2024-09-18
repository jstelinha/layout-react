import { useState } from "react"
import { Pagina } from "../Components/Pagina";

export function Estado1 (){

    let numero = 10

    const [num, setNum] = useState(0)
    // const estado = useState(500)
    // const num = estado[0]
    // const setNum = estado[1]

    const [texto, setTexto] = useState("teste")

    function incrementar(){
        setNum(num+1)
    }

    return(
        <Pagina titulo="Estado 1" subtitulo="HAHAHAAHAHAHAH"> 
            <div>
                <div>{num} </div>

                <button className="bg-zinc-600 p-4 rounded-md" onClick={incrementar}>
                     Incrementar 
                </button>
            </div>
            <div>
                <input className="bg-zinc-600 " type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
                <button className="bg-zinc-600 p-4 rounded" onClick={() => setTexto("")} > ok </button>
                <span> {texto} </span>
            </div>
        </Pagina>
    )
}