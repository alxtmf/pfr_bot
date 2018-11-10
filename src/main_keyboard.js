const SHEDULE_INFO = "SHEDULE_INFO";
const PENS_DOC = "PENS_DOC";
const MAIN_MENU = "MAIN_KEYBOARD";
const KS_PREFIX = "KSSHI_";

const MAIN_KEYBOARD = {
    Type: "keyboard",
    Revision: 1,
    DefaultHeight: true,
    BgColor: '#F0FFFF',
    Buttons: [
        {
            BgColor: '#40E0D0',
            Text: 'Клиентские службы',
            ActionType:"reply",
            ActionBody: SHEDULE_INFO,
            TextSize: 'regular'
        },
        {
            BgColor: '#48D1CC',
            Text: 'Документы',
            ActionType:"reply",
            ActionBody: PENS_DOC,
            TextSize: 'regular'
        },
    ]
};

module.exports.SHEDULE_INFO = SHEDULE_INFO;
module.exports.PENS_DOC = PENS_DOC;
module.exports.MAIN_KEYBOARD = MAIN_KEYBOARD;
module.exports.MAIN_MENU = MAIN_MENU;
module.exports.KS_PREFIX = KS_PREFIX;