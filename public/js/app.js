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

function populatePlants(plants)
{
	
	
	const topList=document.querySelector(".plant-list");
	topList.innerHTML="";
	topList.classList.add("grid");
	topList.classList.add("grid-cols-1");
	topList.classList.add("md:grid-cols-3");
	topList.classList.add("lg:grid-cols-4");
	topList.classList.add("md:gap-4");
	topList.classList.add("h-full");
	const details=document.querySelector(".details-hidden");
	const content=document.querySelector(".content");
  console.log(plants.data);
	plants.data.forEach(function(plant){
		
		const newPlantArticle=document.createElement("article");
		newPlantArticle.classList.add("plant-card");
		newPlantArticle.classList.add("text-zinc-900");
		newPlantArticle.classList.add("bg-zinc-50");
		newPlantArticle.classList.add("mt-2");
		newPlantArticle.classList.add("flex");
		newPlantArticle.classList.add("flex-row");
		newPlantArticle.classList.add("md:flex-col");
		newPlantArticle.classList.add("lg:flex-col");
		
		const newPlantImageDiv = document.createElement("div");
		newPlantImageDiv.classList.add("w-3/5");
		newPlantImageDiv.classList.add("md:w-full");
		newPlantImageDiv.classList.add("overflow-hidden");
		newPlantImageDiv.classList.add("cursor-pointer");
		newPlantImageDiv.addEventListener("click", function() { 
			plantListSearch(plant);
			details.classList.toggle('hidden');
			content.classList.toggle('hidden'); }, false);

		const newPlantImage = document.createElement("img");
			newPlantImage.src = plant.image_url;
			newPlantImage.alt = plant.common_name;
			newPlantImage.classList.add("object-cover");
			newPlantImage.classList.add("h-full");
			
		newPlantImageDiv.appendChild(newPlantImage);

		const newPlantDetailsDiv = document.createElement("div");

		newPlantDetailsDiv.classList.add("p-2");
		newPlantDetailsDiv.classList.add("flex-grow-1");
		newPlantDetailsDiv.classList.add("w-full");

		const newPlantDetailName = document.createElement("a");
		newPlantDetailName.classList.add("font-bold");
		newPlantDetailName.classList.add("text-lg");
		newPlantDetailName.classList.add("block");
		newPlantDetailName.href = "javascript:void(0)";
		newPlantDetailName.classList.add("cursor-pointer");
		newPlantDetailName.addEventListener("click", function() { 
			plantListSearch(plant);
			details.classList.toggle('hidden');
			content.classList.toggle('hidden');}, false);
		newPlantDetailName.textContent=plant.common_name;

		// const newPlantPlatforms = document.createElement("ul");
		// newPlantPlatforms.classList.add("category-ul");
		
		// plant.platforms.forEach(function(platform){
		// 	const newPlantPlatformsLi = document.createElement("li");
		// 	newPlantPlatformsLi.classList.add("category-li");
		// 	newPlantPlatformsLi.textContent = platform.platform.name;
		// 	newPlantPlatformsLi.innerHTML += "&nbsp;"
		// 	newPlantPlatforms.appendChild(newPlantPlatformsLi);
		// })
		
		// const newPlantRelease = document.createElement("p");
		// newPlantRelease.textContent = getDateString(plant.released);

		// const newPlantGenres = document.createElement("ul");
		// newPlantGenres.classList.add("category-ul");

		// plant.genres.forEach(function(genre){
		// 	const newPlantGenresLi = document.createElement("li");
		// 	newPlantGenresLi.classList.add("category-li");
		// 	newPlantGenresLi.textContent = genre.name;
		// 	newPlantGenresLi.innerHTML += "&nbsp;"
		// 	newPlantGenres.appendChild(newPlantGenresLi);
		// })

		// const newPlantScore = document.createElement("div")
		// newPlantScore.classList.add("flex");
		// newPlantScore.classList.add("flex-row");
		// newPlantScore.classList.add("justify-between");
		// newPlantScore.classList.add("items-center");
		// newPlantScore.classList.add("text-sm");
		// newPlantScore.classList.add("pt-3");

		// const newIconPara = document.createElement("p");
		// 	const newIconIcon = document.createElement("i");
		// 	newIconIcon.classList.add("fa");
		// 	newIconIcon.classList.add("fa-star");
		// 	newIconIcon.classList.add("fa-lg");
		// 	newIconIcon.classList.add("text-yellow-500");
		// 	const textNode = document.createTextNode(`${plant.rating} (${plant.ratings_count} reviews)`);
	
		// 	newIconPara.appendChild(newIconIcon)
		// 	newIconPara.appendChild(textNode)

		// 	newPlantScore.appendChild(newIconPara)
		
		// const existing = checkMyPlants(plant.id);

		// if(existing){
		// 	const currentPage = window.location.pathname;
			
		// 	const newIconPara = document.createElement("p");
		// 	if (currentPage === '/myplants.html') {
		// 		// const newIconPara = document.createElement("p");
		// 		const newIconLink = document.createElement("a");
		// 		newIconLink.href = "javascript:void(0)";
		// 		newIconLink.addEventListener("click", function() { 
		// 			removeMyPlant(plant.id);
		// 		}, false);
		// 		const newIconIcon = document.createElement("i");
		// 		newIconIcon.classList.add("fa");
		// 		newIconIcon.classList.add("fa-times");
		// 		newIconIcon.classList.add("text-3xl");
		// 		newIconIcon.classList.add("md:text-6xl");
		// 		newIconIcon.classList.add("text-yellow-500");

		// 		newIconLink.appendChild(newIconIcon)

		// 		newIconPara.appendChild(newIconLink)

		// 		newPlantScore.appendChild(newIconPara)
				
		// 	} else {
				
		// 		const newIconIcon = document.createElement("i");
		// 		newIconIcon.classList.add("fa");
		// 		newIconIcon.classList.add("fa-heart");
		// 		newIconIcon.classList.add("text-3xl");
		// 		newIconIcon.classList.add("md:text-6xl");
		// 		newIconIcon.classList.add("text-yellow-500");

		// 		newIconPara.appendChild(newIconIcon)

		// 		newPlantScore.appendChild(newIconPara)				
		// 	}
		// } else {

		// 	const newIconPara = document.createElement("p");
		// 	const newIconLink = document.createElement("a");
		// 		newIconLink.href = "javascript:void(0)";
		// 		newIconLink.addEventListener("click", function() { 
		// 			addMyPlant(plant.id);
		// 		}, false);
		// 		newIconLink.classList.add("btn");
		// 		newIconLink.classList.add("btn-link");
				
		// 		const textNode = document.createTextNode("ADD");
		// 		newIconLink.appendChild(textNode);

		// 		newIconPara.appendChild(newIconLink)

		// 		newPlantScore.appendChild(newIconPara)
		// }
		
		newPlantDetailsDiv.appendChild(newPlantDetailName);
		// newPlantDetailsDiv.appendChild(newPlantPlatforms);
		// newPlantDetailsDiv.appendChild(newPlantRelease);
		// newPlantDetailsDiv.appendChild(newPlantGenres);
		// newPlantDetailsDiv.appendChild(newPlantScore);

		
		newPlantArticle.appendChild(newPlantImageDiv);
		newPlantArticle.appendChild(newPlantDetailsDiv);

		topList.appendChild(newPlantArticle);	

		
	 });

	
	
} //end of populatePlants, do not remove this line

function init(){
	loadData("http://localhost:3000/data",populateList);

	loadData("http://localhost:3000/api?endpoint=plants/1",populateList);

  loadData("http://localhost:3000/api?endpoint=plants",populatePlants);
}

init();



// if (currentPage === '/games.html' || currentPage === '/mygames.html') {
	
	const searchInput = document.querySelector("#plant-search");
	// const nameSort = document.querySelector("#sort-by");
	// const platformFilter = document.querySelector("#platform-filter");

	searchInput.addEventListener("input", () => performSearch(searchInput));
	// nameSort.addEventListener("change", () => performSearch(searchInput, nameSort, platformFilter));
	// platformFilter.addEventListener("change", () => performSearch(searchInput, nameSort, platformFilter));

// } 

  let timeoutId;

function performSearch(searchInput){
	const searchValue = searchInput.value;
	const searchWords = searchValue.split(" ");
  	const searchQuery = searchWords.join("+");

    console.log(searchQuery);


	// const sortValue = nameSort.value;
	
	// const platformValue = platformFilter.value;
	// let platFilt
	// if(platformValue==""){
	// 	platFilt = "";
	// } else {
	// 	platFilt = `&platforms=${platformValue}`
	// }
	
	// let filter = `&search='${searchQuery}'`;
	// const currentPage = window.location.pathname;

	// if (currentPage === '/mygames.html') {
		
	// 	myGames=getMyGames();
		
	// 	const searchString = myGames.join(',');
		
	// 	filter += `&ids=${searchString}`
		
	// } 

  // loadData(`http://localhost:3000/search?endpoint=${searchQuery}`,populatePlants);

  clearTimeout(timeoutId);
  
  timeoutId = setTimeout(() => {
  
  
  loadData(`http://localhost:3000/search?endpoint=plants&searchQuery=${searchQuery}`,populatePlants);
  }, 500);
	// loadData(`https://rawg-video-games-database.p.rapidapi.com/games?${filter}&search_exact=true&key=2e5072210c754f0f951b577972c160ba&page_size=40`,populateTopGames);
}