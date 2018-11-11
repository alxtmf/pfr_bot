

const shedule_info = require ('./shedule_info');
const main_keyboard = require ('./main_keyboard');

class SheduleInfoManager {

    info(actionBoby){
        let f =  function() {
            const list = shedule_info.sheduleInfo.ScheduleInfoList.ScheduleInfo;
            const code = actionBoby.replace(main_keyboard.KS_PREFIX, '').trim();

            for (var index in list) {
                if (list[index].Organisation.Code === code) {
                    return list[index];
                }
            }
            return undefined;
        }.bind();
        return f(actionBoby);
    }

    infoAsString (actionBoby){
        const shedInfo = this.info(actionBoby);
        var result = this.asString(shedInfo);//'';
        // if (shedInfo != undefined){
        //     result += shedInfo.Organisation.FullName + '\n'
        //         + "Адрес: " + shedInfo.Adress.AddressNonStructured + '\n'
        //         + "Телефон: " + shedInfo.Phone + '\n';
        //     var shed = '';
        //     for (var index in shedInfo.ScheduleList.Schedule){
        //         const elem = shedInfo.ScheduleList.Schedule[index];
        //         shed += elem.DayOfWeek + ": c " + elem.BeginTime + " до " + elem.EndTime
        //             + " обед c " + elem.BeginDinner + " до " + elem.EndDinner + '\n'
        //     }
        //     result += shed;
        // }else{
        //     result = 'Информация отсутсвует';
        // }
        return result;
    }

    asString(shedInfo) {
        let f =  function() {
            var result = '';
            if (shedInfo != undefined){
                result += shedInfo.Organisation.FullName + '\n'
                    + "Адрес: " + shedInfo.Adress.AddressNonStructured + '\n'
                    + "Телефон: " + shedInfo.Phone + '\n';
                var shed = '';
                for (var index in shedInfo.ScheduleList.Schedule){
                    const elem = shedInfo.ScheduleList.Schedule[index];
                    shed += elem.DayOfWeek + ": c " + elem.BeginTime + " до " + elem.EndTime
                        + " обед c " + elem.BeginDinner + " до " + elem.EndDinner + '\n'
                }
                result += shed;
            }else{
                result = 'Информация отсутсвует';
            }
            return result;
        }.bind();
        return f(shedInfo);
    }

    nearest (latitude, longitude){
        const self = this;
        const list = shedule_info.sheduleInfo.ScheduleInfoList.ScheduleInfo;
        const nearestAdr = list.map( function (lm){
            return {
                sheduleInfo: lm,
                distance: self.distance(latitude, longitude, lm.Adress.latitude, lm.Adress.longitude)
            }
        }).reduce(function (lmd1, lmd2){
            return (lmd1.distance < lmd2.distance ? lmd1 : lmd2);
        });
        return nearestAdr.sheduleInfo;
    }

    distance(latitude1, longitude1, latitude2, longitude2){
        const self = this;
        let f =  function() {
            var R = 6371; // Radius of the earth in km
            var dLat = self.deg2rad(latitude2-latitude1);  // deg2rad below
            var dLon = self.deg2rad(longitude2-longitude1);
            //Гаверсинус
            var a =
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(self.deg2rad(latitude1)) * Math.cos(self.deg2rad(latitude2)) *
                Math.sin(dLon/2) * Math.sin(dLon/2)
            ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c; // Distance in km
            return d;
        }.bind();
        return f(latitude1, longitude1, latitude2, longitude2);
    }

    deg2rad(deg) {
        let f =  function() {
            return deg * (Math.PI/180)
        }.bind();
        return f(deg);
    }

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

        buttons.push({
            BgColor: '#FFD700',
            Text: 'Главное меню',
            ActionType:"reply",
            ActionBody: main_keyboard.MAIN_MENU,
            TextSize: 'regular',
            Columns: 3
        })

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