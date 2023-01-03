// Importes de estilos
import './styles.css';

//Importes de ferramentas
import { useRef, useState } from 'react';

// Importes de listas
import { gruposHira } from "../../javascript/listas/hiraganaListas";
import { gruposKana } from "../../javascript/listas/katakanaListas";

// Importes de componentes
import ConfigCard from "../ConfigCard";
import BotaoMais from '../BotaoMais';

const IdeoGrupos = () => {
    // Declarações de Refs
    const hiraRef = useRef(null);
    const KanaRef = useRef(null);

    // Declarações de Objetos
    let HiraGrupos = {
        nome: 'Hiragana',
        ref: hiraRef,
        lista: gruposHira,
        altura: '0px'
    }

    let KanaGrupos = {
        nome: 'Katakana',
        ref: KanaRef,
        lista: gruposKana,
        altura: '0px'
    }

    // Declarações de Listas
    let ideosGrupos = [HiraGrupos, KanaGrupos];

    // Declarações de Funções
    const minimizarGrupo = (grupo) => {
        if (grupo.ref.current.style.height === '0px') {
            grupo.ref.current.style.height = grupo.altura;
        }
        else {
            grupo.ref.current.style.height = '0px';
        }
        console.log(grupo.ref.current.style.height, grupo.ref.current.offsetHeight, grupo.altura)
    }

    const pegarAltura = (grupo) => {
        if (grupo.altura === '0px') {
            grupo.altura = grupo.ref.current.offsetHeight + 'px';
            grupo.ref.current.style.height = grupo.ref.current.offsetHeight + 'px';
            console.log(grupo.ref.current.style.height, grupo.altura);
        }
    }

    const removeIdeoFazio = () => {
        
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
                            <div>
                                {grupo.lista[index].grupo.map((item) => (
                                    <ConfigCard
                                    ideo={item[0]} 
                                    roman={item[1]}/>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export {IdeoGrupos};
