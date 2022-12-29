import { hiragana } from "../listas/hiraganaListas";
import { katakana } from "../listas/katakanaListas";

const pegarIdeos = () => {
    let hiraKana = [hiragana, katakana];
    let lista = [];
    for (let i1 = 0; i1 < hiraKana.length; i1++) {
        for (let i2 = 0; i2 < hiraKana[i1].length; i2++) {
            for (let i3 = 0; i3 < hiraKana[i1][i2].length; i3++) {
                if (hiraKana[i1][i2][i3][0] !== '-') {
                    lista.push(hiraKana[i1][i2][i3][0]);
                }
            }
        }
    }
    return lista;
}

const pegarRoman = () => {
    let hiraKana = [hiragana, katakana];
    let lista = [];
    for (let i1 = 0; i1 < hiraKana.length; i1++) {
        for (let i2 = 0; i2 < hiraKana[i1].length; i2++) {
            for (let i3 = 0; i3 < hiraKana[i1][i2].length; i3++) {
                if (hiraKana[i1][i2][i3][1] !== '-') {
                    lista.push(hiraKana[i1][i2][i3][1]);
                }
            }
        }
    }
    return lista;
}

export { pegarIdeos, pegarRoman };
