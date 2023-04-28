const button = document.querySelector("#btn");
button.addEventListener("click", calculate);


const addCondition = document.querySelector("#addCondition");
addCondition.addEventListener("click", showCondition);

function showCondition(e) {
    e.preventDefault();
    condition.style.display = "block";
}






function calculate(e) {

    e.preventDefault();
    
    const kcal = document.querySelector("#kcal").value;
    const kg = document.querySelector("#kg").value;
    const condition = document.querySelector("#condition").value;

    if (kcal === "" || kg === "") {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Введите данные...!',
            imageUrl: 'https://strannovosti.ru/wp-content/uploads/2015/05/fav.jpg',
            imageWidth: 350,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: '#FEF5ED',
          })
    }

    let kcalDay = condition * (30 * kg + 70);
    let grDay = kcalDay / (kcal / 100);
    let kjDay = kcalDay * 4.1868;

    grDay = grDay.toFixed();
    kjDay = kjDay.toFixed();


    document.querySelector("#grDay").textContent = grDay ;
    document.querySelector("#kjDay").textContent = kjDay;

    const inputKcal = document.querySelector(".inputKcal");
    inputKcal.value = "";

    const inputKg = document.querySelector(".inputKg");
    inputKg.value = "";
}

gsap.from(".color", {opacity: 0, duration: 2, delay: 1})
gsap.from(".divbtn", {opacity: 0, duration: 2, delay: 2})
gsap.from(".back", {opacity: 0, duration: 2, delay: 3})
