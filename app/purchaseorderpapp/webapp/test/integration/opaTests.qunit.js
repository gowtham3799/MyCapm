sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'purchaseorderpapp/test/integration/FirstJourney',
		'purchaseorderpapp/test/integration/pages/POsList',
		'purchaseorderpapp/test/integration/pages/POsObjectPage',
		'purchaseorderpapp/test/integration/pages/PurchaseOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('purchaseorderpapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);