const randomString = require("randomstring")

//Utils for String class
class StringUtils {
    static EMPTY_STRING = "";
    static SPACE_STRING = " ";
    static SPECIAL_CHARS = ['~', '`', '!', '@', '$', '^', '&', '%', '*', '(', ')', '_', '=', '+', '>', '<', '?', ';', ':', '/', '{', '}'];

    static randomStringAlphabetic(length) {
        return randomString.generate({length: length, charset: 'alphabetic'})
    }

    static randomStringAlphabeticLength(min, max) {
        let length = RandomUtils.randomIntValue(min, max);
        return StringUtils.randomStringAlphabetic(length);
    }

    static randomStringAlphabeticWithSpecial(numChar) {
        let numSpecialChar = RandomUtils.randomIntValue(0, numChar - 1);
        return StringUtils.randomStringAlphabetic(numChar - numSpecialChar) +
            StringUtils.randomStringSpecial(numSpecialChar);

    }

    static randomStringSpecial(numberChar) {
        let specialString = '';
        for (let i = 0; i < numberChar; i++) {
            let randomIndex = RandomUtils.randomIntValue(0, StringUtils.SPECIAL_CHARS.length - 1);
            specialString += (StringUtils.SPECIAL_CHARS[randomIndex]);
        }
        return specialString;
    }

    static randomStringSpecialLength(min, max) {
        let length = RandomUtils.randomIntValue(min, max);
        return StringUtils.randomStringSpecial(length);
    }

    static randomEmailString(numCharPrefix) {
        let prefixString = StringUtils.randomStringAlphabetic(numCharPrefix);
        let suffix = ['.', '@', StringUtils.randomStringAlphabetic(5), 'com'].join('');
        return [prefixString, suffix].join();
    }

    static randomNumericString(numChar) {
        return randomString.generate({
            length: numChar,
            charset: 'numeric'
        });
    }

    static randomNumericStringLength(min, max) {
        let length = RandomUtils.randomIntValue(min, max);
        return StringUtils.randomNumericString(length);
    }
}

//Utils random value
class RandomUtils {
    static randomIntValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


module.exports = {
    StringUtils, RandomUtils
}