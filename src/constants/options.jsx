export const SelectTravelList = [
    {
        id: 1,
        title: "Just Me",
        desc: "Solo traveler in exploration",
        icon: "✈️",
        people: "1",
    },
    {
        id: 2,
        title: "A couple",
        desc: "Two travelers in tandem",
        icon: "🥂",
        people: "2 People",
    },
    {
        id: 3,
        title: "Family",
        desc: "A group of adventurers",
        icon: "🏠",
        people: "3 to 5 People",
    },
    {
        id: 4,
        title: "Friends",
        desc: "A bunch of thrill seekers",
        icon: "🚤",
        people: "5 - 10 People",
    },
];

export const SelectBudgetOptions = [
    {
        id: 1,
        title: "Cheap",
        desc: "Stay conscious of costs",
        icon: "💵",
    },
    {
        id: 2,
        title: "Moderate",
        desc: "Keep cost on the average side",
        icon: "💸",
    },
    {
        id: 3,
        title: "Luxury",
        desc: "Don't worry about the cost",
        icon: "💰",
    },
];

export const AI_Prompt =
    "Generate Travel Plan for location: {location}, for {totalDays} days for {traveller} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itenerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format";
