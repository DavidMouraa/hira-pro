// Importes de estilos
import './styles.css';

// Importes de icones
import { Active, Desactive } from '../Icones';

// Importes de ferramentas
import { useRef, useState, useEffect } from 'react';

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
    const [alturaBas, setAlturaBas] = useState(0);
    const [alturaVar, setAlturaVar] = useState(0);
    const [alturaCom, setAlturaCom] = useState(0);
    const [ideoTipoIcone, setIdeoTipoIcon] = useState();
    const [seed, setSeed] = useState(true);

    // Declarações de Objetos
    // Grupos do Hiragana
    // Básico do Hiragana
    let objHiraBas = {
        nome: 'Básico',
        lista: gruposHira,
        ref: basicoRef,
        altura: alturaBas,
        setAltura: setAlturaBas
    }

    // Variantes do Hiragana
    let objHiraVar = {
        nome: 'Variantes',
        lista: gruposHiraVar,
        ref: varianteRef,
        altura: alturaVar,
        setAltura: setAlturaVar
    }

    // Combinações do Hiragana
    let objHiraCom = {
        nome: 'Combinações',
        lista: gruposHiraCom,
        ref: combinacoesRef,
        altura: alturaCom,
        setAltura: setAlturaCom
    }

    // Grupos do Katakana
    // Básico do Katakana
    let objKanaBas = {
        nome: 'Básico',
        lista: gruposKana,
        ref: basicoRef,
        altura: alturaBas,
        setAltura: setAlturaBas
    }

    // Variantes do Katakana
    let objKanaVar = {
        nome: 'Variantes',
        lista: gruposKanaVar,
        ref: varianteRef,
        altura: alturaVar,
        setAltura: setAlturaVar
    }

    // Combinações do Katakana
    let objKanaCom = {
        nome: 'Combinações',
        lista: gruposKanaCom,
        ref: combinacoesRef,
        altura: alturaCom,
        setAltura: setAlturaCom   
    }

    // Declaração da lista que vai guardar os Objetos Hiragana ou Katakana
    let ideosGrupos;

    // Declarações de Funções
    // Minimiza o grupo de ideogramas do Hiragana e Katakana, com base na altura atual
    const minimizarGrupo = (grupo) => {
        if (grupo.ref.current.style.height === '0px') {
            grupo.ref.current.style.height = grupo.altura + 'px';
        }
        else {
            grupo.ref.current.style.height = '0px';
        }
    }

    // Pega a altura dos grupos de ideogramas
    const pegarAltura = (grupos) => {
        for (let i = 0; i < grupos.length; i++) {
            if (grupos[i].altura === 0) {
                grupos[i].setAltura(grupos[i].ref.current.offsetHeight);
                grupos[i].ref.current.style.height = grupos[i].ref.current.offsetHeight + 'px';
            }
        }
    }

    // Altera o estado de ativado e desativado das listas dentro dos grupos de ideogramas
    const grupoSwitch = (grupo, index, status) => {
        grupo.lista[index].ativado = !status;
        atualizaHira();
        atualizaKana();
    }

    // Troca os tipos de ideogramas que vão aparecer nas configurações
    const trocaIdeoTipo = () => {
        if(props.ideoTipo === 'katakana'){
            props.setIdeoTipo('hiragana');
        }
        else {
            props.setIdeoTipo('katakana');
        }
        trocaTipoIcon();
    }

    // Troca o icone do botão que troca o tipo de ideograma
    const trocaTipoIcon = () => {
        if(props.ideoTipo === 'katakana') {
            setIdeoTipoIcon('カ');
        }
        else {
            setIdeoTipoIcon('ひ');
        }
    }

    // Reseta o componente
    const reset = () => {
        setSeed(!seed);
    }

    // Ativa e desativa todos os grupos do Hiragana e Katakana
    const mudaTudo = (val) => {
        console.log(ideosGrupos[0].lista);
        for(let i1 = 0; i1 < ideosGrupos.length; i1++) {
            for(let i2 = 0; i2 < ideosGrupos[i1].lista.length; i2++) {
                ideosGrupos[i1].lista[i2].ativado = val;
            }
        }
        atualizaHira();
        atualizaKana();
        reset();
    }

    // Altera o título e os grupos de ideogramas que estão sendo exibidos
    if(props.ideoTipo === 'hiragana') {
        ideosGrupos = [objHiraBas, objHiraVar, objHiraCom];
        props.setTitulo('Hiragana | ひらがな');
    }
    else {
        ideosGrupos = [objKanaBas, objKanaVar, objKanaCom];
        props.setTitulo('Katakana | カタカナ');
    }

    // Adiciona um evento de load ao body
    useEffect(() => {
        document.body.addEventListener('load', trocaTipoIcon());
    });

    return (
        <div id='ideo-grupo' className={`largura-limitada ${seed}`}>
            <div id='box-opcoes'>
                <button id='botao-ativa' className='botao-opcoes' 
                onClick={() => mudaTudo(true)}>
                    <Active/>
                </button>

                <button id='botao-troca-grupo' className='botao-opcoes' onClick={trocaIdeoTipo}>
                    {ideoTipoIcone}
                </button>

                <button id='botao-desativa' className='botao-opcoes' 
                onClick={() => mudaTudo(false)}>
                    <Desactive/>
                </button>
            </div>

            {ideosGrupos.map((grupo, index1) => (
                <div 
                key={`ideoGrupo${index1}`}
                className='box-ideo-grupo' 
                onMouseEnter={() => pegarAltura(ideosGrupos)}>
                    <BotaoMais 
                    key={`botao${index1}`}
                    texto={grupo.nome} 
                    minimizar={minimizarGrupo}
                    grupo={grupo}/>

                    <div 
                    key={`div${index1}`}
                    className='box-grupo' 
                    ref={grupo.ref}>
                        {grupo.lista.map((item, index2) => (
                            <AgrupaCards 
                            key = {`agrupa${index1 + index2}`}
                            switch={grupoSwitch}
                            grupo={grupo} 
                            index={index2}>
                                {grupo.lista[index2].grupo.map((item, index3) => (
                                    <ConfigCard
                                    key={`config${index1 + index2 + index3}`}
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
