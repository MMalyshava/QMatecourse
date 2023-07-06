var listReport = function() {
    const viewNameLR = "sap.suite.ui.generic.template.ListReport.view.ListReport";
    this.clickLR = async function(metadata, id) {
        const selector = {
            "elementProperties": {
                "viewName": viewNameLR,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            }
        };
        await ui5.userInteraction.click(selector);
    }
    this.fillInFields = async function(metadata, id, value) {
        const selector = {
            "elementProperties": {
                "viewName": viewNameLR,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            }
        };
        await ui5.userInteraction.clearAndFill(selector, value);
    }
    this.selectPO = async function(metadata) {
        const selector = {
            "elementProperties": {
                "viewName": viewNameLR,
                "metadata": `${metadata}`
            }
        };
        await ui5.userInteraction.click(selector);
    }
}
module.exports = new listReport();