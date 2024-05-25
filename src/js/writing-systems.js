class Ideogram {
    constructor(ideogram, romanji) {
        this.ideogram = ideogram
        this.romanji = romanji
        this.selection = false
    }
}

const writingSystemsObj = {
    hiragana: {
        basics: {
            setA: [
                new Ideogram("あ", "a"),
                new Ideogram("い", "i"),
                new Ideogram("う", "u"),
                new Ideogram("え", "e"),
                new Ideogram("お", "o"),
            ],
            setK: [
                new Ideogram("か", "ka"),
                new Ideogram("き", "ki"),
                new Ideogram("く", "ku"),
                new Ideogram("け", "ke"),
                new Ideogram("こ", "ko"),
            ],
            setS: [
                new Ideogram("さ", "sa"),
                new Ideogram("し", "shi"),
                new Ideogram("す", "su"),
                new Ideogram("せ", "se"),
                new Ideogram("そ", "so"),
            ],
            setT: [
                new Ideogram("た", "ta"),
                new Ideogram("ち", "chi"),
                new Ideogram("つ", "tsu"),
                new Ideogram("て", "te"),
                new Ideogram("と", "to"),
            ],
            setN: [
                new Ideogram("な", "na"),
                new Ideogram("に", "ni"),
                new Ideogram("ぬ", "nu"),
                new Ideogram("ね", "ne"),
                new Ideogram("の", "no"),
            ],
            setH: [
                new Ideogram("は", "ha"),
                new Ideogram("ひ", "hi"),
                new Ideogram("ふ", "fu"),
                new Ideogram("へ", "he"),
                new Ideogram("ほ", "ho"),
            ],
            setM: [
                new Ideogram("ま", "ma"),
                new Ideogram("み", "mi"),
                new Ideogram("む", "mu"),
                new Ideogram("め", "me"),
                new Ideogram("も", "mo"),
            ],
            setY: [
                new Ideogram("や", "ya"),
                new Ideogram("", ""),
                new Ideogram("ゆ", "yu"),
                new Ideogram("", ""),
                new Ideogram("よ", "yo"),
            ],
            setR: [
                new Ideogram("ら", "ra"),
                new Ideogram("り", "ri"),
                new Ideogram("る", "ru"),
                new Ideogram("れ", "re"),
                new Ideogram("ろ", "ro"),
            ],
            setW: [
                new Ideogram("わ", "wa"),
                new Ideogram("", ""),
                new Ideogram("を", "wo"),
                new Ideogram("", ""),
                new Ideogram("ん", "n"),
            ]
        },
        variants: {
            setG: [
                new Ideogram("が", "ga"),
                new Ideogram("ぎ", "gi"),
                new Ideogram("ぐ", "gu"),
                new Ideogram("げ", "ge"),
                new Ideogram("ご", "go"),
            ],
            setZ: [
                new Ideogram("ざ", "za"),
                new Ideogram("じ", "ji"),
                new Ideogram("ず", "zu"),
                new Ideogram("ぜ", "ze"),
                new Ideogram("ぞ", "zo"),
            ],
            setD: [
                new Ideogram("だ", "da"),
                new Ideogram("ぢ", "ji"),
                new Ideogram("づ", "zu"),
                new Ideogram("で", "de"),
                new Ideogram("ど", "do"),
            ],
            setB: [
                new Ideogram("ば", "ba"),
                new Ideogram("び", "bi"),
                new Ideogram("ぶ", "bu"),
                new Ideogram("べ", "be"),
                new Ideogram("ぼ", "bo"),
            ],
            setP: [
                new Ideogram("ぱ", "pa"),
                new Ideogram("ぴ", "pi"),
                new Ideogram("ぷ", "pu"),
                new Ideogram("ぺ", "pe"),
                new Ideogram("ぽ", "po"),
            ]
        },
        combinations: {
            setK: [
                new Ideogram("きゃ", "kya"),
                new Ideogram("きゅ", "kyu"),
                new Ideogram("きょ", "kyo"),
            ],
            setS: [
                new Ideogram("しゃ", "sha"),
                new Ideogram("しゅ", "shu"),
                new Ideogram("しょ", "sho"),
            ],
            setC: [
                new Ideogram("ちゃ", "cha"),
                new Ideogram("ちゅ", "chu"),
                new Ideogram("ちょ", "cho"),
            ],
            setN: [
                new Ideogram("にゃ", "nya"),
                new Ideogram("にゅ", "nyu"),
                new Ideogram("にょ", "nyo"),
            ],
            setH: [
                new Ideogram("ひゃ", "hya"),
                new Ideogram("ひゅ", "hyu"),
                new Ideogram("ひょ", "hyo"),
            ],
            setM: [
                new Ideogram("みゃ", "mya"),
                new Ideogram("みゅ", "myu"),
                new Ideogram("みょ", "myo"),
            ],
            setR: [
                new Ideogram("りゃ", "rya"),
                new Ideogram("りゅ", "ryu"),
                new Ideogram("りょ", "ryo"),
            ],
            setG: [
                new Ideogram("ぎゃ", "gya"),
                new Ideogram("ぎゅ", "gyu"),
                new Ideogram("ぎょ", "gyo"),
            ],
            setJ: [
                new Ideogram("じゃ", "ja"),
                new Ideogram("じゅ", "ju"),
                new Ideogram("じょ", "jo"),
            ],
            setB: [
                new Ideogram("びゃ", "bya"),
                new Ideogram("びゅ", "byu"),
                new Ideogram("びょ", "byo"),
            ],
            setP: [
                new Ideogram("ぴゃ", "pya"),
                new Ideogram("ぴゅ", "pyu"),
                new Ideogram("ぴょ", "pyo"),
            ]
        }
    },
    katakana: {
        basics: {
            setA: [
                new Ideogram("ア", "a"),
                new Ideogram("イ", "i"),
                new Ideogram("ウ", "u"),
                new Ideogram("エ", "e"),
                new Ideogram("オ", "o"),
            ],
            setK: [
                new Ideogram("カ", "ka"),
                new Ideogram("キ", "ki"),
                new Ideogram("ク", "ku"),
                new Ideogram("ケ", "ke"),
                new Ideogram("コ", "ko"),
            ],
            setS: [
                new Ideogram("サ", "sa"),
                new Ideogram("シ", "shi"),
                new Ideogram("ス", "su"),
                new Ideogram("セ", "se"),
                new Ideogram("ソ", "so"),
            ],
            setT: [
                new Ideogram("タ", "ta"),
                new Ideogram("チ", "chi"),
                new Ideogram("ツ", "tsu"),
                new Ideogram("テ", "te"),
                new Ideogram("ト", "to"),
            ],
            setN: [
                new Ideogram("ナ", "na"),
                new Ideogram("ニ", "ni"),
                new Ideogram("ヌ", "nu"),
                new Ideogram("ネ", "ne"),
                new Ideogram("ノ", "no"),
            ],
            setH: [
                new Ideogram("ハ", "ha"),
                new Ideogram("ヒ", "hi"),
                new Ideogram("フ", "fu"),
                new Ideogram("ヘ", "he"),
                new Ideogram("ホ", "ho"),
            ],
            setM: [
                new Ideogram("マ", "ma"),
                new Ideogram("ミ", "mi"),
                new Ideogram("ム", "mu"),
                new Ideogram("メ", "me"),
                new Ideogram("モ", "mo"),
            ],
            setY: [
                new Ideogram("ヤ", "ya"),
                new Ideogram("", ""),
                new Ideogram("ユ", "yu"),
                new Ideogram("", ""),
                new Ideogram("ヨ", "yo"),
            ],
            setR: [
                new Ideogram("ラ", "ra"),
                new Ideogram("リ", "ri"),
                new Ideogram("ル", "ru"),
                new Ideogram("レ", "re"),
                new Ideogram("ロ", "ro"),
            ],
            setW: [
                new Ideogram("ワ", "wa"),
                new Ideogram("", ""),
                new Ideogram("ヲ", "wo"),
                new Ideogram("", ""),
                new Ideogram("ン", "n"),
            ]
        },
        variants: {
            setG: [
                new Ideogram("ガ", "ga"),
                new Ideogram("ギ", "gi"),
                new Ideogram("グ", "gu"),
                new Ideogram("ゲ", "ge"),
                new Ideogram("ゴ", "go"),
            ],
            setZ: [
                new Ideogram("ザ", "za"),
                new Ideogram("ジ", "ji"),
                new Ideogram("ズ", "zu"),
                new Ideogram("ゼ", "ze"),
                new Ideogram("ゾ", "zo"),
            ],
            setD: [
                new Ideogram("ダ", "da"),
                new Ideogram("ヂ", "ji"),
                new Ideogram("ヅ", "zu"),
                new Ideogram("デ", "de"),
                new Ideogram("ド", "do"),
            ],
            setB: [
                new Ideogram("バ", "ba"),
                new Ideogram("ビ", "bi"),
                new Ideogram("ブ", "bu"),
                new Ideogram("ベ", "be"),
                new Ideogram("ボ", "bo"),
            ],
            setP: [
                new Ideogram("パ", "pa"),
                new Ideogram("ピ", "pi"),
                new Ideogram("プ", "pu"),
                new Ideogram("ペ", "pe"),
                new Ideogram("ポ", "po"),
            ]
        },
        combinations: {
            setK: [
                new Ideogram("キャ", "kya"),
                new Ideogram("キュ", "kyu"),
                new Ideogram("キョ", "kyo"),
            ],
            setS: [
                new Ideogram("シャ", "sha"),
                new Ideogram("シュ", "shu"),
                new Ideogram("ショ", "sho"),
            ],
            setC: [
                new Ideogram("チャ", "cha"),
                new Ideogram("チュ", "chu"),
                new Ideogram("チョ", "cho"),
            ],
            setN: [
                new Ideogram("ニャ", "nya"),
                new Ideogram("ニュ", "nyu"),
                new Ideogram("ニョ", "nyo"),
            ],
            setH: [
                new Ideogram("ヒャ", "hya"),
                new Ideogram("ヒュ", "hyu"),
                new Ideogram("ヒョ", "hyo"),
            ],
            setM: [
                new Ideogram("ミャ", "mya"),
                new Ideogram("ミュ", "myu"),
                new Ideogram("ミョ", "myo"),
            ],
            setR: [
                new Ideogram("リャ", "rya"),
                new Ideogram("リュ", "ryu"),
                new Ideogram("リョ", "ryo"),
            ],
            setG: [
                new Ideogram("ギャ", "gya"),
                new Ideogram("ギュ", "gyu"),
                new Ideogram("ギョ", "gyo"),
            ],
            setJ: [
                new Ideogram("ジャ", "ja"),
                new Ideogram("ジュ", "ju"),
                new Ideogram("ジョ", "jo"),
            ],
            setB: [
                new Ideogram("ビャ", "bya"),
                new Ideogram("ビュ", "byu"),
                new Ideogram("ビョ", "byo"),
            ],
            setP: [
                new Ideogram("ピャ", "pya"),
                new Ideogram("ピュ", "pyu"),
                new Ideogram("ピョ", "pyo"),
            ]
        }
    }
}

export default writingSystemsObj