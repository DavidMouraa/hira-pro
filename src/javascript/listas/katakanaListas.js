let katakana = [];

let objAKana = {
    ativado: false,
    grupo: [
        ['ア', 'a'],
        ['イ', 'i'],
        ['ウ', 'u'],
        ['エ', 'e'],
        ['オ', 'u']
    ]
}

let objKKana = {
    ativado: false,
    grupo: [
        ['カ', 'ka'],
        ['キ', 'ki'],
        ['ク', 'ku'],
        ['ケ', 'ke'],
        ['コ', 'ko']
    ]
}

let objSKana = {
    ativado: false,
    grupo: [
        ['サ', 'sa'],
        ['シ', 'shi'],
        ['ス', 'su'],
        ['セ', 'se'],
        ['ソ', 'so']
    ]
}

let objTKana = {
    ativado: false,
    grupo: [
        ['タ', 'ta'],
        ['チ', 'chi'],
        ['ツ', 'tsu'],
        ['テ', 'te'],
        ['ト', 'to']
    ]
}

let objNKana = {
    ativado: false,
    grupo: [
        ['ナ', 'na'],
        ['ニ', 'ni'],
        ['ヌ', 'nu'],
        ['ネ', 'ne'],
        ['ノ', 'no']
    ]
}

let objHKana = {
    ativado: false,
    grupo: [
        ['ハ', 'ha'],
        ['ヒ', 'hi'],
        ['フ', 'fu'],
        ['ヘ', 'he'],
        ['ホ', 'ho']
    ]
}

let objMKana = {
    ativado: false,
    grupo: [
        ['マ', 'ma'],
        ['ミ', 'mi'],
        ['ム', 'mu'],
        ['メ', 'me'],
        ['モ', 'mo']
    ]
}

let objYKana = {
    ativado: false,
    grupo: [
        ['ヤ', 'ya'],
        ['-', '-'],
        ['ユ', 'yu'],
        ['-', '-'],
        ['ヨ', 'yo']
    ]
}

let objRKana = {
    ativado: false,
    grupo: [
        ['ラ', 'ra'],
        ['リ', 'ri'],
        ['ル', 'ru'],
        ['レ', 're'],
        ['ロ', 'ro']
    ]
}

let objWKana = {
    ativado: false,
    grupo:  [
        ['ワ', 'wa'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
        ['ヲ', 'wo']
    ]
}

let objnKana = {
    ativado: false,
    grupo:  [
        ['わ', 'n'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-']
    ]
}

let gruposKana = [objAKana, objKKana, objSKana, objTKana, objNKana, objHKana, objMKana, objYKana, objRKana, objWKana, objnKana];

for (let i = 0; i < gruposKana.length; i++) {
    if (gruposKana[i].ativado) {
        katakana.push(gruposKana[i].grupo);
    }
}

export {katakana, gruposKana};
