/**
 * Created by chen on 2016/9/5.
 * 系统资源占用情况
 * 1.系统总体 2.当前应用程序
 */
'use strict';
const os = require('os');
const fs = require('fs');

function serverInfo() {
    let freeMem  = os.freemem();
    let toalMem  = os.totalmem();
    let platform = os.platform();
    let osType   = os.type();
    let cpus     = os.cpus().length;
    return {
        mem: {free: freeMem, total: toalMem},
        osType, platform, cpus
    }
}

/**
 * 获取api时延
 * @param api
 */
function  apiDelay(api){

}

function avarageDelay(){

}