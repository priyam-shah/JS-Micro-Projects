function showCountries() {
  // 1. Create XMLHttpRequest using the constructor
  let xhr = new XMLHttpRequest();

  // 2. initialising the request
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  // (method, URL to request a str, [async, user, password])

  // 3. sending the request
  xhr.send();

  // 4 Listen to xhr events for response
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("successfully received data");

      let countries = JSON.parse(this.response);
      countries.forEach((c) => {
        const countryCard = document.createElement("div");
        const countryCardImage = document.createElement("img");

        countryCard.innerHTML = c.name.official;
        countryCardImage.src = c.flags.png;

        countryCard.appendChild(countryCardImage);
        document.getElementById("feed").appendChild(countryCard);
      });
    }
  };
}
