var redemption = new Redemption();
redemption.enableModifications();

redemption.loadDependencies('./application/components/', [
    'HeaderComponent.js',
    'ContentComponent.js'
]);

redemption.onload(function () {
    redemption.initializeStructure({
        head: HeaderComponent,
        content: ContentComponent
    });

    redemption.disableModifications();
    redemption.render();
});