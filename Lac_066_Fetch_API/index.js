let p = fetch("https://goweather.herokuapp.com/weather/Ny");

p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}).then((value) => {
    console.log(value);
});
