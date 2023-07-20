async function fetchData(){
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '7368b0cd38msh487ed335eef025dp1f7f28jsnde155adedf7c',
		    'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
	}
};


	const response = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Texas&minDate=2024-03-05&maxDate=2024-08-15&page=1', options);

    const result = await response.json()
	console.log('result', result);

    document.getElementById("concerts").innerHTML = record.data.map (item => '<li></li>').join('');

}
fetchData();