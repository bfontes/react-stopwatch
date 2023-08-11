export function tempoParaSegundos(time: string) {

    const [horas = '0', minutos = '0', segundos = '0'] = time.split(":");
    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos);     
}