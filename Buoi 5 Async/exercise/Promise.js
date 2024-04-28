function fetchData() {
    const rawData = [
        { id: 0, title: "Callbacks", content: "Callbacks Hell" },
        { id: 1, title: "Promises", content: "Promises Chain" },
        { id: 2, title: "Async/Await", content: "Async/Await" },
    ];
    // TODO: return the raw data

    return new Promise((resolve) => {
        resolve(rawData)
    })
    // the same
    // return Promise.resolve(rawData)
}

function processData(data) {
    // TODO: Filter out and return posts with id greater than 1

    return data.filter(item => item.id > 1)
}

function saveData(data) {
    /* 
    TODO: Loop through all the elements and print to the console.
    Finally resolve with message "Data saved successfully"
    */

    return new Promise((resolve) => {
        data.forEach(item => {
            console.log(item.title, item.content);
        })

        resolve("Data saved successfully")
    })
}

// Execute the workflow
fetchData()
    .then((processedData) => processData(processedData))
    .then((filteredData) => saveData(filteredData))
    .then((message) => console.log(message))
    .catch((error) => console.error("Error:", error));
