function translate(rna) {
  let codons = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP"
  };
  let numSlices = rna.length / 3;
  let rnas = [];
  let iUno = 0;
  let iDos = 3;
  let proteins = [];
  for (let i = 0; i < numSlices; i++) {
    let sliced = rna.slice(iUno, iDos);
    rnas.push(sliced);
    iUno += 3;
    iDos += 3;
  }

  for (let j = 0; j < rnas.length; j++) {
    let rnaSep = rnas[j];
    if (rnaSep === "UAA" || "UAG" || "UGA") {
      console.log(rnaSep);
    } /* else if (codons.hasOwnProperty(rnaSep)) {
      proteins.push(codons[rnaSep]);
    }
    console.log(proteins); */
  }
}

translate("AUGUAAUUUUGC");
//export default translate;
