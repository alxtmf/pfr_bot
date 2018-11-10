

const shedule_info = require ('./shedule_info');
const main_keyboard = require ('./main_keyboard');

class SheduleInfoManager {

    keyboard(){
        const list = shedule_info.sheduleInfo.ScheduleInfoList.ScheduleInfo;

        var buttons = [{
            BgColor: '#FFD700',
            Text: 'Главное меню',
            ActionType:"reply",
            ActionBody: main_keyboard.MAIN_MENU,
            TextSize: 'regular',
            Columns: 3
        }];

        const colors = ['#B0E0E6','#ADD8E6','#87CEEB','#87CEFA','#00BFFF','#1E90FF','#6495ED'];

        for (var index in list){
            const btn = {
                BgColor: colors[index % colors.length],
                Text: list[index].Organisation.Name,
                ActionType:"reply",
                ActionBody: main_keyboard.KS_PREFIX + list[index].Organisation.Code,
                TextSize: 'regular',
                Columns: 3
            };
            buttons.push(btn);
        }

        const KS_INFO_KEYBOARD = {
            Type: "keyboard",
            Revision: 1,
            DefaultHeight: true,
            BgColor: '#F0FFFF',
            ButtonsGroupColumns: 2,
            Buttons: buttons
        };
        return KS_INFO_KEYBOARD;
    }
}

module.exports = SheduleInfoManager;