import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

const config = {
    headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyAsiu-PZRr7Mi2Ec1GidLo9vMpGMKpZv5I",
        "X-Goog-FieldMask": [
            "places.photos",
            "places.displayName",
            "places.id",
        ],
    },
};

export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, config);
