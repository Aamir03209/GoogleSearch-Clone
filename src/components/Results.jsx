import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
   console.log(results.items)
  useEffect(() => {
    if(location.pathname==='/search'){
  getResults(`/search?q=${searchTerm}&num=20`);
    }
    else if(location.pathname==='/imagesearch'){
       getResults(`/imagesearch?q=${searchTerm}&num=20`);
    }
    else{
      getResults(`/search?q=${searchTerm}&num=20`);
    }
  }, [location.pathname,searchTerm]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
        {results?.items?.map(({ link, title }, index) => (
          <div key={index} className="md:w-2/5 w-full">
            <a href={link} target="_blank" rel="noreferrer">
              <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
            </a>
          </div>
        ))}
      </div>
      );
      case '/imagesearch':
        return(
          <div className="flex flex-wrap justify-center items-center">
          {results?.items?.map(({ contextLink,thumbnailImageUrl,title }, index) => (
            <a href={contextLink} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5 mx-10">
              <img src={thumbnailImageUrl} alt={title} style={{height:'500px',width:'500px'}} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
        );
      

};

}