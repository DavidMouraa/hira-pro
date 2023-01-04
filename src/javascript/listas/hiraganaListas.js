// Hiragana basico
let objAHira = {
    ativado: false,
    grupo: [
        ['あ', 'a'],
        ['い', 'i'],
        ['う', 'u'],
        ['え', 'e'],
        ['お', 'o']
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
        ['', ''],
        ['ゆ', 'yu'],
        ['', ''],
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
        ['', ''],
        ['を', 'wo'],
        ['', ''],
        ['ん', 'n']
    ]
}

// Hiragana variantes
let objGHiraVar = {
    ativado: false,
    grupo:  [
        ['が', 'ga'],
        ['ぎ', 'gi'],
        ['ぐ', 'gu'],
        ['げ', 'ge'],
        ['ご', 'go']
    ]
}

let objZHiraVar = {
    ativado: false,
    grupo:  [
        ['ざ', 'za'],
        ['じ', 'ji'],
        ['ず', 'zu'],
        ['ぜ', 'ze'],
        ['ぞ', 'zo']
    ]
}

let objDHiraVar = {
    ativado: false,
    grupo: [
        ['だ', 'da'],
        ['ぢ', 'ji'],
        ['づ', 'zu'],
        ['で', 'de'],
        ['ど', 'do']
    ]
}

let objBHiraVar = {
    ativado: false,
    grupo: [
        ['ば', 'ba'],
        ['び', 'bi'],
        ['ぶ', 'bu'],
        ['べ', 'be'],
        ['ぼ', 'bo']
    ]
}

let objPHiraVar = {
    ativado: false,
    grupo:  [
        ['ぱ', 'pa'],
        ['ぴ', 'pi'],
        ['ぷ', 'pu'],
        ['ぺ', 'pe'],
        ['ぽ', 'po']
    ]
}

//Hiragana combinações
let objPyHiraCom = {
    ativado: false,
    grupo:  [
        ['ぴゃ', 'pya'],
        ['ぴゅ', 'pyu'],
        ['ぴょ', 'pyo']
    ]
}

let objByHiraCom = {
    ativado: false,
    grupo:  [
        ['びゃ', 'bya'],
        ['びゅ', 'byu'],
        ['びょ', 'byo']
    ]
}

let objJyHiraCom = {
    ativado: false,
    grupo:  [
        ['じゃ', 'ja'],
        ['じゅ', 'ju'],
        ['じょ', 'jo']
    ]
}

let objGyHiraCom = {
    ativado: false,
    grupo:  [
        ['ぎゃ', 'gya'],
        ['ぎゅ', 'gyu'],
        ['ぎょ', 'gyo']
    ]
}

let objRyHiraCom = {
    ativado: false,
    grupo:  [
        ['りゃ', 'rya'],
        ['りゅ', 'ryu'],
        ['りょ', 'ryo']
    ]
}

let objMyHiraCom = {
    ativado: false,
    grupo:  [
        ['みゃ', 'mya'],
        ['みゅ', 'myu'],
        ['みょ', 'myo']
    ]
}

let objHyHiraCom = {
    ativado: false,
    grupo:  [
        ['ひゃ', 'hya'],
        ['ひゅ', 'hyu'],
        ['ひょ', 'hyo']
    ]
}

let objNyHiraCom = {
    ativado: false,
    grupo:  [
        ['にゃ', 'nya'],
        ['にゅ', 'nyu'],
        ['にょ', 'nyo']
    ]
}

let objCyHiraCom = {
    ativado: false,
    grupo:  [
        ['ちゃ', 'cha'],
        ['ちゅ', 'chu'],
        ['ちょ', 'cho']
    ]
}

let objSyHiraCom = {
    ativado: false,
    grupo:  [
        ['しゃ', 'sha'],
        ['しゅ', 'shu'],
        ['しょ', 'sho']
    ]
}

let objKyHiraCom = {
    ativado: false,
    grupo:  [
        ['きゃ', 'kya'],
        ['きゅ', 'kyu'],
        ['きょ', 'kyo']
    ]
}

// Declarando as listas
let gruposHira = [objAHira, objKHira, objSHira, objTHira, objNHira, objHHira, objMHira, objYHira, objRHira, objWHira];

let gruposHiraVar = [objGHiraVar, objZHiraVar, objDHiraVar, objBHiraVar, objPHiraVar];

let gruposHiraCom = [objPyHiraCom, objByHiraCom, objJyHiraCom, objGyHiraCom, objRyHiraCom, objMyHiraCom, objHyHiraCom, objNyHiraCom, objCyHiraCom, objSyHiraCom, objKyHiraCom]

let todosHiras= [gruposHira, gruposHiraVar, gruposHiraCom];

let hiragana = [];

// Função para atualizar a lista "Hiragana"
const atualizaHira = () => {
    hiragana = [];
    for(let i1 = 0; i1 < todosHiras.length; i1++) {
        for(let i2 = 0; i2 < todosHiras[i1].length; i2++)
        if (todosHiras[i1][i2].ativado) {
            hiragana.push(todosHiras[i1][i2].grupo);
        }
    }
}

export {hiragana, gruposHira, gruposHiraVar, gruposHiraCom, atualizaHira};
