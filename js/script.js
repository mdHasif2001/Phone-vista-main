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
            .then(data => phoneDisplay(data.data))

        input.value = "";
        error.innerHTML = "";
    }
}

const phoneDisplay = phones => {
    console.log(phones);
    for (const phone of phones) {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')
        div.classList.add('col-12')
        div.classList.add('col-md-6')
        div.classList.add('g-5')
        div.innerHTML =
        `
        <div class="card border-0 shadow mt-5 " style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top img-fluid p-5" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.brand}</h5>
          <p class="card-text">Name: ${phone.phone_name}</p>
          <a href="#" class="btn btn-outline-primary">Details</a>
        </div>
      </div>         `
        main.appendChild(div)
    }
}

// phone detail
const phoneDetail = (phoneId) => {
    const url = `
    https://openapi.programming-hero.com/api/phone/${phoneId}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data[0]))
}

const displayPhoneDetail = explore => {
    console.log(explore);
    const exploreThing = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =
        `
    <div class="card" style="width: 18rem;">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.brand}</h5>
      <p class="card-text">Name: ${phone.phone_name}</p>
      <p class="card-text">Name: ${phone.slug}</p>
      
    </div>
  </div>         

    `
    exploreThing.appendChild(div);
}