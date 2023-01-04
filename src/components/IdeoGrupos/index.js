// Importes de estilos
import './styles.css';

// Importes de ferramentas
import { useRef, useState } from 'react';

// Importes de listas
import { gruposHira, gruposHiraVar, gruposHiraCom, atualizaHira } from "../../javascript/listas/hiraganaListas";
import { gruposKana, gruposKanaVar, gruposKanaCom, atualizaKana } from "../../javascript/listas/katakanaListas";

// Importes de componentes
import ConfigCard from "../ConfigCard";
import BotaoMais from '../BotaoMais';
import AgrupaCards from '../AgrupaCards';

const IdeoGrupos = (props) => {
    // Declarações de Refs
    const basicoRef = useRef(null);
    const varianteRef = useRef(null);
    const combinacoesRef = useRef(null);

    // Declarações de States
    const [switchState, setSwitchState] = useState();

    // Declarações de Objetos
    // Objetos do hiragana
    let objHiraBas = {
        nome: 'Básico',
        lista: gruposHira,
        ref: basicoRef,
        altura: '0px'
    }

    let objHiraVar = {
        nome: 'Variantes',
        lista: gruposHiraVar,
        ref: varianteRef,
        altura: '0px'
    }

    let objHiraCom = {
        nome: 'Combinações',
        lista: gruposHiraCom,
        ref: combinacoesRef,
        altura: '0px'
    }

    // Objetos do katakana
    let objKanaBas = {
        nome: 'Básico',
        lista: gruposKana,
        ref: basicoRef,
        altura: '0px'
    }

    let objKanaVar = {
        nome: 'Variantes',
        lista: gruposKanaVar,
        ref: varianteRef,
        altura: '0px'
    }

    let objKanaCom = {
        nome: 'Combinações',
        lista: gruposKanaCom,
        ref: combinacoesRef,
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

    if(props.ideoTipo === 'hiragana') {
        ideosGrupos = [objHiraBas, objHiraVar, objHiraCom];
        props.setTitulo('Hiragana | ひらがな');
    }
    else {
        ideosGrupos = [objKanaBas, objKanaVar, objKanaCom];
        props.setTitulo('Katakana | カタカナ');
    }

    return (
        <div id='ideo-grupo' className='largura-limitada'>
            {ideosGrupos.map((grupo) => (
                <div className='box-ideo-grupo' onMouseEnter={() => pegarAltura(grupo)}>
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
