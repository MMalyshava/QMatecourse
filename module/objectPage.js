var objectPage = function() {

    const viewName = "sap.suite.ui.generic.template.ObjectPage.view.Details";

    //Enter data field
    this.fillInFields = async function(type, metadata, id, value, index) {
if (type === "ID") {
    const selector = {
        "elementProperties": {
            "viewName": viewName,
            "metadata": `${metadata}`,
            "id": `*${id}*`
        }
    };
    await ui5.userInteraction.clearAndFill(selector, value);
}
else if (type === "ComboBox") {
    const selector = {
        "elementProperties": {
            "viewName": viewName,
            "metadata": `${metadata}`,
            "id": `*${id}*`
        }
    };
    await ui5.userInteraction.selectComboBox(selector, value, index);
 }
else if (type === "Item") {
    const selector = {
        "elementProperties": {
            "viewName": viewName,
            "metadata": `${metadata}`,
            "bindingContextPath": `/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='${index}'*`,
                    "value": [{
                        "path": `${id}`
                    }]
                }
            };
            await ui5.userInteraction.clearAndFill(selector, value);
}
    };
    this.AddItem = async function(metadata, id) {
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            }
        };
        await ui5.userInteraction.click(selector);
    };

    this.navigateTo = async function(metadata, id) {
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            }
        };
        await ui5.userInteraction.click(selector);
    };
    this.navigateToItem = async function(metadata, id, index) {
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "bindingContextPath": `/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='${index}'*`,
                "value": [{
                    "path": `*${id}*`
                }]
            }
        };
    this.navigateToItems = async function (metadata, id) {

            const selector = {
                "elementProperties": {
                    "viewName": viewName,
                    "metadata": `${metadata}`,
                    "id": `*${id}*`
                }
            };
        await ui5.userInteraction.click(selector);
    };
    this.saveObjectPage = async function(metadata, id) {
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            }
        };
        await ui5.userInteraction.click(selector);
    }
}};
module.exports = new objectPage();