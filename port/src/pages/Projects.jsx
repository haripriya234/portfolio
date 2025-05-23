import { useState } from 'react';
import './Project.css';

function Projects() {
  const [slide, setSlide] = useState(0);

  const cardData = [
    { title: 'Lodge Management System', hoverText: 'A web-based application designed to streamline lodge operations, including room bookings, customer details, and payment records. Built using HTML, CSS, and JavaScript for the frontend, with SQL and XAMPP for backend data handling. The system offers a user-friendly interface and efficient data management for better operational control.' },
    { title: 'Expense Tracker Bot', hoverText: 'Project Two Details' },
    { title: 'Sport Shot Classification System', hoverText: 'Project Three Details' },
    { title: 'Capital Quest', hoverText: 'Project Four Details' },
    { title: 'Pet Adoption', hoverText: 'Project Five Details' },
    { title: 'Author Portfolio', hoverText: 'Project Six Details' }
  ];

  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(cardData.length / cardsPerSlide);
  const currentCards = cardData.slice(
    slide * cardsPerSlide,
    (slide + 1) * cardsPerSlide
  );

  const goLeft = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  const goRight = () => {
    if (slide < totalSlides - 1) setSlide(slide + 1);
  };

  return (
    <div className="projects-carousel">
      <button className="arrow left" onClick={goLeft} disabled={slide === 0}>
        ❮
      </button>

      <div className="card-container">
        {currentCards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-text">{card.title}</div>
            <div className='main'>
            <div className="card-hover-text">
  <div className="hover-text-content">
    <p>{card.hoverText}</p>
  </div>
  
            
        <button id='b1'>sx</button>
        </div>
        
</div>

          </div>
        ))}
      </div>

      <button
        className="arrow right"
        onClick={goRight}
        disabled={slide === totalSlides - 1}
      >
        ❯
      </button>
    </div>
  );
}

export default Projects;
