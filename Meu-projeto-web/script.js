//TOP 3 CANTORAS INTERNACIONAIS
const cantora = "string"
const resposta = "string"
const idade = Number
const cidadania = "string"
const musica = "string"
const generoMusical = ["array de strings"]
const oscar = Boolean


//CANTORA NÚMERO 1
// const cantora1 = "Cynthia Erivo"
// const nome1Maiusculo = cantora1.toUpperCase()
// const idade1 = 35 
// const cidadania1 = "Reino Unido"
// const musica1 = "Stand Up"
const generoMusical1 = ["R&B", "Soul"]
const oscar1 = false
// console.log(cantora1.toUpperCase())
// console.log("idade:",idade1)    
// console.log("cidadania:",cidadania1)
// console.log("gênero musical:",generoMusical1)
// console.log("oscar?",oscar1)


// // CANTORA 2
// const cantora2 = "Alicia Keys"
// const nome2Maiusculo = cantora2.toUpperCase()
// const idade2 = 41
// const cidadania2 = "Nova Iorque"
// const musica2 = "If I Ain't Got You"
const generoMusical2 = ["R&B,Soul e Jazz"]
const oscar2 = false
// console.log(cantora2.toUpperCase())
// console.log("idade:",idade2)    
// console.log("cidadania:",cidadania2)
// console.log("gênero musical:",generoMusical2)
// console.log("oscar?",oscar2)

// //CANTORA 3
// const cantora3 = "Adele"
// const nome3Maiusculo = cantora3.toUpperCase()
// const idade3 = 34
// const cidadania3 = "Londres"
// const musica3 = "Easy on me"
const generoMusical3 = ["Soul e Pop"]
const oscar3 = true
// console.log(cantora3.toUpperCase())
// console.log("idade:",idade3)    
// console.log("cidadania:",cidadania3)
// console.log("gênero musical:",generoMusical3)
// console.log("oscar?",oscar3)

// //CALCULANDO
 const valorMedio = (35+41+34)/3
 console.log(valorMedio)

 //VERIFICANDO SE SÃO TODAS VERDADEIRAS
  const verificaOscar = 
  oscar1 && 
  oscar2 && 
  oscar3
 console.log(verificaOscar)
//False ,pois oscar2 === false

// TRANSFORMANDO EM OBJETOS
objeto1 = {
  nome: "Cynthia Erivo",
  idade: 35,
  oscar: false,
  gênero: ["R&B", "Soul"],
  cidadania: "Reino Unido",

}

objeto2 = {
  nome: "Alicia Keys",
  idade: 41,
  oscar: false,
  gênero: ["R&B,Soul e Jazz"],
  cidadania: 'Nova Iorque',

}

objeto3 = {
  nome: "Adele",
  idade: 34,
  oscar: true,
  gênero: ["Soul e Pop"],
  cidadania: 'Londres',
}

const arrayObjetos = []

//  if(oscar1 === true ){
//    arrayObjetos.push(oscar1)
//  }else{
//    alert("Item não adicionado")
//  }

//  if(oscar2 === true ){
//    arrayObjetos.push(oscar2)
//  }else{
//    alert("Item não adicionado")
//  }

 if(oscar3 === true ){
    arrayObjetos.push(oscar3)
  }else{
    alert( "Item não adicionado")
  }
   console.log(arrayObjetos)

// // Semana 5

//  let resultado1 = ""

//  for(let i= 0; i<generoMusical1.length; i++){
//    resultado1 = resultado1 + "," + generoMusical1[i]
//  }

//  let resultado2 = ""

//  for(let i=0; i<generoMusical2.length; i++){
//    resultado2 = resultado2 + " , " + generoMusical2[i]
//  }

//  let resultado3 = ""

//  for(let i=0; i<generoMusical3.length; i++){
//    resultado3 = resultado3 + " , " + generoMusical3[i]
//  }

//  console.log("Gênero musical:" , resultado1,resultado2,resultado3)

//Semana 06
const cantorasArray = [
  {
    nome: "Cynthia Erivo",
    idade: 35,
    oscar: false,
    gênero: ["R&B", "Soul"],
    cidadania: "Reino Unido",
    imagem: "./imagens/cynthia.jpg"

  },
  {
    nome: "Alicia Keys",
    idade: 41,
    oscar: false,
    gênero: ["R&B,Soul e Jazz"],
    cidadania: 'Nova Iorque',
    imagem: "./imagens/alicia.keys.jpg",
  },
  {
    nome: "Adele",
    idade: 34,
    oscar: true,
    gênero: ["Soul e Pop"],
    cidadania: 'Londres',
    imagem: "./imagens/Adele.jpeg",
  }]

// Semana 06-Revisão
let novoObjeto = []

const recebendoObj = (objeto) => {

  for (let i in objeto) {
    novoObjeto.push(objeto[i])
  }
  return novoObjeto
}
console.log(recebendoObj(cantorasArray))
// Semana 06-item2
const receber = (objeto, string) => {
  const objetoFiltrado = objeto.filter(cantorasArray => cantorasArray.nome.toUpperCase() === string.toUpperCase())

  if (objetoFiltrado.length === 0) {
    alert(string + " não encontrado ")
    return ""
  } else {
    return objetoFiltrado
  }
}
console.log(receber(cantorasArray, "Alicia Keys"))
console.log(receber(cantorasArray, "Adele"))
console.log(receber(cantorasArray, "Cynthia Erivo"))

// Semana 11


for (i in cantorasArray) {

  let div = document.getElementById("cantoras")
  let section = document.createElement("section")
  let imagem = document.createElement("img")
  let h3 = document.createElement("h3")
  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  let p3 = document.createElement("p")
  let p4 = document.createElement("p")
  let a = document.createElement("a")


  section.setAttribute("id", "sections")
  section.setAttribute("class", "show")
  section.setAttribute("class", "ali")


  div.appendChild(section)
  section.appendChild(imagem)
  section.appendChild(h3)
  section.appendChild(p1)
  section.appendChild(p2)
  section.appendChild(p3)
  section.appendChild(p4)

  imagem.src = cantorasArray[i].imagem
  h3.innerHTML = cantorasArray[i].nome.toUpperCase()
  p1.innerHTML = `Idade: ${cantorasArray[i].idade}`
  p2.innerHTML = `Oscar: ${cantorasArray[i].oscar}`
  p3.innerHTML = `Gênero: ${cantorasArray[i].gênero}`
  p4.innerHTML = `Cidadania: ${cantorasArray[i].cidadania}`



}

// semana 12
const pesquisar = document.getElementsByClassName("pesquisa")

function buscarNome() {
  const nome = document.getElementsByClassName("ali")
  const guardarValor = receber(cantorasArray, pesquisar[0].value)

  console.log(guardarValor)

  for (i in cantorasArray) {
    if (nome[i].classList.contains("show")) {
      nome[i].classList.toggle("show")
    }
    if (cantorasArray[i].nome !== guardarValor[0].nome) {
      nome[i].classList.toggle("show")

    } else if (guardarValor === "") {
      nome[i].classList.toggle("show")
    }

  }

}











