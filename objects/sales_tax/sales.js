const salesTotalsByProvince = function(salesData) {
  let total = 0
  let tempObject = [...salesData];
  for (x = 0; x < tempObject.length; x++) {             // loops array through objects
    for (y = 0; y < tempObject[x].sales.length; y++) {  // loops through array elements of object.sales
      total += tempObject[x].sales[y];                  // totals all sales values in the array 
    }
    tempObject[x].sales = total;                        // reassigned the totales value to .sales
    total = 0;                                          // resets total for next object tally
  }
  return tempObject;
}

const addTaxByProvince = function(salesArray, taxObject) {
  for (x = 0; x < salesArray.length; x++) {                                 // loop - first object in salesData array 
    let tempTax = salesArray[x].sales * taxObject[salesArray[x].province];  // calculates tax
    let tax = { tax: tempTax };                                             // creates a tax object to add
    salesArray[x] = Object.assign(salesArray[x], tax);                      // adds the tax field to the object
  }
  return salesArray;                                                        // returns the new array with tax data
}  

const getNameArray = function(salesAndTaxArray) {
  let nameArray = [];
  for (x = 0; x < salesAndTaxArray.length; x++) {
    if (!nameArray.includes(salesAndTaxArray[x].name)) {
      nameArray.push(salesAndTaxArray[x].name);
    }
  }
  return nameArray;
}

const createOutputObject = function(salesAndTaxArray) {
  let nameArray = getNameArray(salesAndTaxArray);
  let outputObject = {};
  for (let x = 0; x < nameArray.length; x++) {
    let nameKey = nameArray[x]
    let nameObject = {[nameKey]: {"totalSales": 0, "totalTax": 0}};
    outputObject = Object.assign(outputObject, nameObject);
  }
  return outputObject
}

const salesAndTaxByName = function(salesAndTaxArray) {
  let outputObject = createOutputObject(salesAndTaxArray)
  for (x = 0; x < salesAndTaxArray.length; x++) {
    outputObject[salesAndTaxArray[x].name].totalSales += salesAndTaxArray[x].sales;
    outputObject[salesAndTaxArray[x].name].totalTax += salesAndTaxArray[x].tax;
    }
    return outputObject;
  }

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// operating code:

console.log("Inputs:");
console.log(companySalesData);
let newSalesData = salesTotalsByProvince(companySalesData);
let salesAndTaxData = addTaxByProvince(newSalesData, salesTaxRates);
console.log("Rolled Up Sales and Taxes:")
console.log(salesAndTaxByName(salesAndTaxData));


// Expected Output.
// {
//     Telus: {
//       totalSales: 1300
//       totalTaxes: 144
//     },
//     Bombardier : {
//       totalSales: 800
//       totalTaxes: 40
//     }
// }