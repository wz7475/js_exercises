// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,
        mutate() {
            for (let i in dna) {
                let buf = dna[i];
                //console.log("old: " + dna[i]);
                do {
                    dna[i] = returnRandBase();
                } while (dna[i] === buf);
                //console.log("new: " + dna[i]);
            }
        }
    };
}

/let org = pAequorFactory(1, mockUpStrand());
//org.mutate();
//console.log(pAequorFactory(1, mockUpStrand()));