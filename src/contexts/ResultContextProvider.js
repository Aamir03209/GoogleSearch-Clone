import React, { createContext,useContext,useState } from "react";
import axios from "axios";
const ResultContext=createContext();
//const baseUrl='https://google-search72.p.rapidapi.com';
export const ResultContextProvider=({children})=>{
    const[results,setResults]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const[searchTerm,setSearchTerm]=useState('Javascript Mastery');

    const getResults = async (url) => {
      setIsLoading(true);
      try {
          const response = await fetch(`${baseUrl}${url}`, {
            method: 'GET',

              headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_GOOGLE_SEARCH_API,
                  'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
              }
          });
  
          if (response.status !== 200) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log(data);
          setResults(data);
      } catch (error) {
          console.error('Error fetching results:', error);
      } finally {
          setIsLoading(false);
      }
  };
  
    return(
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
          {children}
        </ResultContext.Provider>
    )
}
export const useResultContext=()=>useContext(ResultContext)