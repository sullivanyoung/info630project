import { ReturnDocument } from "mongodb"

let restaurants

export default class RestaurantsDAO {
    static async injectDB(conn) {
        if(restaurants){
            return
        }
        try{
            restaurants = await conn.db(process.env.DATABASE).collection("restaurants")
        } catch (e) {
            console.error(
                `Unable to establish a connection handle in restaurantsDAO: ${e}`,
            )
        }
    }

    static async getRestaurants({
        filters = null,
        page = 0,
        restaurantsPerPage = 20,
    } = {}) {
        let query
        if(filters) {
            
        }
    }
}