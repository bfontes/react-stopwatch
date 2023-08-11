import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';


interface Props {
    activies : ITarefa[];
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({activies, selecionaTarefa}: Props) {
    //Uma função que dentro dela eu posso colocar um valor padrão

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Daily studies
            </h2>
            <ul>
                {activies.map((item) => (
                    <Item 
                        selecionaTarefa = {selecionaTarefa}
                        key={item.id}
                        {...item}
                        // activie={item.activie}
                        // time = {item.time}

                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;