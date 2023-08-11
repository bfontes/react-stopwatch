import Button from "../Button";
import Relogio from './Relogio';
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props{
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void 
}

export default function Cronometro({selecionado, finalizarTarefa}: Props) {
    const [time, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.time) {
         setTempo(tempoParaSegundos(selecionado.time));
        }
      }, [selecionado])

      function regressiva(contador: number = 0) {
        setTimeout(() => {
          if(contador > 0) {
            setTempo(contador - 1);
            return regressiva(contador - 1);
          }
          finalizarTarefa();
        }, 1000)
      }
    
      
    return (
        <div className={style.cronometro}>
           <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
           Tempo: {time}
        <div className={style.relogioWrapper}>
            <Relogio time={time}/>
           </div>
           <Button onClick={() => regressiva(time)} 
           texto="Começar!
           "/>
       </div>
    )
}