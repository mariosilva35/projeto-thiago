var parar = 0;
while(parar == 0){
  console.log("Bem vindo á Home Sweet Home")
  console.log("")
  console.log("Sofá")
  var sofa = 150;
  console.log("")
  console.log("Camas")
  var cama = 500;
  console.log("")
  console.log("Armarios")
  var armario = 800;
  var frete =20;
  console.log("")
  var expr = prompt("Como podemos te ajudar??")
  console.log("")

  if(expr == 'Sofá'){
  console.log("o preço do item é:")
    console.log(sofa + frete)
    console.log("")
    var poco = prompt("De um ou dois lugares?")

    switch(poco){

case 'Um' :

console.log("")
console.log("perfeito seu pedido é:")
console.log(expr)
console.log("de " + poco + " espaço")
console.log("")
console.log("otimo seu codigo é 5")
var expz = prompt("confirme seu codigo por favor")
do {
  console.log("obrigado")
} while(expz === 5)

for(var expf = prompt("digite seu endereço"); expf <= 3; expf++){console.log(expf)}
console.log("")
console.log("otimo ele será entregue em sua casa")
console.log("obrigado pela preferencia")
break

case 'Dois' :

console.log("")
console.log("perfeito seu pedido é:")
console.log(expr)
console.log("de " + poco + " espaço")
console.log("")
console.log("otimo seu codigo é 5")
var expz = prompt("confirme seu codigo por favor")
do {
  console.log("obrigado")
} while(expz === 5)

for(var expf = prompt("digite seu endereço"); expf <= 3; expf++){console.log(expf)}
console.log("")
console.log("otimo ele será entregue em sua casa")
console.log("obrigado pela preferencia")
break

    }
    
  break}

  else if (expr == 'Camas'){

    console.log("")
console.log("o preço do item é:")
    console.log(cama + frete)
    console.log("")
    var poco = prompt("solteiro ou casal?")

    switch(poco){

case 'Solteiro' :

console.log("")
console.log("perfeito seu pedido é:")
console.log(expr)
console.log(poco)
console.log("")
console.log("otimo seu codigo é 5")
var expz = prompt("confirme seu codigo por favor")
do {
  console.log("obrigado")
} while(expz === 5)

for(var expf = prompt("digite seu endereço"); expf <= 3; expf++){console.log(expf)}
console.log("")
console.log("otimo ele será entregue em sua casa")
console.log("obrigado pela preferencia")
break

case 'casal' :

console.log("")
console.log("perfeito seu pedido é:")
console.log(expr)
console.log(poco)
console.log("")
console.log("otimo seu codigo é 5")
var expz = prompt("confirme seu codigo por favor")
do {
  console.log("obrigado")
} while(expz === 5)

for(var expf = prompt("digite seu endereço"); expf <= 3; expf++){console.log(expf)}
console.log("")
console.log("otimo ele será entregue em sua casa")
console.log("obrigado pela preferencia")
break

    }
    
  break}

else if(expr == 'Armarios'){

    console.log("")
console.log("o preço do item é:")
    console.log(armario + frete)
    console.log("")
    var poco = prompt("grande ou medio?")

    switch(poco){

case 'Grande' :

console.log("")
console.log("perfeito seu pedido é:")
console.log(expr)
console.log(poco)
console.log("")
console.log("otimo seu codigo é 5")
var expz = prompt("confirme seu codigo por favor")
do {
  console.log("obrigado")
} while(expz === 5)

for(var expf = prompt("digite seu endereço"); expf <= 3; expf++){console.log(expf)}
console.log("")
console.log("otimo ele será entregue em sua casa")
console.log("obrigado pela preferencia")
break

case 'Medio' :

console.log("")
console.log("perfeito seu pedido é:")
console.log(expr)
console.log("de " + poco + " espaço")
console.log("")
console.log("otimo seu codigo é 5")
var expz = prompt("confirme seu codigo por favor")
do {
  console.log("obrigado")
} while(expz === 5)

for(var expf = prompt("digite seu endereço"); expf <= 3; expf++){console.log(expf)}
console.log("")
console.log("otimo ele será entregue em sua casa")
console.log("obrigado pela preferencia")
break

    }
    
  break}

  else if (expr != 'Armarios' && expr != 'Camas' && expr != 'Sofá'){
    console.log("Tente novamente!")
    console.log("")
  }
}

