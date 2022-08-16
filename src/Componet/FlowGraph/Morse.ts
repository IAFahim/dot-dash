import {Edge, Node} from "react-flow-renderer";

export default class Morse {
    mosre = {
        "E": ".",
        "T": "-",

        "I": "..",
        "A": ".-",
        "N": "-.",

        "M": "--",
        "S": "...",
        "U": "..-",
        "R": ".-.",

        "W": ".--",
        "D": "-..",

        "K": "-.-",
        "G": "--.",
        "O": "---",

        "H": "....",
        "V": "...-",
        "F": "..-.",

        "L": ".-..",

        "P": ".--.",
        "J": ".---",

        "B": "-...",
        "X": "-..-",

        "C": "-.-.",
        "Y": "-.--",
        "Z": "--..",
        "Q": "--.-",

        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----",

        " ": "/",
        ".": ".-.-.-",
        ",": "--..--",
        ":": "---...",
        "?": "..--..",
        "'": ".----.",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "=": "-...-"
    };
    innerWidths = 1920;
    defaultNodes = [{id: '1', data: {label: 'Morse Code'}, type: "input", position: {x: this.innerWidths / 2 - 75, y: 0}, style: {width: 100}}] as Node[];
    defaultEdges = []as Edge[] ;
    arr = 'ETIANMSURWDKGOHVF L PJBXCYZQ  54 3   2  +    16=/     7   8 90            ?_    "  .    @   \'  -        ;!       ,    :       '

    constructor() {
        let l = 2, mx = Math.ceil(Math.log(this.arr.length));

        for (let i = 0, c = 1, odd = 1, x = 0, y = 100; i < 62; i++) {
            x = (odd * this.innerWidths) / (l << 1)
            let ch = this.arr[i], skip = ch === ' ';
            let cr=i+2;
            let node = {
                id: cr + "", data: {label: skip ? "" : ch}, position: {x: x - 14, y: y},
                style: {width: 28}
            } as Node;

            let from=Math.floor(cr/2)+'', to=cr+"";
            let edge = {
                id: 'e'+from+"-"+to, source: from, target: to,
                type: 'smoothstep', animated: i%2===0
            } as Edge;
            if (l === c) {
                odd = 1;
                l = l << 1;
                y = y + 100;
                x = 0;
                c = 0;
            } else {
                odd += 2;
            }
            this.defaultNodes.push(node);
            this.defaultEdges.push(edge);
            c++;
        }
    }
}

new Morse();