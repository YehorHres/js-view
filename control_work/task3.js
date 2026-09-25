const correctPIN = 2026;
let pin;
count = 0;



do{
    count++;
    pin = +prompt("Pin")
    if (pin === correctPIN){
        alert("Доступ дозволено")
        break;
    }else if (pin !== correctPIN){
        alert(`сПРОБ: ${3-count}`)
    }
    console.log(count)

}while(count <3);

if (count === 3 && pin !== correctPIN){
    alert("Доступ заблокований")
}