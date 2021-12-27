const cname = document.createElement("h3");
document.body.appendChild(cname);

const flag = document.createElement("img");
document.body.appendChild(flag);

// console.log("lets go");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    cname.innerHTML = data[42].name.official;
    flag.src = data[42].flags.png;
    // console.log("flag added !");
  })
  .catch((err) => {
    console.log("error" + err.message);
  });

// console.log("done");
