const main = document.getElementById("main");

const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');

    const inputValue = input.value;

    if (inputValue == "") {
        error.innerText = "Please write something";
        input.value = "";
        main.innerHTML = "";
    }


    else {
        main.innerHTML = "";
        const url = ` https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => phoneDisplay(data.data.slice(0, 20)))

        input.value = "";
        error.innerHTML = "";
    }
}

const phoneDisplay = phones => {
    // console.log(phones);
    for (const phone of phones) {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')
        div.classList.add('col-12')
        div.classList.add('col-md-6')
        div.classList.add('g-5')
        div.innerHTML =
            `
        <div class="card border-0 shadow mt-5 g-5" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top img-fluid p-5" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.brand}</h5>
          <p class="card-text">Name: ${phone.phone_name}</p>
          <a href="#" onclick="loadPhone('${phone.slug}')" class="btn btn-outline-primary">Details</a>
        </div>
      </div>         `
        main.appendChild(div)
    }
}
// phone detail
const loadPhone = (phoneId) => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data))
}

const displayPhoneDetail = myPhone => {
    console.log(myPhone);
    const phoneDetail = document.getElementById('phone-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =
        `
    <img src="${myPhone.image}" class="card-img-top img-fluid p-5" alt="...">
    <div class="card-body">
      <h5 class="card-title">${myPhone.brand}</h5>
      <p class="card-text">Name: ${myPhone.name}</p>
      <p class="card-text">Chipset: ${myPhone.mainFeatures.chipSet}</p>
      <p class="card-text">DisplaySize: ${myPhone.mainFeatures.displaySize}</p>
      <p class="card-text">Memory: ${myPhone.mainFeatures.memory}</p>
      <p class="card-text">Sensors:<br><br> ${myPhone.mainFeatures.sensors[0]}</p>
      <p class="card-text">${myPhone.mainFeatures.sensors[1]}</p>
      <p class="card-text">${myPhone.mainFeatures.sensors[2]}</p>
      <p class="card-text">${myPhone.mainFeatures.sensors[3]}</p>
      <p class="card-text">${myPhone.mainFeatures.sensors[4]}</p>
      <p class="card-text">${myPhone.mainFeatures.sensors[5]}</p>
      <h6 class="card-title">${myPhone.releaseDate}</h6>

    </div>
  </div>         
  `
    phoneDetail.appendChild(div)


}
