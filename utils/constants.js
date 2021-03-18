class RegisterXpath {
    static REGISTER_URL = "http://localhost:51264/WebBanXe/DangKy.aspx";
    static NAME_XPATH = "//input[@id='ContentPlaceHolder1_txt_hoten']";
    static EMAIL_XPATH = "//input[@id='ContentPlaceHolder1_txt_email']";
    static PASSWORD_XPATH = "//input[@id='ContentPlaceHolder1_txt_password']";
    static CONFIRM_PASS_XPATH = "//input[@id='ContentPlaceHolder1_txt_confirm']";
    static PHONE_XPATH = "//input[@id='ContentPlaceHolder1_txt_sdt']";
    static CITY_XPATH = "//input[@id='ContentPlaceHolder1_txt_tinh_tp']";
    static DISTRICT_XPATH = "//input[@id='ContentPlaceHolder1_txt_quan_huyen']";
    static ADDRESS_XPATH = "//input[@id='ContentPlaceHolder1_txt_diachi']";
    static AGREE_CHECK_BOX_XPATH = "//input[@id='agree']";
    static REGISTER_BUTTON_XPATH = "//input[@id='ContentPlaceHolder1_btn_dangky']";
    static DIALOG_RESULT_XPATH = "//span[@id='ContentPlaceHolder1_resultDialog']";
}

class HomeXpath {
    static HOME_URL = "http://localhost:51264/WebBanXe/Home.aspx";
    static HOME_BUTTON_XPATH = "//a[@id='LinkButton1']";
    static MANUFACTURER_XPATH = "//a[@id='LinkButton2']";
    static PRICE_LIST_XPATH = "//a[@id='LinkButton3']";
    static NEWS_XPATH = "//a[@id='LinkButton4']";
    static SALON_XPATH = "//a[@id='LinkButton7']";
    static VEHICLE_REGISTRATION_XPATH = "//a[@id='LinkButton5']";
    static ACCOUNT_XPATH = "//span[@id='notLogin']";
    static LOGIN_XPATH = "//a[@id='LinkButton21']";
    static REGISTER_XPATH = "//a[@id='LinkButton22']";
    static SEARCH_SELECT_XPATH = "//select[@id='ContentPlaceHolder1_ddl_Gia']";
    static SEARCH_BUTTON_XPATH = "//a[@id='ContentPlaceHolder1_LinkButton1']";
}

class Config {
    static TIME_OUT = 3000000;
}

class Utils {

    static get_random_value(min, max) {
        return Math.floor(Math.random() * Math.floor(max - min)) + min;
    }
}

module.exports = {
    RegisterXpath,
    HomeXpath,
    Config,
    Utils
};