var { Given, When, Then } = require('@cucumber/cucumber')

Given('Open the below url', function (dataTable) {
    var data = dataTable.hashes()[0];
    console.log("Index 0 :" + data['URL'])
    data = dataTable.hashes()[1];
    console.log("Index 1 :" + data['URL'])

    console.log("<--------Another Method------->")
    const data1 = dataTable.hashes();
    console.log("Index 0 :" + data1[0].URL)
    console.log("Index 1 :" + data1[1].URL)

    return console.log(" Check the above output");
});