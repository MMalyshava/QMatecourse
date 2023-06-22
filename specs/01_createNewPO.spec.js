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
                "metadata": "sap.m.Button",
                "id": "*addEntry"
            }
        };
        await ui5.userInteraction.click(selector);
        await util.browser.sleep(30000);
    });

    it("Step 04: Purchase order Type - Standard Z-PO (ZNB)", async function() {
     const selector = {    
    "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.ComboBox",
        "id": "*GeneralInformationFacet1::PurchaseOrderType::Field-comboBoxEdit"
    }
};
        actualValue = "Standard Z-PO (ZNB)"
        await ui5.userInteraction.selectComboBox(selector, actualValue);
    });

 it("Step 05: Choose Supplier - 50000040", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Input",
            "id": "*GeneralInformationFacet1::Supplier::Field-input"
        }
    };
    actualValue = "50000040";
    await ui5.userInteraction.clearAndFill(selector, 50000040);
 });

 it("Step 06: Choose currency - EUR", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Input",
            "id": "*GeneralInformationFacet1::DocumentCurrency::Field-input"
        }
    };
    actualValue = "EUR";
    await ui5.userInteraction.clearAndFill(selector, "EUR");
 });

 it("Step 07: Choose Purchasing Group - 001", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Input",
            "id": "*GeneralInformationFacet2::PurchasingGroup::Field-input"
        }
    };
    actualValue = "001";
    await ui5.userInteraction.clearAndFill(selector, "001");
    await common.userInteraction.pressEnter();
 });

 it("Step 08: Choose Purchasing Organization Name - 1010", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Input",
            "id": "*GeneralInformationFacet2::PurchasingOrganization::Field-input"
        }
    };
    actualValue = "1010";
    await ui5.userInteraction.clearAndFill(selector, "1010");
    await common.userInteraction.pressEnter();
 });

 it("Step 09: Choose Company Code - 1010", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Input",
            "id": "*GeneralInformationFacet2::CompanyCode::Field-input"
        }
    };
    actualValue = "1010";
    await ui5.userInteraction.clearAndFill(selector, "1010");
    await common.userInteraction.pressEnter();
});

it("Step 10: Navigate to the Item tab", async function () {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Button",
            "id": "*objectPage-anchBar-ui.ssuite.s2p.mm.pur.po.manage.st.s1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurchaseOrderTP--ItemsFacet::Section-anchor"
        }
    };
    await ui5.userInteraction.click(selector);
});

it("Step 11: Add Purchase Order Item", async function () {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Button",
            "id": "*ItemsFacet::addEntry"
        }
    };
    await ui5.userInteraction.click(selector);
});

it("Step 12: Select Category selectbox - Standard", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.ComboBox",
            "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*"
        }
    };
    actualValue = "Standard"
        await ui5.userInteraction.selectComboBox(selector, actualValue);
});

it("Step 13: Choose Material - WM-D03", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Input",
            "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
            "value": [{
                "path": "ManufacturerMaterial"
            }]
        }
    };
const valueToEnter = "WM-D03";
await ui5.userInteraction.clearAndFill(selector, "WM-D03");
});

it("Step 14: Fill in Quantity - 10", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Input",
            "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
            "value": [{
                "path": "OrderQuantity"
            }]
        }
    };
const valueToEnter = "10";
await ui5.userInteraction.clearAndFill(selector, "10");
});

it("Step 15: Create Document - Click on the Create button", async function() {
const selector = {
    "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Button",
        "id": "*activate"
    }
};
await common.userInteraction.pressEnter();
await ui5.userInteraction.click(selector);
});
it("Step 16: Get newly created PO ID", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Title",
            "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
        }
    };
const purchaseOrderID = await ui5.element.getPropertyValue(selector, "text");;
util.console.log(purchaseOrderID);
const userData = {
    "purchaseOrder": purchaseOrderID
};
browser.config.params.export.purchaseOrder = userData;

// use the references file
const references = browser.config.params.import.data["references"];
references.purchaseOrderNumber = purchaseOrderID;
});

it("Step17: Logging out", async function() {
    await ui5.session.logout();
});

});