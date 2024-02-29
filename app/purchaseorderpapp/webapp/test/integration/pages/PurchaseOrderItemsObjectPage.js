sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'purchaseorderpapp',
            componentId: 'PurchaseOrderItemsObjectPage',
            contextPath: '/POs/Items'
        },
        CustomPageDefinitions
    );
});