import axios from 'axios';


/**
 * Get API Key and Base Url from .env
 */
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/upcoming`;


const headers = {
  "X-RapidAPI-Key": apiKey,
  "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
};

/**
 * Fetching Movies per page
 * @param {*} page - next page to fetch from 
 * @returns A promise
 */
export const fetchData = async (page) => {
   
    try {
      const response = await axios.get(`${apiUrl}?page=${page}`, { headers });
      const data = response.data;
      //if there are still more pages
      if(data.next){
        return data.results;
      }
      return [];
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };