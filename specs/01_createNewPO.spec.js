require ("dotenv").config();
var generalData = require("../data/generalData.json")
var standardZPO = require("../data/standardZPO.json");
var listReport = require("../module/listReport.js");
var objectPage = require("../module/objectPage.js");
var elementsData = require("../data/elementsData.json");

describe("Create a new Purchase Order", function () {

    it("Step 01: Open the system and navigate to Purchase Order app", async function(){
       await ui5.navigation.navigateToApplication(generalData.appName);
        await util.browser.sleep(10000);
    });

    it("Step 02: App login", async function() {
        await ui5.session.login(process.env.USER, process.env.PASSWORD);
        await util.browser.sleep(10000);
    });
  
    it("Step 03: Click Create on the Listreport page", async function() {
        // const selector = {
        //     "elementProperties": {
        //         "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        //         "metadata": "sap.m.Button",
        //         "id": "*addEntry"
        //     }
        //         };
        // await ui5.userInteraction.click(selector);
        // await util.browser.sleep(30000);
        await listReport.clickLR(
            elementsData.button.createFromLR.metadata,
            elementsData.button.createFromLR.id
        );
        await util.browser.sleep(10000);
    });

    it("Step 04: Purchase order Type - Standard Z-PO (ZNB)", async function() {
//      const selector = {    
//     "elementProperties": {
//         "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
//         "metadata": "sap.m.ComboBox",
//         "id": "*GeneralInformationFacet1::PurchaseOrderType::Field-comboBoxEdit"
//     }
// };
        // actualValue = "Standard Z-PO (ZNB)"
        await objectPage.fillInFields(
            elementsData.combobox.purchaseOrderType.type,
            elementsData.combobox.purchaseOrderType.metadata,
            elementsData.combobox.purchaseOrderType.id,
            standardZPO.generalInformation.purchaseOrderType
        );
        // await ui5.userInteraction.selectComboBox(selector, standardZPO.generalInformation.purchaseOrderType);
    });

 it("Step 05: Choose Supplier - 50000040", async function() {
//     const selector = {
//         "elementProperties": {
//             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
//             "metadata": "sap.m.Input",
//             "id": "*GeneralInformationFacet1::Supplier::Field-input"
//         }
//     };

//     await ui5.userInteraction.clearAndFill(selector, standardZPO.generalInformation.supplier);
//  });
await objectPage.fillInFields (
    elementsData.field.supplier.type,
    elementsData.field.supplier.metadata,
    elementsData.field.supplier.id,
    standardZPO.generalInformation.supplier
);
});

 it("Step 06: Choose currency - EUR", async function() {
    // const selector = {
    //     "elementProperties": {
    //         "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //         "metadata": "sap.m.Input",
    //         "id": "*GeneralInformationFacet1::DocumentCurrency::Field-input"
    //     }
    // };
   
    // await ui5.userInteraction.clearAndFill(selector, standardZPO.generalInformation.currency);
    await objectPage.fillInFields(
        elementsData.field.currency.type, 
        elementsData.field.currency.metadata,
        elementsData.field.currency.id,
        standardZPO.generalInformation.currency   
    );
    await common.userInteraction.pressEnter();
    await util.browser.sleep (5000);
 });

 it("Step 07: Choose Purchasing Group - 001", async function() {
    // const selector = {
    //     "elementProperties": {
    //         "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //         "metadata": "sap.m.Input",
    //         "id": "*GeneralInformationFacet2::PurchasingGroup::Field-input"
    //     }
    // };
    
    // await ui5.userInteraction.clearAndFill(selector, standardZPO.generalInformation.purchasingGroup);
    // await common.userInteraction.pressEnter();
    await objectPage.fillInFields(
        elementsData.field.purchasingGroup.type, 
        elementsData.field.purchasingGroup.metadata,
        elementsData.field.purchasingGroup.id,
        standardZPO.generalInformation.purchasingGroup   
    );
    await common.userInteraction.pressEnter();
 });

 it("Step 08: Choose Purchasing Organization Name - 1010", async function() {
    // const selector = {
    //     "elementProperties": {
    //         "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //         "metadata": "sap.m.Input",
    //         "id": "*GeneralInformationFacet2::PurchasingOrganization::Field-input"
    //     }
    // };
   
    // await ui5.userInteraction.clearAndFill(selector, standardZPO.generalInformation.purchasingOrganization);
    await objectPage.fillInFields(
        elementsData.field.purchasingOrganization.type, 
        elementsData.field.purchasingOrganization.metadata,
        elementsData.field.purchasingOrganization.id,
        standardZPO.generalInformation.purchasingOrganization    
    );
    await common.userInteraction.pressEnter();
 });

 it("Step 09: Choose Company Code - 1010", async function() {
    // const selector = {
    //     "elementProperties": {
    //         "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //         "metadata": "sap.m.Input",
    //         "id": "*GeneralInformationFacet2::CompanyCode::Field-input"
    //     }
    // };
    
    // await ui5.userInteraction.clearAndFill(selector, standardZPO.generalInformation.companyCode);
    await objectPage.fillInFields(
        elementsData.field.companyCode.type, 
        elementsData.field.companyCode.metadata,
        elementsData.field.companyCode.id,
        standardZPO.generalInformation.companyCode   
    );
    await common.userInteraction.pressEnter();
});

it("Step 10: Navigate to the Item tab", async function () {
    // const selector = {
    //     "elementProperties": {
    //         "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //         "metadata": "sap.m.Button",
    //         "id": "*objectPage-anchBar-ui.ssuite.s2p.mm.pur.po.manage.st.s1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurchaseOrderTP--ItemsFacet::Section-anchor"
    //     }
    await objectPage.navigateTo (
        elementsData.button.items.metadata,
        elementsData.button.items.id
    );
    await util.browser.sleep (10000);
});
    
    var itemArr = standardZPO.items
    for (let [itemIndex, itemValue] of itemArr.entries()) {
    it ("Item " + itemValue.Item + " Add Purchase Order Item", async function () {
            await objectPage.AddItem(
                elementsData.button.createNewItem.metadata,
                elementsData.button.createNewItem.id
            );
        });      
    it ("Item " + itemValue.item + " Select Item Category - " + itemValue.itemCategory, async function () {
        await objectPage.fillInFields(
            elementsData.field.itemCategory.type,
            elementsData.field.itemCategory.metadata,
            elementsData.field.itemCategory.path,
            itemValue.itemCategory,
            itemValue.item
        );
    });  
    
    it ("Item " + itemValue.item + " Fill in material - " + itemValue.Materialaterial, async function () {
        await objectPage.fillInFields (
            elementsData.field.itemMaterial.type,
            elementsData.field.itemMaterial.metadata,
            elementsData.field.itemMaterial.path,
            itemValue.Material,
            itemValue.item
        );        
    }); 

    it ("Item " + itemValue.item + " Fill in quantity - " + itemValue.orderQuantity, async function () {
        await objectPage.fillInFields (
            elementsData.field.itemQuantity.type,
            elementsData.field.itemQuantity.metadata,
            elementsData.field.itemQuantity.path,
            itemValue.orderQuantity,
            itemValue.item
        );        
    });
    // it ("Item " + itemValue.item + " Navigate to item", async function () {
    //     await objectPage.navigateToItem (
    //         elementsData.button.navigateToItem.metadata,
    //         elementsData.button.navigateToItem.path,
    //         itemValue.item 
    //     );
    // });
};
//     it ("Item " + itemValue.item + " Click Apply", async function () {
//         await itemObjectPage.apply (
//             elementsData.button.applyItem.metadata,
//             elementsData.button.applyItem.id
//         );
//     });
// }
//     it ("Step 17: Click Save button", async function() {
//         await util.browser.sleep (5000);
//         await objectPage.saveObjectPage (
//             elementsData.button.createObjectPage.metadata,
//             elementsData.button.createObjectPage.id
//         );
//         await util.browser.sleep (5000);
     

    // await ui5.userInteraction.click(selector);

// it("Step 11: Add Purchase Order Item", async function () {
//     const selector = {
//         "elementProperties": {
//             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
//             "metadata": "sap.m.Button",
//             "id": "*ItemsFacet::addEntry"
//         }
//     };
//     await ui5.userInteraction.click(selector);
// });

// it("Step 12_01: Select Category selectbox - Standard", async function() {
//     // const selector = {
    //     "elementProperties": {
    //         "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //         "metadata": "sap.m.ComboBox",
    //         "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*"
    //     }
    // };
    // //actualValue = "Standard"
    //     await ui5.userInteraction.selectComboBox(selector, standardZPO.items[00010].itemCategory);
//     await objectPage.fillInFields(elementsData.field.itemCategory.type.
//         elementsData.field.itemCategory.metadata.
//         elementsData.field.itemCategory.path.
//         standardZPO.items[0010].itemCategory);
// });

// it("Step 12_01: Choose Material - WM-D03", async function() {
//     const selector = {
//         "elementProperties": {
//             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
//             "metadata": "sap.m.Input",
//             "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
//             "value": [{
//                 "path": "ManufacturerMaterial"
//             }]
//         }
//     };
// // const valueToEnter = "WM-D03";
// await ui5.userInteraction.clearAndFill(selector, standardZPO.items[00010].Material);
// });

// it("Step 12_02: Fill in Quantity - 10", async function() {
//     const selector = {
//         "elementProperties": {
//             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
//             "metadata": "sap.m.Input",
//             "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
//             "value": [{
//                 "path": "OrderQuantity"
//             }]
//         }
//     };
// const valueToEnter = "10";
// await ui5.userInteraction.clearAndFill(selector, standardZPO.items[00010].orderQuantity);
// });

// 





// it("Step 14: Fill in Quantity - 10", async function() {
//     const selector = {
//         "elementProperties": {
//             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
//             "metadata": "sap.m.Input",
//             "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
//             "value": [{
//                 "path": "OrderQuantity"
//             }]
//         }
//     };
// const valueToEnter = "10";
// await ui5.userInteraction.clearAndFill(selector, "10");
// });

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
// await util.browser.sleep (5000);
// await objectPage.saveObjectPage (
//     elementsData.button.createObjectPage.metadata,
//     elementsData.button.createObjectPage.id
// );
// await util.browser.sleep (5000);
});

it("Step 16: Get newly created PO ID", async function() {
    const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Title",
            "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
        }
    };
const purchaseOrderID = await ui5.element.getPropertyValue(selector, "text");
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