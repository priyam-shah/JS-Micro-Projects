const cNativeName = document.createElement("h3");
document.body.appendChild(cNativeName);

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

getCountries()
  .then(
    (data) => (cNativeName.innerHTML = data[42].name.nativeName.hin.official)
  )
  .catch((err) => console.log("error: " + err.message));

//   .then((json) => {
//     cname.innerHTML = json[42].name.official;
//     flag.src = json[42].flags.png;
//     // console.log("flag added !");
//   })
//   .catch((err) => {
//     console.log("error" + err.message);
//   });

// // console.log("done");
