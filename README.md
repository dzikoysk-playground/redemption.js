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
    './application/components/HeadComponent.js',
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

#### Repository structure

```
Redemption.js/
+--dist/                     Built sources
+--src/                      All sources of Redemption.js
+--test/                     Test sources
+--build.sh                  Build script
+--package.json              NPM file
```