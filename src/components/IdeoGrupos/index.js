// Importes de estilos
import './styles.css';

// Importes de ferramentas
import { useRef, useState } from 'react';

// Importes de listas
import { gruposHira, atualizaHira } from "../../javascript/listas/hiraganaListas";
import { atualizaKana, gruposKana } from "../../javascript/listas/katakanaListas";

// Importes de componentes
import ConfigCard from "../ConfigCard";
import BotaoMais from '../BotaoMais';
import AgrupaCards from '../AgrupaCards';

const IdeoGrupos = () => {

    // Declarações de States
    const [switchState, setSwitchState] = useState();
    const [tipoIdeo, setTipoIdeo] = useState('hiragana');

    // Declarações de Objetos
    // Objetos do hiragana
    let HiraGrupos = {
        nome: 'Hiragana',
        lista: gruposHira,
        altura: '0px'
    }

    // Objetos do katakana
    let KanaGrupos = {
        nome: 'Katakana',
        lista: gruposKana,
        altura: '0px'
    }

    let ideosGrupos;

    // Declarações de Funções
    const minimizarGrupo = (grupo) => {
        if (grupo.ref.current.style.height === '0px') {
            grupo.ref.current.style.height = grupo.altura;
        }
        else {
            grupo.ref.current.style.height = '0px';
        }
    }

    const pegarAltura = (grupo) => {
        if (grupo.altura === '0px') {
            grupo.altura = grupo.ref.current.offsetHeight + 'px';
            grupo.ref.current.style.height = grupo.ref.current.offsetHeight + 'px';
        }
    }

    const grupoSwitch = (grupo, index) => {
        setSwitchState(!switchState);
        grupo.lista[index].ativado = switchState;
        atualizaHira();
        atualizaKana();
    }

    if(tipoIdeo == 'hiragana'){
        ideosGrupos = [HiraGrupos];
    }

    return (
        <div className='largura-limitada'>
            {ideosGrupos.map((grupo) => (
                <div className='box-ideo-grupo' 
                onMouseEnter={() => {
                    pegarAltura(grupo);
                }}>
                
                    <BotaoMais 
                    texto={grupo.nome} 
                    minimizar={minimizarGrupo}
                    grupo={grupo}/>

                    <div className='box-grupo' ref={grupo.ref}>
                        {grupo.lista.map((item, index) => (
                            <AgrupaCards 
                            switch={grupoSwitch}
                            grupo={grupo} 
                            index={index} 
                            state={setSwitchState}
                            ativado={grupo.lista[index].ativado}>
                                {grupo.lista[index].grupo.map((item) => (
                                    <ConfigCard
                                    ideo={item[0]}
                                    roman={item[1]}/>
                                ))}
                            </AgrupaCards>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export {IdeoGrupos};
