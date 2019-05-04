import React from "react";
import {Link} from "react-router-dom";
import Links from '../../links';

/**
 * Represents the home page of Devstronomy application.
 */
const HomeContent = () => {
  return (
    <div className='homepage flexCenter'>
      <h1>Datasets</h1>
      <p>
        Devstronomy project provides <Link to='/datasets'>datasets</Link> related to astronomy in an accessible
        format (CSV, JSON, SQL). Currently, datasets of planets of our solar system and their natural satellites
        by {Links.jpl} are available.
      </p>

      <h1>Interactive Demo</h1>
      <p>
        Apart from the datasets themselves, there is an <Link to='/planets'>interactive demo</Link> of the data.
      </p>
    </div>
  );
};

export default HomeContent;
