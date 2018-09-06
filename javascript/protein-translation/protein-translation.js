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
  console.log(numSlices);
  for (let i = 0; i < numSlices; i++) {
    let sliced = rna.slice(0, 3);
    rnas.push(sliced);
    console.log(rna);
  }
  console.log(rnas);
}

translate("AAAUGG");
//export default translate;
