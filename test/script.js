var Redemption = require('../src/redemption.js');
var redemptionFactory = new Redemption.RedemptionFactory();

redemptionFactory.invoke(function () {
    var template = new Redemption.RedemptionTemplate()
        .declaration('{head}')
        .declaration('{content}');
});

function require(s) {
    return Redemption;
}