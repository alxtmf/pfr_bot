'use strict';

const main_keyboard = require ('./src/main_keyboard');
//console.log(main_keyboard.MAIN_KEYBOARD);

const SheduleInfoManager = require ('./src/shedule_keyboard');
const simgr = new SheduleInfoManager();
const sik = simgr.keyboard();
//console.log(sik);

const shedInfo = simgr.infoAsString('KSSHI_1');
console.log(shedInfo);