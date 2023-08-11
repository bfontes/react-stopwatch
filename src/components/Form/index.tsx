import React from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITarefa } from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid';


class Form extends React.Component<{
    setActivies: React.Dispatch<React.SetStateAction<ITarefa[]>>}>
    {
    state = {
        activie: "",
        time: " "
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        //pegando as tarefas antigas e o tempo como um novo objeto
        this.props.setActivies(tarefasAntigas => 
            [...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        this.setState({
            tarefa: "",
            time: ""
        })
    }


    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Add a new study 
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        value={this.state.activie}
                        onChange={evento => this.setState({...this.state, activie: evento.target.value})}
                        id="tarefa"
                        placeholder="What do you want to study?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        value={this.state.time}
                        onChange={evento => this.setState({...this.state, time: evento.target.value})}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                    <Button 
                        type="submit"
                        texto="Adicionar" 
                    />  
                </div>
            </form>
        )
    }
}

export default Form;