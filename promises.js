const promise = new Promise((resolve, reject) =>{
var name = 'joao'

if(name != 1){
    resolve('promessa concluida')
}else{
    reject('promessa não cumprida')
}
})

promise.then((data)=>{


}).then((data) => {
console.log(data);

}).catch((error)=>{
    console.log(error)
})

const host = 'https://datebayo-api.onrender.com'

fetch(`${host}/`,{
method: "GET",
headers:{
    Accept: "application/json"
}
}).then((response) =>{
return response.json()
}).then((data)=>{
    let Naruto = data.character[0];
console.log(naruto.jutsu[0])

for(let count = 0; count < Naruto.jutsu.length; count++) {
    console.log(Naruto.jutsu[count].toUpperCase())
}
    


}).catch((error)=>{
console.log(error)
})