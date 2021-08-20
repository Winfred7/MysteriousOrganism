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

const pAequorFactory=(number,array) =>{
  return{
    specimenNum: number,
    dna: array,
    mutate(){
  let selBindx =[Math.floor(Math.random()*15)];
   let selectedB=this.dna[selBindx]
     
       for(let i=0; i<4 ; i++){
          let base=returnRandBase(); 
           if(selectedB !=base){
            this.dna[selBindx]=base;
            return this.dna;
             break;
           }
       }
    },
    compareDNA(pAequor ){
      let match_cnt=0;
 //const specNum=Math.floor(Math.random() * this.specimenNum);
       for(let i=0; i<this.dna.length ; i++){
         
           if( this.dna[i]==pAequor.dna[i]){
             match_cnt +=1;
           };
         
       };
  if(match_cnt ==0){match_cnt=1;};

const match_P=  ((match_cnt/this.dna.length)*100).toFixed(2);
console.log(`specimen ${this.specimenNum} and ${pAequor.specimenNum} have ${match_P}% DNA in common `)
} ,
willLikelySurvive(){
  let baseC_cnt=0;
  let baseG_cnt=0;
  for(let base of this.dna){
     if(base=='C'){
       baseC_cnt +=1;
     }else if(base=='G'){
       baseG_cnt +=1;
     }
  };
const baseC_P=Math.ceil((baseC_cnt/this.dna.length) * 100);
const baseG_P=Math.ceil((baseG_cnt/this.dna.length) * 100);

return (baseC_P >=60 || baseG_P >=60)? true :false;



},
complementStrand(){
   let complStrand= this.dna.map(x =>{
       if(x =='A'){
         return 'T';
       }else if(x=='T'){
         return 'A';
       }else if(x=='C'){
         return 'G';
       }else if(x='G'){
         return 'C';
       }
   });

   return complStrand;
}

 }
}

let pAequor = pAequorFactory(4,mockUpStrand());
let pAequor2 = pAequorFactory(2,mockUpStrand());
//console.log(pAequor.dna);

//console.log(pAequor.mutate());

//console.log(pAequor.willLikelySurvive())

//console.log(pAequor.complementStrand())

pAequor2.compareDNA(pAequor)

//let bse=returnRandBase();
//console.log(bse);






