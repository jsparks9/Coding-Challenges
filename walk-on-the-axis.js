const MAX_T = Math.pow(10, 5);
const MAX_N = Math.pow(10, 5);

const randInRange = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const T = randInRange(1, MAX_T);
const Ns = [...Array(T)].map(x => randInRange(1, MAX_N));

const input = '' + T + '\n' + Ns.join('\n');

// Start of solution

const walkLength = (N) => {return N*(N+1)/2}

const sol = Ns.map((N) => {return walkLength(N)});

console.log(sol);

// for (let i = 0; i++ < Ns.length;) {
//     console.log(Ns[i] + ' ~ ' + sol[i]);
// }
