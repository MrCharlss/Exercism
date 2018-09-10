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
  let stops = ["UAA", "UAG", "UGA"];
  let numSlices;
  let rnas = [];
  let iUno = 0;
  let iDos = 3;
  let proteins = [];

  if (!rna) {
    return proteins;
  } else {
    numSlices = rna.length / 3;
  }
  //console.log(numSlices);
  for (let i = 0; i < numSlices; i++) {
    let sliced = rna.slice(iUno, iDos);
    rnas.push(sliced);
    iUno += 3;
    iDos += 3;
  }
  //console.log(rnas);

  for (let i = 0; i < rnas.length; i++) {
    if (stops.includes(rnas[i])) break;
    else if (codons.hasOwnProperty(rnas[i])) {
      proteins.push(codons[rnas[i]]);
    } else {
      throw "Invalid codon";
    }
  }
  return proteins;
}

//translate("UUUUUC");
export default translate;
