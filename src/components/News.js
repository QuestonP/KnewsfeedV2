import { useState , useEffect } from "react";
import FetchNews from "../functions/fetchNews";
function News() {

  return (
    <div className="news-container row d-flex">
      
      <div className="col-12">
        <FetchNews /> 
      </div>

    </div>
  );
};


export default News;