// credit: https://zetcode.com/javascript/lodash/ 
const _ = require("lodash");

//this was very loosely based on Nat Tuck's CS4550 Lecture 04 Code
// https://github.com/NatTuck/scratch-2021-01.git
export function code_view(secret, guesses) {
    let code = [];
    let aCount = 0;
    let bCount = 0;
    let secretSplit = secret.split('');
    let result = "";

    for (let i = 0; i < 4; i++) {
        if (guesses.length > 0) {
            let gg = guesses[guesses.length - 1].split('');
            if (secretSplit.includes(gg[i])) {
                if (gg[i] == secretSplit[i]) {
                    aCount++;
                }
                else {
                    for (let j = 0; j < 4; j++) {
                        if (gg[i] == secretSplit[j]) {
                            bCount++;
                        }
                    }
                }
            }
        }
    }
    code.push("" + aCount + "A" + bCount + "B ");
    return code;
}

//credit: Nat Tuck's CS4550 Lecture 04 Code
// https://github.com/NatTuck/scratch-2021-01.git
export function lives_left(secret, guesses) {
    return 8 - guesses.length;
}

export function genRand() {
    let numSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let a = numSet[Math.floor(Math.random() * 10)];
    numSet.splice(numSet.indexOf(a), 1);

    let b = numSet[Math.floor(Math.random() * 9)];
    numSet.splice(numSet.indexOf(b), 1);

    let c = numSet[Math.floor(Math.random() * 8)];
    numSet.splice(numSet.indexOf(c), 1);

    let d = numSet[Math.floor(Math.random() * 7)];
    numSet.splice(numSet.indexOf(d), 1);

    let e = a * 1000 + b * 100 + c * 10 + d;

    return "" + e;
}