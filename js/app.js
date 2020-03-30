// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

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

// make object of filters

var filters = {};

function updateFilters() {

    // look at each input individually, if value is not blank, update object
    // if empty, then delete the key

    let date = d3.select("#datetime").property("value")
    if (date != "") {
        filters.DateTime = date
    }
    else {
        delete filters.DateTime
    }

    let city = d3.select("#city").property("value")
    if (city != "") {
        filters.City = city
    }
    else {
        delete filters.City
    }

    let state = d3.select("#state").property("value")
    if (state != "") {
        filters.State = state;
    }
    else {
        delete filters.State;
    }

    let country = d3.select("#country").property("value")
    if (country != "") {
        filters.Country = country;
    }
    else {
        delete filters.Country;
    }

    let shape = d3.select("#shape").property("value")
    if (shape != "") {
        filters.Shape = shape;
    }
    else {
        delete filters.Shape;
    }

    // call filterTable function to perform filtering of dataset
    filterTable();
};

function filterTable() {
    let filteredData = tableData;

    // use for each to loop through each entry in the new filters object
    Object.entries(filters).forEach(function(itemFilt){

        // then perform a filter on each row using the object key to
        // dynamically look up the column
        filteredData = filteredData.filter(row => row[itemFilt[0].toLowerCase()] == itemFilt[1]);
    })
    buildTable(filteredData);
}

// handle click
function handleClick() {
    // grab date from html component
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // if date is selected, filter data table only by that date
    if (date) {
        filteredData = filteredData.filter(row => rowdatetime === date);
    };

    // call build table function on filtered data
    buildTable(filteredData);
};

// run new function for challenge
d3.selectAll("#filter-btn").on("click",updateFilters);

buildTable(tableData);