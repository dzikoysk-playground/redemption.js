function HeaderComponent() {
    this.component = new Redemption.Component('header');
}

HeaderComponent.prototype.create = function (redemption, rom, parentComponent) {
    this.component.getElement().innerHTML = 'Hello Redemption.js';
};

HeaderComponent.prototype.render = function (redemption, rom, parentComponent) {
    this.component.render(parentComponent);
};

