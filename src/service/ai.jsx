import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "YOUR_API_KEY"; // Never expose API keys in code

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseType: "json", // Use responseType instead of responseMimeType
    },
});

export const generateTravelPlan = async (location, days, travelers, budget) => {
    try {
        const prompt = `Generate a detailed travel plan for ${location} for ${days} days for ${travelers} with ${budget} budget. Include:
        {
          "hotels": [
            {
              "name": string,
              "address": string,
              "pricePerNight": number,
              "imageUrl": string,
              "coordinates": {"lat": number, "lng": number},
              "rating": number,
              "description": string
            }
          ],
          "itinerary": {
            "days": [
              {
                "day": number,
                "places": [
                  {
                    "name": string,
                    "details": string,
                    "imageUrl": string,
                    "coordinates": {"lat": number, "lng": number},
                    "ticketPrice": number,
                    "rating": number,
                    "bestTimeToVisit": string,
                    "timeRequired": string
                  }
                ]
              }
            ]
          }
        }`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return JSON.parse(response.text());
    } catch (error) {
        console.error("Error generating travel plan:", error);
        throw error;
    }
};
