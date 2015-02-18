var saleitems_json = [{
    "itemname": "Clock",
    "imagesrc": "images/saleitems/clock.jpg",
    "saleprice": "40.33",  
    "regularprice": "60.50"
},
{
    "itemname": "Pillow",
    "imagesrc": "images/saleitems/pillow.jpg",
    "saleprice": "20.99",
    "regularprice": "50.00"
},
{
    "itemname": "Pumpkin Sugar",
    "imagesrc": "images/saleitems/pumpkinsugar.jpg",
    "saleprice": "9.99",
    "regularprice": "15.99"
},
{
    "itemname": "Snowman",
    "imagesrc": "images/saleitems/snowman.jpg",
    "saleprice": "5.99",
    "regularprice": "10.99"
},
{
    "itemname": "WoodWick Candle",
    "imagesrc": "images/saleitems/woodwickcandle.jpg",
    "saleprice": "8.99",
    "regularprice": "17.88"
},
{
    "itemname": "Throw Wool",
    "imagesrc": "images/saleitems/throw_wool.jpg",
    "saleprice": "40.99",
    "regularprice": "67.99"
},
{
    "itemname": "Throw Cotton",
    "imagesrc": "images/saleitems/throw.jpg",
    "saleprice": "25.99",
    "regularprice": "45.99"
}
];

var azureclient;

function insertSaleItems() {
    azureclient = new WindowsAzure.MobileServiceClient(
                   "https://raincheck.azure-mobile.net",
                   "IrNEXcWabnOAWjasDZVjAcBUDikVRx71"
               );

    azureclient.login("aad").then(function (response) {
        var raincheckTable = azureclient.getTable('SaleItems');
        for (var i = 0; i < saleitems_json.length; i++) {
            var obj = saleitems_json[i];            
            raincheckTable.insert(
                {
                    itemname: obj.itemname,
                    imagesrc:  obj.imagesrc,
                    saleprice: obj.saleprice,
                    regularprice: obj.regularprice
                }).then(function (response) {
                    console.log("Inserted item successfully. Item name = " + obj.itemname);
                }, function (error) {
                    console.log("Failed to insert item. Item name = " + obj.itemname);
                });
        }


    }, function (error) {
        console.log("error encountered during sign-in. Error: " + error.message);
    });
}
