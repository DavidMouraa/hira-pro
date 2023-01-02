import './styles.css';

import { gruposHira } from '../../javascript/listas/hiraganaListas';

import ConfigCard from '../ConfigCard';
import { useRef } from 'react';

const HiraganaConfig = () => {
    const scCardsConfig = useRef(null);

    return (
        <section id="sc-hiragana-config" ref={scCardsConfig}>
            {gruposHira.map((item, index) => (
                <div className='box-grupo'>
                    {gruposHira[index].grupo.map((item) => (
                        <ConfigCard ideo={item[0]} roman={item[1]}/>
                    ))}
                </div>
            ))}
        </section>
    );
}

export default HiraganaConfig;
