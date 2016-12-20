var Redemption = require('../src/Redemption.js');
var redemption = new Redemption();

redemption.getBeforeLoadListener().registerAction(function () {
    var rom = new Redemption.RedemptionObjectModel();

    var placeholderManager = rom.getPlaceholderManager();
    placeholderManager.register('{head}', headComponent);
    placeholderManager.register('{content}', contentComponent);

    rom.applyTo(document);
});

function require(s) {
    return Redemption;
}