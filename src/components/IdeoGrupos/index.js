// Importes de estilos
import './styles.css';

// Importes de ferramentas
import { useEffect, useRef, useState } from 'react';

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

    const [alturaBas, setAlturaBas] = useState(0);
    const [alturaVar, setAlturaVar] = useState(0);
    const [alturaCom, setAlturaCom] = useState(0);

    // Declarações de Objetos
    // Objetos do hiragana
    let objHiraBas = {
        nome: 'Básico',
        lista: gruposHira,
        ref: basicoRef,
        altura: alturaBas,
        setAltura: setAlturaBas
    }

    let objHiraVar = {
        nome: 'Variantes',
        lista: gruposHiraVar,
        ref: varianteRef,
        altura: alturaVar,
        setAltura: setAlturaVar
    }

    let objHiraCom = {
        nome: 'Combinações',
        lista: gruposHiraCom,
        ref: combinacoesRef,
        altura: alturaCom,
        setAltura: setAlturaCom
    }

    // Objetos do katakana
    let objKanaBas = {
        nome: 'Básico',
        lista: gruposKana,
        ref: basicoRef,
        altura: alturaBas,
        setAltura: setAlturaBas
    }

    let objKanaVar = {
        nome: 'Variantes',
        lista: gruposKanaVar,
        ref: varianteRef,
        altura: alturaVar,
        setAltura: setAlturaVar
    }

    let objKanaCom = {
        nome: 'Combinações',
        lista: gruposKanaCom,
        ref: combinacoesRef,
        altura: alturaCom,
        setAltura: setAlturaCom   
    }

    let ideosGrupos;

    // Declarações de Funções
    const minimizarGrupo = (grupo) => {
        if (grupo.ref.current.style.height === '0px') {
            grupo.ref.current.style.height = grupo.altura + 'px';
        }
        else {
            grupo.ref.current.style.height = '0px';
        }
    }

    const pegarAltura = (grupos) => {
        for (let i = 0; i < grupos.length; i++) {
            if (grupos[i].altura === 0) {
                grupos[i].setAltura(grupos[i].ref.current.offsetHeight);
                grupos[i].ref.current.style.height = grupos[i].ref.current.offsetHeight + 'px';
            }
        }
    }

    const grupoSwitch = (grupo, index, status) => {
        console.log(!status);
        grupo.lista[index].ativado = !status;
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
                <div className='box-ideo-grupo' onMouseEnter={() => pegarAltura(ideosGrupos)}>
                    <BotaoMais 
                    texto={grupo.nome} 
                    minimizar={minimizarGrupo}
                    grupo={grupo}/>

                    <div className='box-grupo' ref={grupo.ref}>
                        {grupo.lista.map((item, index) => (
                            <AgrupaCards 
                            switch={grupoSwitch}
                            grupo={grupo} 
                            index={index}>
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
