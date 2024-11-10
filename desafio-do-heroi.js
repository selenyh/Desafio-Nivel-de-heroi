let nome = "Selenyh"
let xp = 10000
const nomeDoHeroi = "O Herói de nome "
const mgsnivel = " está no nível "

if(xp <= 1000){
   console.log(nomeDoHeroi + nome + mgsnivel + "ferro.")       
} 
else if (xp >= 1001 && xp <= 2000) {
    console.log(nomeDoHeroi + nome + mgsnivel + "bronze.")
}
else if (xp >= 2001 && xp <= 5000) {
    console.log(nomeDoHeroi + nome + mgsnivel + "prata.")
}
else if (xp >= 5001 && xp <= 7000) {
    console.log(nomeDoHeroi + nome + mgsnivel + "ouro.")
}
else if (xp >= 7001 && xp <= 8000) {
    console.log(nomeDoHeroi + nome + mgsnivel + "platina.")
}
else if (xp >= 8001 && xp <= 9000) {
    console.log(nomeDoHeroi + nome + mgsnivel + "ascendente.")
}
else if (xp >= 9001 && xp <= 10000) {
    console.log( nomeDoHeroi + nome + mgsnivel + "imortal.")
}
else if (xp >= 10001) {
    console.log( nomeDoHeroi + nome + mgsnivel + "radiante.")
}
else {
    console.log("Você digitou um número inválido. Digite novamente")
}
