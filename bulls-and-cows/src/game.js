// Credit: Nat Tuck, CS4550 Lecture 04 Code
// https://github.com/NatTuck/scratch-2021-01.git

export function uniq(xs) {
    return Array.from(new Set(xs));
}

export function code_view(secret, guesses) {
    let code = [];
    let aCount = 0;
    let bCount = 0;
    //you might need to change this from guesses
    //let guessSplit = guesses.split('');
    let secretSplit = secret.split('');
    let result = "";

    //console.log("ss is "+secretSplit);
    //console.log("g is "+guesses);
   // console.log("Secret is " + secretSplit);
   // console.log("guesses is " + guesses);
    for(let i = 0; i < 4; i++) {
        if (guesses.length > 0) {
            let gg = guesses[guesses.length-1].split('');
            //console.log("gg is " + gg);
        if(secretSplit.includes(gg[i])) {
            if(gg[i] == secretSplit[i]) {
                aCount++;
            }
            else {
                for (let j = 0; j < 4; j++) {
                    if(gg[i] == secretSplit[j]) {
                        bCount++;
                    }
                }
            }
        }
    }
    }
    code.push(""+aCount + "A"+bCount+"B ");
    console.log("uniq is " + uniq(code));
    return uniq(code);
}

export function word_view(secret, guesses) {
    let view = [];
    let aCount = 0;
    let bCount = 0;
    //you might need to change this from guesses
    //let guessSplit = guesses.split('');
    let secretSplit = secret.split('');
    let result = "";

    // console.log("ss is "+secretSplit);
    // console.log("g is "+guesses);
    // for(let i = 0; i < 4; i++) {
    //     if(secretSplit.includes(guesses[i])) {
    //         if(guesses[i] == secretSplit[i]) {
    //             aCount++;
    //         }
    //         else {
    //             for (let j = 0; j < 4; j++) {
    //                 if(guesses[i] == secretSplit[j]) {
    //                     bCount++;
    //                 }
    //             }
    //         }
    //     }
    // }
    // view.push(result.concat(aCount).concat("A").concat(bCount).concat("B "));
    // console.log("a count is " + aCount);
    // console.log("b count is " + bCount);
    // return view;

    for (let cc of secret.split('')) {
        if (guesses.includes(cc)) {
            //gonna need the a b logic here
            view.push(cc);
        }
        else {
            view.push("_");
        }
    }
    return view;
}
// export function bad_guesses(secret, guesses) {
//     let digits = secret.split('');
//     let bads = [];
//     let badResults = [];
//     let allBads = [];
//     for (let gg of guesses) {
//         if (!digits.includes(gg)) {
//             bads.push(gg);
//             badResults.push("sup");
//         }
//     }
//     allBads.push(bads);
//     allBads.push(badResults);
//     return uniq(allBads);
    
// }

export function lives_left(secret, guesses) {
    return 8 - guesses.length;
}