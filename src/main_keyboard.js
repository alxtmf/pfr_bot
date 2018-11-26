const SHEDULE_INFO = "SHEDULE_INFO";
const PENS_DOC = "PENS_DOC";
const MAIN_MENU = "MAIN_KEYBOARD";
const KS_PREFIX = "KSSHI_";
const PENSION_DOC_PREFIX = "PENDO_";
const NEAREST_KS = "NEAREST_KS";
const PRED_PENS_DOC = "PRED_PENS_DOC";
const PRED_PENS_PREFIX = "PREDPE_";

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
            Text: 'Ближайшая клиентская служба',
            ActionType:"reply",
            ActionBody: NEAREST_KS,
            TextSize: 'regular'
        },
        {
            BgColor: '#00CED1',
            Text: 'Документы',
            ActionType:"reply",
            ActionBody: PENS_DOC,
            TextSize: 'regular'
        },
        {
            BgColor: '#3CBDBF',
            Text: 'Предпенсионный возраст',
            ActionType:"reply",
            ActionBody: PRED_PENS_DOC,
            TextSize: 'regular'
        }
    ]
};

module.exports.SHEDULE_INFO = SHEDULE_INFO;
module.exports.PENS_DOC = PENS_DOC;
module.exports.MAIN_KEYBOARD = MAIN_KEYBOARD;
module.exports.MAIN_MENU = MAIN_MENU;
module.exports.KS_PREFIX = KS_PREFIX;
module.exports.PENSION_DOC_PREFIX = PENSION_DOC_PREFIX;
module.exports.NEAREST_KS = NEAREST_KS;
module.exports.PRED_PENS_DOC = PRED_PENS_DOC;
module.exports.PRED_PENS_PREFIX = PRED_PENS_PREFIX;