// var api = fetch("https://restcountries.com/v3.1/all");
let row = document.querySelector("#row");


fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then((data)=> {
    data.forEach((item)=>{
        // console.log(item.name.common)
        // let weather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${item.latlng[0]}&lon=${item.latlng[1]}&appid=b12381279cf0c261ae04950febb89fcb`)
        // weather.then((res)=>res.json()).then((data)=>{
        //     // var temp = `${data.main.temp}`;
        //     console.log(data)
        // })
    row.innerHTML += 
    `<div class="card-container">
    <img src=${item.flags.png}>
    <div class="card-specs">
    <h4>Country: ${item.name.common}</h4>
    <h4>Capital : ${item.capital}</h4>
    <h4>Region : ${item.region}</h4>
    </div>
    </div>`
    })
})
.catch((err)=> console.log(err))

