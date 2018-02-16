import React, {Component } from 'react';

class Packages extends Component {
render() {
  return (
      <div className="packages page">
        <h1> Our Packages </h1>

        <div className="box">
        <h3>Squeaky Clean </h3>
  			<p>Exterior only wash, clear coat shine, clear coat protectant, and underbody wash.  </p>
  			<p> $25 </p>
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="SED4SVYCZTFZ6"/>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
        </form>

        </div>

        <div className="box">
        <h3>Squeaky Deluxe </h3>
        <p> Full service wash, clear coat shine, clear coat protectant, underbody wash, tire shine and rim cleaning. </p>
        <p> $50 </p>
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="AJDH78UK9SSAA"/>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
        </form>

        </div>

        <div className="box">
        <h3>Squeaky Ultimate </h3>
        <p>Full service wash, mat shampoo, clear coat protectant,  clear coat shine, coat protectant, underbody wash, tire shine, rim cleaning, polish wax, interior fragrance  .</p>
        <p>$100</p>
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="M4X8REGCZ8S22"/>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
        </form>

        </div>		

      </div>
    );
  }
}

export default Packages;