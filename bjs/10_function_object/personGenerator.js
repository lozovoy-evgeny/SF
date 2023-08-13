const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Нина",
            "id_2": "Мария",
            "id_3": "Юлия",
            "id_4": "Ирина",
            "id_5": "Галина",
            "id_6": "Анита",
            "id_7": "Алиса",
            "id_8": "Анна",
            "id_9": "Дарья",
            "id_10": "Людмила"
        }
    }`,
    genderJson: `{
        "count": 2,
        "list": {     
            "id_1": "Мужчина",
            "id_2": "Женщина"
        }
    }`,
    dateJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }     
    }`,
    patronymicJson: `{
        "count": 11,
        "list": {
            "id_1": "Иванов",
            "id_2": "Рашидов",
            "id_3": "Михайлов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Николаев",
            "id_7": "Викторов",
            "id_8": "Федоров",
            "id_9": "Александров",
            "id_10": "Олегов",
            "id_11": "Семёнов"
        }
    }`,
    workMaleJson: `{
        "count": 6,
        "list": {
            "id_1": "Крановщик",
            "id_2": "Снегочист",
            "id_3": "Шахтёр",
            "id_4": "Танкист",
            "id_5": "Лётчик",
            "id_6": "Таксист"
        }
    }`,
    workFemaleJson: `{
        "count": 6,
        "list": {
            "id_1": "Швея",
            "id_2": "Библиотекарь",
            "id_3": "Уборщица",
            "id_4": "Бухгалтер",
            "id_5": "Няня",
            "id_6": "Поэт"
        }
    }`,


/*     GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина', */

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomPatronymic: function() {
        return this.randomValue(this.patronymicJson);
    },

    randomFirstName: function() {
        return this.randomValue(this.firstNameMaleJson);
    },

    randomFirstNameFemale: function() {        
        return this.randomValue(this.firstNameFemaleJson);
    },

    randomSurname: function() {
        return this.randomValue(this.surnameJson);
    },

    randomGender: function() {
        return this.randomValue(this.genderJson);
    },

    randomWork: function(male) {
        if (male == true) {
            return this.randomValue(this.workMaleJson);
        } else {
            return this.randomValue(this.workFemaleJson);
        }
    },

    randomDate: function(start, end) {
        let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        const obj = JSON.parse(this.dateJson);
        const prop1 = `id_${date.getMonth() + 1}`;
        let month = obj.list[prop1];
        let result = `${date.getDate()} ${month} ${date.getFullYear()}`;
        return result;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        let gender = this.randomGender();
        if (gender === "Мужчина") {
            this.person.firstName = this.randomFirstName();
            this.person.surname = this.randomSurname();
            this.person.patronymic = this.randomPatronymic() + "ич";
            this.person.work = this.randomWork(true);
        } else {
            this.person.firstName = this.randomFirstNameFemale();
            this.person.surname = this.randomSurname() + "a";
            this.person.patronymic = this.randomPatronymic() + "на";
            this.person.work = this.randomWork(false);
        }
        this.person.gender = gender;
        this.person.date = this.randomDate(new Date(1960, 0, 1), new Date(1999, 0, 1));
        return this.person;
    }
};
