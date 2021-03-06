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
        },
        compareDNA(another) {
            let counter = 0;
            for (let i in this.dna) {
                if (this.dna[i] === another.dna[i])
                    counter++;
            }
            let score = Math.round(counter / 15 * 100);
            console.log(`specimen #${this.specimenNum} and specimen #${another.specimenNum} have ${score}% DNA in common`);
        },
        willLikelySurvive() {
            let counter = 0;
            for (let i in this.dna) {
                if (this.dna[i] === "G" || this.dna[i] === "C")
                    counter++;
            }
            return counter / 15 >= 0.6 ?  true :  false;
        }
    };
}

const produce = () =>
{
    let arr = [];
    let counter = 1;
    do
    {
        let org = pAequorFactory(counter, mockUpStrand());
        if (org.willLikelySurvive())
        {
            arr.push(org);
            counter++;
        }
    }while (arr.length < 30);
    return arr;
}


let org1 = pAequorFactory(1, mockUpStrand());
let org2 = pAequorFactory(2, mockUpStrand());
//org.mutate();
//console.log(pAequorFactory(1, mockUpStrand()));
//org1.compareDNA(org2);
//console.log(org1.willLikelySurvive());
arr = produce();
console.log(arr);