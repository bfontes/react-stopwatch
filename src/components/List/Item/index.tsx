import { ITarefa } from '../../../types/tarefa'
import style from './Item.module.scss'

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function Item({
    activie,
    time,
    selecionado,
    completado,
    id,
    selecionaTarefa
    }: Props) {
    return (
        <li
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
        onClick={() => !completado && selecionaTarefa(
          {
            activie,
            time,
            selecionado,
            completado,
            id
          }
          )}
        >
        <h3>{activie}</h3>
        <span>{time}</span>
        {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
      </li>
    )
}

//na versao 17 nao precisa importar o react