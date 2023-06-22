require ("dotenv").config();

describe("Create a new Purchase Order", function (){

    it("Step 01: Open the system and navigate to Purchase Order app", async function(){
        await ui5.navigation.navigateToApplication("PurchaseOrder-manage");
    });

    it("Step 02: App login", async function() {
        await ui5.session.login(process.env.USER, process.env.PASSWORD);
    });

    it("Step 03: Click Create on the Listreport page", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                "metadata": "sap.ui.comp.smartfilterbar.SFBMultiInput",
                "id": "*listReportFilter-filterItemControl_BASIC-PurchaseOrder"
            }
        };
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined(references);
        await common.assertion.expectDefined(references.purchaseOrderNumber);
        // const selector = {
        //     "elementProperties": {
        //         "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        //         "metadata": "sap.m.ColumnListItem"
        //     }
        // };
        const valueToEnter = references.purchaseOrderNumber;
        util.console.log(references.purchaseOrderNumber);
        await ui5.userInteraction.clearAndFill(selector, references.purchaseOrderNumber);
        await common.userInteraction.pressEnter();
    });

    it("Step 04: Click Go button to execute report", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                "metadata": "sap.m.Button",
                "id": "*listReportFilter-btnGo"
            }
        };
    await ui5.userInteraction.click(selector);
});

it("Step 05: Open newly created purchase order", async function() {
    const references = browser.config.params.import.data["references"];
    common.assertion.expectDefined(references);
    await common.assertion.expectDefined(references.purchaseOrderNumber);
        
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.ColumnListItem"
        }
    };
    await ui5.userInteraction.click(selector);
});

it("Step 06: Validate purchase order", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Title",
            "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
        }
    };

    const references = browser.config.params.import.data["references"];
    common.assertion.expectDefined(references);
    await common.assertion.expectDefined(references.purchaseOrderNumber);
    await ui5.assertion.expectAttributeToBe(selector, "text", references.purchaseOrderNumber)
});

});