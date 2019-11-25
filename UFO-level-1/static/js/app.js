// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// BONUS: Refactor to use Arrow Functions!

function pullTable(data){
    tbody.html("");
data.forEach((ufoReport) => {
    const row = tbody.append("tr");
    for (key in ufoReport){
        const cell = tbody.append("td");
        cell.text(ufoReport[key]);
    }
});
}





// //**************FILTER SECTION*********************
//ADDING ROWS BELOW FROM 14-3-9 TO START WORKING ON FILTER

// Select the submit button


function filterClick(){

  // Prevent the page from refreshing
//d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  const inputElement = d3.select("#datetime");

  // Get the value property of the input element
  const inputValue = inputElement.property("value");
  let filteredData = tableData;
 // console.log(inputValue);
 // console.log(ufoSitings);
  if (inputValue){
    filteredData = filteredData.filter(sitingDate => sitingDate.datetime === inputValue);
    }
    pullTable(filteredData);
}
d3.selectAll("#filter-btn").on("click",filterClick);

pullTable(tableData);
//console.log(filteredData);

// //**************FILTER SECTION*********************




// Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function(ufoReport) {
  console.log(ufoReport);
});

// Step 2:  Use d3 to append one table row `tr` for each ufo report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  const row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each ufo report value
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

    for (key in ufoReport){
        console.log(key, ufoReport[key]); 
    }
});

// Step 4: Use d3 to append 1 cell per ufo report value (date/time, city, state, country, shape, and comment)
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

    for (key in ufoReport){
        console.log(key, ufoReport[key]); 
        // Append a cell to the row for each value in the ufo report object
        const cell = row.append("td");
    }
});

// Step 5: Use d3 to update each cell's text with
// ufo report values (date/time, city, state, country, shape, and comment)
    for (key in ufoReport){
        console.log(key, ufoReport[key]); 
        // Append a cell to the row for each value in the ufo report object
        const cell = tbody.append("td");
        cell.text(value);
    }

