class RegisterXpath {
    static REGISTER_URL="http://localhost:51264/WebBanXe/DangKy.aspx";
    static NAME_XPATH = "";
    static EMAIL_XPATH = "";
    static PASSWORD_XPATH = "";
    static CONFIRM_PASS_XPATH = "";
    static PHONE_XPATH = "";
    static CITY_XPATH = "";
    static DISTRICT_XPATH = "";
    static ADDRESS_XPATH = "";
    static AGREE_CHECK_BOX_XPATH = "";
    static REGISTER_BUTTON_XPATH = "";
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

module.exports = {
    RegisterXpath,
    HomeXpath
};