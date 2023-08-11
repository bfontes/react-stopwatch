import React from 'react';
import { useState } from 'react';
import { ITarefa } from '../types/tarefa';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';

function App() {
  const [activies, setActivies] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] =  useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setActivies(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setActivies(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }
  return (
    //praticando o dont repeat yourself and single responsabilitie principle
    <div className={style.AppStyle}>
      <Form setActivies={setActivies}></Form>
      <List 
        activies={activies}
        selecionaTarefa = {selecionaTarefa}
        ></List>
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      ></Cronometro>
    </div>
  );
}

export default App;

