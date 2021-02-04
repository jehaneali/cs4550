// Credit: Nat Tuck, CS4550 Lecture 04 Code
// https://github.com/NatTuck/scratch-2021-01.git

export function uniq(xs) {
    return Array.from(new Set(xs));
}

export function word_view(secret, guesses) {
    let view = [];
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
export function bad_guesses(secret, guesses) {
    let digits = secret.split('');
    let bads = [];
    for (let gg of guesses) {
        if (!digits.includes(gg)) {
            bads.push(gg);
        }
    }
    return uniq(bads);
}

export function lives_left(secret, guesses) {
    return 8 - bad_guesses(secret, guesses).length;
}