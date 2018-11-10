

const pension_doc = require ('./pension_doc');
const main_keyboard = require ('./main_keyboard');

class PensionDocInfoManager {

    info(actionBoby){
        let f =  function() {
            const list = pension_doc.pensionDocs.infoMessageList.InfoMessage;
            const code = actionBoby.replace(main_keyboard.PENSION_DOC_PREFIX, '').trim();

            for (var index in list) {
                if (list[index].Code === code) {
                    return list[index];
                }
            }
            return undefined;
        }.bind();
        return f(actionBoby);
    }

    infoAsString (actionBoby){
        const pdInfo = this.info(actionBoby);
        var result = '';
        if (pdInfo != undefined){
            result += pdInfo.Name+ ':\n' + pdInfo.Message;
        }else{
            result = 'Информация отсутсвует';
        }
        return result;
    }

    keyboard(){
        const list = pension_doc.pensionDocs.infoMessageList.InfoMessage;

        var buttons = [{
            BgColor: '#FFD700',
            Text: 'Главное меню',
            ActionType:"reply",
            ActionBody: main_keyboard.MAIN_MENU,
            TextSize: 'regular',
        }];

        const colors = ['#ADFF2F','#7FFF00','#7CFC00','#32CD32','#98FB98','#90EE90'];

        for (var index in list){
            const btn = {
                BgColor: colors[index % colors.length],
                Text: list[index].Name,
                ActionType:"reply",
                ActionBody: main_keyboard.PENSION_DOC_PREFIX + list[index].Code,
                TextSize: 'regular',
            };
            buttons.push(btn);
        }

        buttons.push({
            BgColor: '#FFD700',
            Text: 'Главное меню',
            ActionType:"reply",
            ActionBody: main_keyboard.MAIN_MENU,
            TextSize: 'regular',
        })

        const KS_INFO_KEYBOARD = {
            Type: "keyboard",
            Revision: 1,
            DefaultHeight: true,
            BgColor: '#F0FFFF',
            Buttons: buttons
        };
        return KS_INFO_KEYBOARD;
    }
}

module.exports = PensionDocInfoManager;