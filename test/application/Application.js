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