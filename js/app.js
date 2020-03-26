// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// simple JS statement
function printHello() {
    console.log("Hello there!");
};

// Build dynamic table
function buildTable(data) {
    // Clear any existing data
    tbody.html("");

    // Loop through objects in the data and append a new row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        
        // Loop through each field in the object and take the value
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });

};