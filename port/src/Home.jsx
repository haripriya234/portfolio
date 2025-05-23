import './Home.css';
import Lottie from 'lottie-react';
import girl from './assets/girl.json';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <>

    <div id="first">
        


      <div className="text-block">
        <h1 id="head1">
          <Typewriter
            words={["Hello World!", "I'm Hari Priya Renganathan.", "Feel Home."]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        
      </div>
      
      <div id="ani">
        <Lottie 
          animationData={girl} 
          loop={true} 
          autoplay={true} 
          style={{ height: 400, width: 400 }} 
        />
      </div>
    </div>
    </>
  );
}

export default Home;
