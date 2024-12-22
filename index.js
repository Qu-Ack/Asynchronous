const weather_form = document.querySelector(".weather_form");
const city_input = document.querySelector("#city_name");
const temp = document.querySelector(".temp");
const error_element = document.querySelector(".error");

weather_form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(city_input.value);

  const url = ``;
  // is url ki jagah apna url banao
  // online jao account banao kisi weather api website pe aur apna url banao

  const resp = fetch(url);

  resp
    .then((result) => {
      if (!result.ok) {
        error_element.textContent = "Not a valid location";
        temp.textContent = "";
        return;
      }
      error_element.textContent = "";
      return result.json();
    })
    .then((body) => {
      console.log(body.current.temp_c);
      temp.textContent = body.current.temp_c;
    });
});
