let hiragana = [];

let objAHira = {
    ativado: false,
    grupo: [
        ['あ', 'a'],
        ['い', 'i'],
        ['う', 'u'],
        ['え', 'e'],
        ['お', 'u']
    ]
}

let objKHira = {
    ativado: false,
    grupo: [
        ['か', 'ka'],
        ['き', 'ki'],
        ['く', 'ku'],
        ['け', 'ke'],
        ['こ', 'ko']
    ]
}

let objSHira = {
    ativado: false,
    grupo: [
        ['さ', 'sa'],
        ['し', 'shi'],
        ['す', 'su'],
        ['せ', 'se'],
        ['そ', 'so']
    ]
}

let objTHira = {
    ativado: false,
    grupo: [
        ['た', 'ta'],
        ['ち', 'chi'],
        ['つ', 'tsu'],
        ['て', 'te'],
        ['と', 'to']
    ]
}

let objNHira = {
    ativado: false,
    grupo: [
        ['な', 'na'],
        ['に', 'ni'],
        ['ぬ', 'nu'],
        ['ね', 'ne'],
        ['の', 'no']
    ]
}

let objHHira = {
    ativado: false,
    grupo: [
        ['は', 'ha'],
        ['ひ', 'hi'],
        ['ふ', 'fu'],
        ['へ', 'he'],
        ['ほ', 'ho']
    ]
}

let objMHira = {
    ativado: false,
    grupo: [
        ['ま', 'ma'],
        ['み', 'mi'],
        ['む', 'mu'],
        ['め', 'me'],
        ['も', 'mo']
    ]
}

let objYHira = {
    ativado: false,
    grupo: [
        ['や', 'ya'],
        ['-', '-'],
        ['ゆ', 'yu'],
        ['-', '-'],
        ['よ', 'yo']
    ]
}

let objRHira = {
    ativado: false,
    grupo: [
        ['ら', 'ra'],
        ['り', 'ri'],
        ['る', 'ru'],
        ['れ', 're'],
        ['ろ', 'ro']
    ]
}

let objWHira = {
    ativado: false,
    grupo:  [
        ['わ', 'wa'],
        ['-', '-'],
        ['を', 'wo'],
        ['-', '-'],
        ['ん', 'n']
    ]
}

let gruposHira = [objAHira, objKHira, objSHira, objTHira, objNHira, objHHira, objMHira, objYHira, objRHira, objWHira];

for (let i = 0; i < gruposHira.length; i++) {
    if (gruposHira[i].ativado) {
        hiragana.push(gruposHira[i].grupo);
    }
}

export {hiragana};
