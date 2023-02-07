function loadData(url, callback)
{	
	const options = {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
	};

	fetch(url, options).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()


function populateList(plants)
{
	console.log(plants.data);
	
} //end of populateList, do not remove this line

function init(){
	loadData("http://localhost:3000/data",populateList);

	loadData("http://localhost:3000/api?endpoint=plants/1",populateList);
}

init();