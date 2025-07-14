//array di oggeti biciclette
const biciclette= [

    {nome: 'Treck', peso: 10.5 },
    {nome: 'Bianchi', peso: 9.5 },
    {nome: 'cannondale', peso: 8.5 },
    {nome: 'Pinarello', peso: 7.5 },
    {nome: 'canyon', peso: 6.00 },


]
// stampampiamo a schermo la biciletta piu leggera
let biciLeggera = biciclette [0];  //parto dalla prima bici del array

for (let i=1; i<biciclette.length; i++){  //inizio un ciclo for per confrontare tutte le bici del array
 // se il peso della bici corrente e minore di biciLeggera
 if (biciclette[i]. peso < biciLeggera.peso ){
  
    biciLeggera=biciclette[i]; //aggiorno
  }

}
 //stampo a schermo i risultati

 console.log( 'La bici piu leggera è:');
 console.log (`Nome: ${biciLeggera.nome}, Peso: ${biciLeggera.peso} kg`);



// snack 2 :

 // Funzione per generare un numero intero casuale tra min e max (inclusi)
 function getRandomInt (min,max){
 return Math.floor(Math.random()  * (max - min +1)) + min;

 }
 // Creo un array di oggetti con solo il nome della squadra, e inizializzo punti e falli a 0
  const squadre= [
  {nome:'Juventus' , punti: 0, falli: 0 },
  {nome:'Rosario Central' , punti:0 , falli: 0 },
  {nome:'Benfica' , punti : 0 , falli: 0  },
  {nome:'Inter Miami', punti:0 , falli: 0 },
  {nome:'Atletico Madrid' , punti:0 , falli: 0 }
 ];


//faccio un ciclo for per asegnare valori casuali alle squa dre
