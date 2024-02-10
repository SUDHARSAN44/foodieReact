 import MockData from '../resource/json/RestaurantData.json'

export class RestaurantService {
    static restaurantData = null;

    static async fetchRestaurantsData() {
        try {
            RestaurantService.restaurantData = MockData
        }
        catch (err) {
            throw err
        }

        let restaurantList = []

        try {
            if (!RestaurantService.restaurantData) {
                await RestaurantService.fetchRestaurantsData()
            }

            RestaurantService.restaurantData.forEach(restaurant => {
                let restaurantData = {
                    id:restaurant.id,
                    thumbnail_image:restaurant.thumbnail_image,
                    name:restaurant.name,
                    cuisines:restaurant.cuisines,
                    reviews:restaurant.reviews

                }
                restaurantList.push(restaurantData)
            });
        }
        catch (err) {
            throw err
        }

        return restaurantList
    }

    
}