// Katakana basico
let objAKana = {
    ativado: false,
    grupo: [
        ['ア', 'a'],
        ['イ', 'i'],
        ['ウ', 'u'],
        ['エ', 'e'],
        ['オ', 'o']
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
        ['', ''],
        ['ユ', 'yu'],
        ['', ''],
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
    grupo: [
        ['ワ', 'wa'],
        ['', ''],
        ['ヲ', 'wo'],
        ['', ''],
        ['ン', 'n']
    ]
}

// Katakana variantes
let objKKanaVar = {
    ativado: false,
    grupo: [
        ['ガ', 'ga'],
        ['ギ', 'gi'],
        ['グ', 'gu'],
        ['ゲ', 'ge'],
        ['ゴ', 'go']
    ]
}

let objZKanaVar = {
    ativado: false,
    grupo: [
        ['ザ', 'za'],
        ['ジ', 'ji'],
        ['ズ', 'zu'],
        ['ゼ', 'ze'],
        ['ゾ', 'zo']
    ]
}

let objDKanaVar = {
    ativado: false,
    grupo: [
        ['ダ', 'da'],
        ['ヂ', 'ji'],
        ['ヅ', 'zu'],
        ['デ', 'de'],
        ['ド', 'do']
    ]
}

let objBKanaVar = {
    ativado: false,
    grupo: [
        ['バ', 'ba'],
        ['ビ', 'bi'],
        ['ブ', 'bu'],
        ['ベ', 'be'],
        ['ボ', 'bo']
    ]
}

let objPKanaVar = {
    ativado: false,
    grupo: [
        ['パ', 'pa'],
        ['ピ', 'pi'],
        ['プ', 'pu'],
        ['ペ', 'pe'],
        ['ポ', 'po']
    ]
}

// Katakana Combinações
let objPyKanaCom = {
    ativado: false,
    grupo:  [
        ['ピャ', 'pya'],
        ['ピュ', 'pyu'],
        ['ピョ', 'pyo']
    ]
}

let objByKanaCom = {
    ativado: false,
    grupo:  [
        ['ビャ', 'bya'],
        ['ビュ', 'byu'],
        ['ビョ', 'byo']
    ]
}

let objJyKanaCom = {
    ativado: false,
    grupo:  [
        ['ジャ', 'ja'],
        ['ジュ', 'ju'],
        ['ジョ', 'jo']
    ]
}

let objGyKanaCom = {
    ativado: false,
    grupo:  [
        ['ギャ', 'gya'],
        ['ギュ', 'gyu'],
        ['ギョ', 'gyo']
    ]
}

let objRyKanaCom = {
    ativado: false,
    grupo:  [
        ['リャ', 'rya'],
        ['リュ', 'ryu'],
        ['リョ', 'ryo']
    ]
}

let objMyKanaCom = {
    ativado: false,
    grupo:  [
        ['ミャ', 'mya'],
        ['ミュ', 'myu'],
        ['ミョ', 'myo']
    ]
}

let objHyKanaCom = {
    ativado: false,
    grupo:  [
        ['ヒャ', 'hya'],
        ['ヒュ', 'hyu'],
        ['ヒョ', 'hyo']
    ]
}

let objNyKanaCom = {
    ativado: false,
    grupo:  [
        ['ニャ', 'nya'],
        ['ニュ', 'nyu'],
        ['ニョ', 'nyo']
    ]
}

let objCyKanaCom = {
    ativado: false,
    grupo:  [
        ['チャ', 'cha'],
        ['チュ', 'chu'],
        ['チョ', 'cho']
    ]
}

let objSyKanaCom = {
    ativado: false,
    grupo:  [
        ['シャ', 'sha'],
        ['シュ', 'shu'],
        ['ショ', 'sho']
    ]
}

let objKykanaCom = {
    ativado: false,
    grupo:  [
        ['キャ', 'kya'],
        ['キュ', 'kyu'],
        ['キョ', 'kyo']
    ]
}

let gruposKana = [objAKana, objKKana, objSKana, objTKana, objNKana, objHKana, objMKana, objYKana, objRKana, objWKana];

let gruposKanaVar = [objKKanaVar, objZKanaVar, objDKanaVar, objBKanaVar, objPKanaVar];

let gruposKanaCom = [objPyKanaCom, objByKanaCom, objJyKanaCom, objGyKanaCom, objRyKanaCom, objMyKanaCom, objHyKanaCom, objNyKanaCom, objCyKanaCom, objSyKanaCom, objKykanaCom]

let todosKana= [gruposKana, gruposKanaVar, gruposKanaCom];

let katakana = [];

const atualizaKana = () => {
    katakana = [];
    for(let i1 = 0; i1 < todosKana.length; i1++) {
        for(let i2 = 0; i2 < todosKana[i1].length; i2++)
        if (todosKana[i1][i2].ativado) {
            katakana.push(todosKana[i1][i2].grupo);
        }
    }
    console.log(katakana)
}

export {katakana, gruposKana, gruposKanaVar, gruposKanaCom, atualizaKana};
