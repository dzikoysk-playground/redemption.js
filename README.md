# Redemption.js
Amen.

#### Concept
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <script src="../dist/redemption.dev.js"></script>
    </head>
    <body>
        <script src="application/Application.js"></script>
    </body>
</html>
```
```javascript
var redemption = new Redemption();
redemption.enableModifications();

redemption.loadDependencies([
    './application/components/HeaderComponent.js',
    './application/components/ContentComponent.js']
);

redemption.onload(function () {
    redemption.initializeStructure({
        head: new HeadComponent(),
        content: new ContentComponent()
    });
    redemption.disableModifications();
});
```
```javascript
function HeaderComponent() {
    this.component = new Redemption.Component('header');
}

HeaderComponent.prototype.create = function (redemption, rom, parentComponent) {
    this.component.getElement().innerHTML = 'Hello Redemption.js';
};

HeaderComponent.prototype.render = function (redemption, rom, parentComponent) {
    this.component.render(parentComponent);
};

```

#### Repository structure

```
Redemption.js/
+--dist/                     Built sources
+--src/                      All sources of Redemption.js
+--test/                     Test sources
+--build.sh                  Build script
+--package.json              NPM file
```