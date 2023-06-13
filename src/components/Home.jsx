import React from 'react'
import bg_pencil from '../img/bg_pencil.jpeg'
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Home = () => {
    let navigate = useNavigate();
    const home_click = () => {
        navigate('/theory');
    }
    return (
        <div style={{ backgroundImage: `url(${bg_pencil})`, width: '100%', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed',position:'fixed' }}>
            <div className='home' id="home">
                <Zoom left>
                    <h2 className="home3" id="home3">Let's Learn </h2>
                </Zoom>
                <br />
                <Zoom left>
                    <h2 className="home2" id="home2" data-text=" Probability. . ."> Probability. . .</h2>
                </Zoom>

            </div>
            <br />
            <Zoom left>
                <div className="button10" id="button10">
                    <button onClick={home_click}><span className='span1'></span>Let's Start</button>
                </div>
            </Zoom>
        </div>
    )
}

export default Home