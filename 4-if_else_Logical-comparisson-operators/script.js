/*const age= 2;
const isFemale= true;
const driverStatus= 'bob';

if (age >=18){
    console.log ('Ja, je mag naar binnen')
}else{
    console.log ('Nee, je mag niet naar binnen')
}

if (isFemale){
    console.log ('Ja, je mag een kaartje kopen')
}else{
    console.log ('Nee, je mag geen kaartje kopen')
}

if (driverStatus == 'bob'){
    console.log ('Ja, je mag auto rijden')
}else{
    console.log ('Nee, je mag geen auto rijden')
}*/





//Opdracht: Comparison && Logical Operators


const age= 20;
const name= 'Sarah';
const totalAmount= 101;

if (age >=18 && age<=25){
    console.log("Je krijgt 50% korting!")
}else{
    console.log ("Je krijgt geen korting")
}

if (name == 'Bram' || name == 'Sarah'){
    console.log ("Je krijgt een gratis biertje!")
}else{
    console.log ("Geen gratis biertje")
}

if (totalAmount >25 && totalAmount <=50){
    console.log ("Gratis vega bitterballen")
}else if (totalAmount >50 && totalAmount <=100){
    console.log ("Gratis portie nachos")
}else{ (totalAmount >=100)
    console.log ("Gratis champagne")
}