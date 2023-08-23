import React from 'react';
import { useState } from 'react';
import '../components/styles.css';

function Home() {
    const [ selected, setSelected ] = useState('about');

    return (
        <div className='container'>
          <section id="about" className={selected === 'about' ? 'selected' : ''}>
            <h2>About Me</h2>
            <div className='about-content'>
              <img src="path/to/your/photo.jpg" alt="Shane Browning" />
              <p>
              My name is Shane Browning, and I am 28 years old and live in San Diego, CA.
              I am a Full Stack Web Developer who gained my knowledge from UCSD Extended Studies program. With a solid foundation in HTML, CSS, and Javascript, I've broadened my skills to include a range of technologies like Node.js, Express.js, SQL, Mongo.DB, and React. What I love about web development is the every day challenges we may run into, and finally the satisfaction with the 'aha' moment when I figure out the solution. I believe I truly found something I really enjoy, and can't wait for what the future holds in my new career!
              </p>
            </div>
          </section>
        </div>
      );
    }
    
    export default Home;