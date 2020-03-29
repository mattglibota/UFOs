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

// handle click
function handleClick() {
    // grab date from html component
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // if date is selected, filter data table only by that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // call build table function on filtered data
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click",handleClick);
buildTable(tableData);