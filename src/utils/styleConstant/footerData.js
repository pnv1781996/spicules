import { address, call, mail, timing } from "../../assets"

export const colData = {
    title: "選擇另一個國家或地區，以獲得適用於閣下 所在位置的內容和線上課程選項。",
    style: {
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "28px",
        letterSpacing: "0em",
        textAlign: "left",
    }
}

export const countryList = ["香港 ", "台灣Taiwan", "GLOBAL (English)", "한국 Korean", "เมืองไทย（ภาษาไทย", "日本国 Japan"]

export const pagesList = [
    {
        menu: "關於我們"
    },
    {
        menu: "聯繫我們"
    },
    {
        menu: "隱私條例"
    },
    {
        menu: "加入我們"
    }
]

export const contactList = [{
        icon:timing,
        text:"星期一至五 13:30-21:30 星期六 15:30-21:30"
    },
    {
        icon:call,
        text:"+852 3905 2905"
    },
    {
        icon:mail,
        text:"enquiry@Spiculesedu.com"
    },
    {
        icon:address,
        text:"未來教育科技有限公司  香港金鐘道95號統一中心5樓75室"
    }
]