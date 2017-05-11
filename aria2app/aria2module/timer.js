/**
 * Created by emalsha on 3/22/17.
 */

var ns = require('node-schedule');
var Aria2 = require('aria2');

var rule = new ns.RecurrenceRule();
var aria = new Aria2();

rule.dayOfWeek = [new ns.Range(0,6)];
rule.hour = 02;
rule.minute = 03;

var fn = ns.scheduleJob(rule,function () {
    console.log('Sheduled date..');
});