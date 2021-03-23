const utils = require("../utils/utils")

class User {

    constructor(name, email, password, confirmPassword, phone, city, district, address) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.phone = phone;
        this.city = city;
        this.district = district;
        this.address = address;
    }

    static EMPTY_USER() {
        return new User(
            utils.StringUtils.EMPTY_STRING,
            utils.StringUtils.EMPTY_STRING,
            utils.StringUtils.EMPTY_STRING,
            utils.StringUtils.EMPTY_STRING,
            utils.StringUtils.EMPTY_STRING,
            utils.StringUtils.EMPTY_STRING,
            utils.StringUtils.EMPTY_STRING,
            utils.StringUtils.EMPTY_STRING);
    }

    static SUCCESS_USER() {
        let name = utils.StringUtils.randomStringAlphabeticLength(1, 50);
        let email = utils.StringUtils.randomEmailStringLength(1, 50);
        let password = utils.StringUtils.randomPasswordLength(6, 15);
        let phone = utils.StringUtils.randomNumericStringLength(10, 11);
        let city = utils.StringUtils.randomStringAlphabeticLength(1, 50);
        let district = utils.StringUtils.randomStringAlphabeticLength(1, 50);
        let address = utils.StringUtils.randomStringAlphabeticLength(1, 50);
        return new User(
            name,
            email,
            password,
            password,
            phone,
            city,
            district,
            address);
    }

}