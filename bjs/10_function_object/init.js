
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.date;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('work').innerText = initPerson.work;
};

function reset() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.date;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('work').innerText = initPerson.work;
}

function clearAll() {
    let clear = "";
    document.getElementById('firstNameOutput').innerText = clear;
    document.getElementById('surnameOutput').innerText = clear;
    document.getElementById('genderOutput').innerText = clear;
    document.getElementById('birthYearOutput').innerText = clear;
    document.getElementById('patronymicOutput').innerText = clear;
    document.getElementById('work').innerText = clear;
}

