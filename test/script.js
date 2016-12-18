var Redemption = require('../src/redemption.js');

var redemptionFactory = new Redemption.RedemptionFactory();
var template = new Redemption.RedemptionTemplate()
    .declaration('{head}')
    .declaration('{content}');

var rom = redemptionFactory.create(template);

var parent = document.getElementsByName('html');
rom.amen(parent);

function require(s) {
    return Redemption;
}