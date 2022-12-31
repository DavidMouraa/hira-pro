const checarResposta = (texto, lista, index, setFuncao) => {
    if (texto.toLowerCase() === lista[index]) {
        setFuncao('Acertou!');
    }
    else {
        setFuncao('Errou!');
    }
}

export {checarResposta};
