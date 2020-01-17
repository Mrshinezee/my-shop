import React, { Fragment } from 'react';
import Navbar from './navbar/Navbar'
import { Button, ButtonToolbar } from 'react-bootstrap';
import shirt5 from '../assets/shirts/images-shirt5.png'
import shirt2 from '../assets/shirts/images-shirt2.png'
import shirt1 from '../assets/shirts/images-shirt1.png'
import banner from '../assets/banner1.png'
import './build.css';


function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="r1c0">
          <Navbar/>
        </div>
        <div className="r2c0">
        <div className="banner"><img src={banner} alt="banner" /></div>
        </div>
        <div className="r3c1">c</div>
        <div className="r3c2">
        <div className="first_item_row">
          <div className="item">
            <div className="item_image"><img src={shirt5} alt="shirt5" /></div>
            <div className="item_name">Men's Knitwear Offer</div>
            <div className="item_button">
              <Button variant="danger" size="sm">Buy now</Button>
            </div>
          </div>
          <div className="item">
            <div className="item_image"><img src={shirt2} alt="shirt2" /></div>
            <div className="item_name">Men's Knitwear Offer</div>
            <div className="item_button">
              <Button variant="danger" size="sm">Buy now</Button>
            </div>
          </div>
          <div className="item">
            <div className="item_image"><img src={shirt1} alt="shirt1" /></div>
            <div className="item_name">Men's Knitwear Offer</div>
            <div className="item_button">
              <Button variant="danger" size="sm">Buy now</Button>
            </div>
          </div>
          </div>
          <div className="second_item_row">
          <div className="item">
            <div className="item_image"><img src={shirt5} alt="shirt5" /></div>
            <div className="item_name">Men's Knitwear Offer</div>
            <div className="item_button">
              <Button variant="danger" size="sm">Buy now</Button>
            </div>
          </div>
          <div className="item">
            <div className="item_image"><img src={shirt2} alt="shirt2" /></div>
            <div className="item_name">Men's Knitwear Offer</div>
            <div className="item_button">
              <Button variant="danger" size="sm">Buy now</Button>
            </div>
          </div>
          <div className="item">
            <div className="item_image"><img src={shirt1} alt="shirt1" /></div>
            <div className="item_name">Men's Knitwear Offer</div>
            <div className="item_button">
              <Button variant="danger" size="sm">Buy now</Button>
            </div>
          </div>
          </div>
        </div>
        <div className="r4c0">e</div>
        <div className="r5c0">f</div>
        <div className="r6c0">g</div>

      </div>
    </Fragment>
  );
}

export default App;
