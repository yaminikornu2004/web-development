
const restaurantData = [
    {
        name: " Gong",
        category: "Chinese, Sushi, Asian, Momos, Beverages",
        priceFor2:1700 , 
        locality: " Balewadi High Street, Baner, Pune ",
        diningRating:4.9,
        diningReviewCount:1788,
        deliveryRating:4.3,
        deliveryRatingCount:1352,
        website: "https://www.zomato.com/pune/gong-baner",
        address: "Shop 22/23, Cummins India Office Campus, Balewadi High Street, Baner, Pune",
        phoneNo: "919000000000",
        latitude: "18.57047134",
        longitude:"73.77414856",
        knownFor1: "Chicken Minestrone Soup, Crab Ravioli, Ebi Tempura Roll, Prawn Dim Sums, Chocolate Dome, Asparagus Tempura",
        knownFor2: "Classy Place, Quality of Food, Amazing Interiors, Themed Decor, New Experience, Menu Options"
    },
    {
        name: " Burma Burma ",
        category: "Asian, Burmese, Bubble Tea, Salad, Tea, Desserts, Ice Cream, Beverages",
        priceFor2: 1500,
        locality: "Indiranagar, Bangalore",
        diningRating:4.9,
        diningReviewCount:2790,
        deliveryRating: 4.5,
        deliveryRatingCount:838,
        website: "https://www.zomato.com/bangalore/burma-burma-indiranagar-bangalore",
        address: "607, Ground Floor, 12th Main, Hal 2nd Stage, Indiranagar, Bangalore",
        phoneNo: "918043000000",
        latitude: "12.97039445",
        longitude: "77.6447133",
        knownFor1: "Food",
        knownFor2: "Service"
    }
    
];


function displayRestaurants() {
    const restaurantListDiv = document.getElementById('restaurant-list');
    restaurantData.forEach(restaurant => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');

        card.innerHTML = `
            <div class="restaurant-image">
                <img src="" alt="${restaurant.name} "></div>
                
            <div class="restaurant-details">
                <h2>${restaurant.name}</h2>
                <p><strong>Category:</strong> ${restaurant.category}</p>
                <p><strong>Price for 2:</strong> ₹${restaurant.priceFor2}</p>
                <p><strong>Location:</strong> ${restaurant.locality}</p>
                <p><strong>Dining Rating:</strong> ${restaurant.diningRating} (${restaurant.diningReviewCount} reviews)</p>
                <p><strong>Delivery Rating:</strong> ${restaurant.deliveryRating} (${restaurant.deliveryRatingCount} reviews)</p>
                <p><strong>Known For:</strong> ${restaurant.knownFor1}, ${restaurant.knownFor2}</p>
                <a href="${restaurant.website}" class="button" target="_blank">Visit Website</a>
            </div>
        `; 
        restaurantListDiv.appendChild(card);

    });
}


window.onload = displayRestaurants;
