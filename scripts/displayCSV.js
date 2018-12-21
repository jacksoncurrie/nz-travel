// Sets the place where the data will be placed
var result = document.getElementById('result');

// When Open File button is pressed
let openFile = () =>
{
    // Get the CSV file
    fetch('attractions.csv')
        // Get the text from the CSV
        .then(response => response.text())
        .then(text =>
        {
            // Split the text by each new line
            let data = text.split('\r\n');
            // Collect the first line as the headers
            let headings = data[0].split(',');
            // Remove the first line from the data
            data.splice(0, 1);

            // Reset the output HTML
            result.innerHTML = '';
            // Loop for each line in the file
            for(i of data)
            {
                // Split desciption separated by ""
                let values = i.split(/,"|",/);
                // Split the first values
                let apart = values[0].split(",");
                // Add description to array
                apart.push(values[1]);
                // Combine with last values split
                values = apart.concat(values[2].split(","));

                // create new object to store results
                let results = new Object();
                // Loop for each heading
                for(j in headings)
                {
                    // Add each value t othe heading relevant
                    results[headings[j]] = values[j];
                }
                // Use object to add each value from each heading specified to result output
                result.innerHTML += `
                    <a href="${results.link}" style="background-image:url(images/attractions/${results.image})" class="blocks">
                        <h3>${results.attraction}</h3>
                        <h4>${results.region}</h3>
                        <h4>Age: ${results.age}</h3>
                        <h4>Exersion: ${results.exersion}</h3>
                        <p>${results.description}</p>
                    </a>`;
            }
        // If no fetch is available
        }).catch(
            // Tell the user that fetch is not possible
            result.innerHTML = '<h3 id="error">This requires a server.<br>Please use Firefox or a local server.</h3>'
        );
}