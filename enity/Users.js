let randomstring = require("randomstring");
const EMPTY_STRING = "";

class User {


    constructor(name, email, password, phone, city, district, address) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.city = city;
        this.district = district;
        this.address = address;
    }

    static randomUser() {
        let name = User.randomName(15);
        let email = User.randomEmail(15);
        let password = User.randomPassword(15);
        let phone = User.randomPhone(15);
        let city = User.randomCity(15);
        let district = User.randomDistrict(15);
        let address = User.randomAddress(20);
        return new User(name, email, password, phone, city, district, address);
    }

    static randomEmptyUser() {
        return new User(EMPTY_STRING, EMPTY_STRING, EMPTY_STRING, EMPTY_STRING, EMPTY_STRING, EMPTY_STRING, EMPTY_STRING);
    }

    static randomName(length) {
        return randomstring.generate({length: length, charset: 'alphabetic'});
    }

    static randomEmail(length) {
        return randomstring.generate({length: length, charset: 'alphabetic'}) + "@gmail.com";
    }

    static randomPassword(length) {
        return randomstring.generate({length: length});
    }

    static randomPhone(length) {
        return randomstring.generate({
            length: length,
            charset: 'numeric'
        });
    }

    static randomCity(length) {
        return randomstring.generate({length: length, charset: 'alphabetic'});
    }

    static randomDistrict(length) {
        return randomstring.generate({length: length, charset: 'alphabetic'});
    }

    static randomAddress(length) {
        return randomstring.generate({length: length, charset: 'alphabetic'});
    }
}
module.exports={
    User
}