import {useState} from "react";
import banner from "../assets/banner.jpg";
import  Modal  from "../components/Modal";
import "./About.css"
function About() {
  const [openModal, setOpenModal] = useState(false);
  return (

    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${banner})` }} 
        >

      </div>
      
      <div className="aboutBottom">
        <h3>Travel with US</h3>
        <p>
        “Travel is the main thing you purchase that makes you more extravagant”. We, at Travel with US, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.

We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.

Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of America and far-off terrains. We need you to observe sensational scenes that are a long way past your creative ability.
          
        </p>
        
        <div>
            <button 
            onClick={() => setOpenModal(true)} 
            className='modalButton'>
              CLICK ME
            </button>
            <Modal 
            open={openModal} 
            onClose={() => setOpenModal(false)} />
          </div>
      </div>
    </div>
  );
}

export default About;
