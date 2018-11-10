'use strict';

const main_keyboard = require ('./src/main_keyboard');
//console.log(main_keyboard.MAIN_KEYBOARD);

const SheduleInfoManager = require ('./src/shedule_keyboard');
const simgr = new SheduleInfoManager();
const sik = simgr.keyboard();
//console.log(sik);

const shedInfo = simgr.infoAsString('KSSHI_1');
//console.log(shedInfo);

const PensionDocInfoManager = require ('./src/pension_doc_keyboard');
const pdmgr = new PensionDocInfoManager();
const pdk = pdmgr.keyboard();
console.log(pdk);

const pdInfo = pdmgr.infoAsString('PENDO_1');
console.log(pdInfo);