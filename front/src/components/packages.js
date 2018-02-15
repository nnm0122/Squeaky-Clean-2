import React, {Component } from 'react';

class Packages extends Component {
render() {
  return (
      <div className="packages page">
        <h1> Our Packages </h1>

        <div className="box">
        <h3>Squeaky Clean </h3>
  			<p>Exterior only wash, clear coat shine, clear coat protectant, and underbody wash.  </p>
  			<p> $45 </p>
        </div>

        <div className="box">
        <h3>Squeaky Deluxe </h3>
        <p> Full service wash, clear coat shine, clear coat protectant, underbody wash, tire shine and rim cleaning. </p>
        <p> $60 </p>
        </div>

        <div className="box">
        <h3>Squeaky Ultimate </h3>
        <p>Full service wash, mat shampoo, clear coat protectant,  clear coat shine, coat protectant, underbody wash, tire shine, rim cleaning, polish wax, interior fragrance  .</p>
        <p>$80</p>
        </div>		

      </div>
    );
  }
}

export default Packages;