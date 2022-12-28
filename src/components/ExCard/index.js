// Importes de estilos
import './styles.css';

// Importes de listas
import { hiragana } from '../../javascript/listas/hiraganaListas';

// Importes de Ferramentas
import { useState, useEffect } from 'react';

const ExCard = () => {
    let listaIdeo;

    const [cardIdeo, setCardIdeo] = useState(0);

    useEffect(() => {
        document.body.addEventListener('load', trocaIdeo());
    });

    const arrumarListas = () => {
        let lista = [];
        for (let i = 0; i < hiragana.length; i++) {
            for (let c = 0; c < hiragana[i].length; c++) {
                lista.push(hiragana[i][c][0]);
            }
        }
        return lista;
    }
    listaIdeo = arrumarListas();

    const trocaIdeo = () => {
        let value = Math.floor(Math.random() * listaIdeo.length);
        setCardIdeo(value);
    }

    return (
        <section id='sc-card'>
            <div id='box-ex-card'>
                <div>
                    <div id="ex-ideograma" className='ex-card'>{listaIdeo[cardIdeo]}</div>
                </div>
                <input id='ex-resposta' type='text' placeholder='Digite a Resposta' autoFocus/>
                <button id='ex-check' onClick={trocaIdeo}>Check</button>
            </div>
        </section>
    );
}

export default ExCard;
