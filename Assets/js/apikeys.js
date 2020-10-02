/** 
 * 
 *  COVID-19 TESTING SITES LOCATION,
 *  Finds the list of sites where testing is available
 *  website - https://developer.here.com/blog/finding-covid-19-testing-sites
 * 
 *  API EndPoint
 *  example - https://discover.search.hereapi.com/v1/discover?q=Covid&at=30.22,-92.02&limit=10&apikey={{APIKEY}}
 */ 

 const COVID_LOCATION_APIKEY = "lZLEGOEVL9DV9PZrgak4xPaYgxI8C3gtBlB6hWpY0Js";
 const COVID_LOCATION_ENDPOINT = "https://discover.search.hereapi.com/v1/discover";

/** 
 *  COVID-19 INFORMATION AND STATS
 *  Information about active cases, deaths etc for different regions
 *  website - https://covid-api.com/api/
 */ 

 const COVID_STATS_ENDPOINTS = {


    /**
     *  endpoint for local region
     */
    provinces: "https://covid-api.com/api/provinces/USA",
      /** 
      *    WORKING EXMAPLE - https://covid-api.com/api/reports?date=2020-04-16&q=US%20Alabama&iso=USA&region_name=US&region_province=Ala    ama&city_name=Autauga    
      */
     reports: "https://covid-api.com/api/reports?region_province=Alabama",

     /**
      *     total cases and deaths from all the regions available
      *     BASED ON DATE
      *     date {query} - The date of report in the format YYYY-MM-DD
      *     example, 2020-09-22
      *     WORKING EXAMPLE  -  https://covid-api.com/api/reports/total?date=2020-09-25
      */
     totalCases: "https://covid-api.com/api/reports/total"
   
 }; 

/** 
 * 
 *              GOOGLE MAPS API
 *  
 *         Generate maps for specifict test site near by user's location
 * 
 * 
 * 
 */ 
export {COVID_STATS_ENDPOINTS, COVID_LOCATION_APIKEY, COVID_LOCATION_ENDPOINT};

//website -https://developers.google.com/maps/documentation/embed
// TO GET MAP FOR A SPECIFIC TEST SITE  
 const GOOGLEAPIKEY = "AIzaSyA7mCsPnnmyqrG79LF96VdWSdXidtf8D0c";
// URL for an Maps Embed API request is as follows:
//  const GOOGLE_MAPS_ENDPOINT = "https://www.google.com/maps/embed/v1/place?key="

 // Example : https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Eiffel+Tower,Paris+France

 

// https://developers.google.com/maps/documentation/urls
// TO GET MAP FOR MULIPLES TEST SITES -- ****NO APIKEY NEEDED****  
// URL for an Maps Embed API request is as follows:
 const GOOGLE_MAPS_ENDPOINT = "https://www.google.com/maps/search/?api=1&query="

 // Example : https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393,+123+Main+St,MD,20874
 