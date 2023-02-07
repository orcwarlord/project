export function loadData(url, callback)
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





// function populateList(plants)
// {
// 	console.log(plants.data);
	
// } //end of populateList, do not remove this line

// function init(){
// 	loadData("http://localhost:3000/data",populateList);

// 	loadData("http://localhost:3000/api?endpoint=plants/1",populateList);
// }

// init();


// function createHandler(plant)
// {
// 	//this function uses a closure to associate data with a hyperlink
// 	return function(){
// 		//stores the id value into web storage
// 		sessionStorage.setItem("id",game.id);
// 	}
// }

// const gamesFragment = document.createDocumentFragment();
	// games.results.forEach(function(game){
	// 	const newLi=document.createElement("li");
	// 	const newLink=document.createElement("a");
	// 	newLink.textContent=game.name;
	// 	console.log(game.name);
	// 	//adds a querystring to the URL e.g. details.html?id=2
	// 	newLink.setAttribute("href","details.html?id="+game.id);
	// 	newLink.addEventListener("click", createHandler(game), false)
	// 	newLi.appendChild(newLink);
	// 	gamesFragment.appendChild(newLi);
	// })
	// const gamesList=document.querySelector("#games-list");
	// gamesList.appendChild(gamesFragment);