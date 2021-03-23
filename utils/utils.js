//Declare variable randomstring package of nodeJS to generate string to create data for test
const randomString = require("randomstring")

/**
 * Class Utils for string
 */
class StringUtils {
    static EMPTY_STRING = "";
    static SPACE_STRING = " ";
    static SPECIAL_CHARS = ['~', '`', '!', '@', '$', '^', '&', '%', '*', '(', ')', '_', '=', '+', '>', '<', '?', ';', ':', '/', '{', '}'];

    /**
     * Random string with alphabetic for create data test
     * @param length length of random string
     */
    static randomStringAlphabetic(length) {
        return randomString.generate({length: length, charset: 'alphabetic'})
    }

    /**
     * Random string with alphabetic with length between min and max
     * @param min the least char of random string
     * @param max the max char of random string
     * @returns {*}
     */
    static randomStringAlphabeticLength(min, max) {
        let length = RandomUtils.randomIntValue(min, max);
        return StringUtils.randomStringAlphabetic(length);
    }

    /**
     * Random string with alphabetic with special char
     * @param numChar length of random string
     * @returns {string}
     */
    static randomStringAlphabeticWithSpecial(numChar) {
        let numSpecialChar = RandomUtils.randomIntValue(0, numChar - 1);
        return StringUtils.randomStringAlphabetic(numChar - numSpecialChar) +
            StringUtils.randomStringSpecial(numSpecialChar);

    }

    /**
     *  Random string with special
     * @param numberChar number char special of random string
     * @returns {string}
     */
    static randomStringSpecial(numberChar) {
        let specialString = '';
        for (let i = 0; i < numberChar; i++) {
            let randomIndex = RandomUtils.randomIntValue(0, StringUtils.SPECIAL_CHARS.length - 1);
            specialString += (StringUtils.SPECIAL_CHARS[randomIndex]);
        }
        return specialString;
    }

    /**
     * Random string special length between min and max number char
     * @param min the least of number char
     * @param max the max length number char
     * @returns {string}
     */
    static randomStringSpecialLength(min, max) {
        let length = RandomUtils.randomIntValue(min, max);
        return StringUtils.randomStringSpecial(length);
    }

    /**
     * Random email length between number char of prefix string
     * @param numCharPrefix the number char of email
     * @returns {string}
     */
    static randomEmailString(numCharPrefix) {
        let prefixString = StringUtils.randomStringAlphabetic(numCharPrefix);
        let suffix = ['.', '@', StringUtils.randomStringAlphabetic(5), 'com'].join('');
        return [prefixString, suffix].join();
    }

    static randomEmailStringLength(min, max) {
        let numberPrefix = RandomUtils.randomIntValue(min, max);
        let prefixString = StringUtils.randomStringAlphabetic(numberPrefix);
        let suffix = ['.', '@', StringUtils.randomStringAlphabetic(5), 'com'].join('');
        return [prefixString, suffix].join();
    }

    static randomPasswordLength(min, max) {
        let numChar = RandomUtils.randomIntValue(min, max);
        return randomString.generate({length: numChar});
    }

    /**
     * Random string with char format numeric
     * @param numChar the length of string
     * @returns {*}
     */
    static randomNumericString(numChar) {
        return randomString.generate({
            length: numChar,
            charset: 'numeric'
        });
    }

    /**
     * Random numeric string have length between min and max char
     * @param min :int the min char of random string
     * @param max: max the max char of random string
     * @returns {*}
     */
    static randomNumericStringLength(min, max) {
        let length = RandomUtils.randomIntValue(min, max);
        return StringUtils.randomNumericString(length);
    }
}

/**
 * Class Random Utils
 */
class RandomUtils {
    /**
     * Random integer value between [min,max]
     * @param min the least value in random
     * @param max the max value in random
     * @returns {*}
     */
    static randomIntValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

//Export module
module.exports = {
    StringUtils, RandomUtils
}