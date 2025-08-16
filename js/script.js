// const input = document.querySelector(".input")
// const box = document.querySelector(".box")
// const hero = document.querySelector(".hero")
// const iconW = document.querySelector(".iconW")
// const icon = document.querySelector(".icon")
// const form = document.querySelector("form")


// const key = "4e6834ca28ff6ec8212ae50aa1282350"

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`;
//     getData(api)
//     input.value = ""
// })

// const getData = async (api) => {
//     const rec = await fetch(api);
//     const data = await rec.json()
//     writeData(data)
// }


// const kel = 273.15

// const writeData = (item) => {
//     console.log(item.weather[0].main);
//     const ts = item.dt
//     const sana = new Date(ts * 1000).toString();
//     const date = sana.slice(0, 25);
//     // console.log(date);

//     hero.innerHTML = ""
//     box.innerHTML = ""
//     box.innerHTML = ` <div class="row">
//                     <h5 class="blow">Temp max</h5>
//                     <div class="result">
//                         <h5 class="blow">${Math.floor(item.main.temp_max - kel)}<span>°</span></h5>
//                         <img src="./img/tempMax.svg" alt="">
//                     </div>
//                 </div>
//                  <div class="row">
//                     <h5 class="blow">Temp min</h5>
//                     <div class="result">
//                         <h5 class="blow">${Math.floor(item.main.temp_min - kel)}<span>°</span></h5>
//                         <img src="./img/tempMin.svg" alt="">
//                     </div>
//                 </div>
//                  <div class="row">
//                     <h5 class="blow">Humadity</h5>
//                     <div class="result">
//                         <h5 class="blow">${item.main.humidity}<span>%</span></h5>
//                         <img src="./img/wet.svg" alt="">
//                     </div>
//                 </div>
//                  <div class="row">
//                     <h5 class="blow">Cloudy</h5>
//                     <div class="result">
//                         <h5 class="blow">${item.clouds.all}<span>%</span></h5>
//                         <img src="./img/CloudIcon.svg" alt="">
//                     </div>
//                 </div>
//                  <div class="row">
//                     <h5 class="blow">Wind</h5>
//                     <div class="result">
//                         <h5 class="blow">${Math.floor(item.wind.speed)}<span>km/h</span></h5>
//                         <img src="./img/wind.svg" alt="">
//                     </div>
//                 </div>`
//     hero.innerHTML = `<div class="container">
//                 <h1 class="blow">${Math.floor(item.main.temp - kel)}</h1>
//                 <div class="location">
//                     <h2 class="blow">${item.name}</h2>
//                     <h5 class="blow">${date}</h5>
//                 </div>
//                 <div class="icon">
//                     <img src="./img/CloudIcon.svg" alt="">
//                 </div>
//             </div>`
// }

// const mainImage = (item) => {
 
//     // if (item.weather[0].main == Clear) {
//     //     icon.innerHTML = `<img class="iconW" src="./img/sunny.svg" alt="">`
//     // }
// }
// mainImage()

// // outerHTML