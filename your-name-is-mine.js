const randInRange = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const randLetter = () => {
    const charCode = randInRange(97, 97+26-1);
    return String.fromCharCode(charCode);
}

const MAX_T = 100;
const nameLenMax = 25;
const T = randInRange(1, MAX_T);

const genName = () => {
    const nameLen = randInRange(1, nameLenMax);
    return [...Array(nameLen)].map(x => randLetter()).join('');
}

const names = [...Array(T)].map(x => genName()+' '+genName());
const input = ''+T+'\n'+names.join('\n');

// Solution starts here
const arrIn = names.map(x => x.split(' '));

const isSubseq = (subMaybe, seq) => {
    let ind2 = 0;
    for (let ind1 = 0; ind1 < subMaybe.length; ind1++) {
        ind2 = seq.indexOf(subMaybe.charAt(ind1), ind2);
        if (ind2++ == -1) {return false};
    }
    return true;
}

const checkMatch = (a, b) => {
    return isSubseq(a,b) || isSubseq(b,a);
}

for (let arr of arrIn) {
    console.log(checkMatch(arr[0], arr[1]));
}
// for (let arr of arrIn) {
//     console.log(checkMatch(arr[0], arr[1]) +' '+arr[0]+' '+arr[1]);
// }
