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
        div.innerHTML =
            `
        <div class="card" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.brand}</h5>
          <p class="card-text bold">Name: ${phone.phone_name}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>         `
        main.appendChild(div)
    }
}

