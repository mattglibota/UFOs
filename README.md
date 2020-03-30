# UFO Sightings
## Module 11 Challenge

### Summary

The purpose of the challenge project was to dynamically filter a table based on inputs located on the page. These inputs are able to be added or removed and the table will display the appropriate data. 

This dynamic filter is accomplished in two steps:
1) **Creating and maintaining a filter object that only contains the active filters**. The function **updateFilters** in app.js performs this step. It involves looking at each input element with d3 and selecting the value property. If the value is NOT blank, then it will add a corresponding key/value pair to the filter object. If it is blank, then that key/value pair is deleted from the object. The code to delete the blank key is important or else the filtering in step 2 would not work properly.

2) **Loop through the filter object then perform the filter function on the dataset, then rebuild table**. The function **filterTable** in app.js performs this step. Using code to transform each entry in the object into a list, we can then iterate through each key/value pair. I made the filter object key name match the dataset column names. I was then able to dynamically take the entry key, find that column in each row, then perform an equal-to operator with the entry value. It turned this function into a very simple 4 lines of code :). The last line calls the BuildTable function.

### Recommendation
1) **Make a max items per page of table**. This change would make the whole website look cleaner and make scrolling through the table less difficult
2) **Add Regex filters to look at duration and comments**. This change would allow users to extract certain key words from the comments and potentially find UFO sightings that were similar experiences.
