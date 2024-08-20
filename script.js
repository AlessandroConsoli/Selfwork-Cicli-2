let dispari = 0;
let totDispari = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }else{
        dispari = dispari + i
        totDispari ++
    }    
}

console.log(`Sono presenti ${totDispari} numeri dispari`);
console.log(`La loro somma ammonta a ${dispari}`);
console.log(`La media è ${dispari / totDispari}`);




