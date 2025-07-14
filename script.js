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





