import { useState, useEffect } from "react";
import "./TestimonySlider.css";
import quoteicon from "../assets/quoteicon.png";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "This company transformed our online presence with an amazing website!",
  },
  {
    name: "Jane Smith",
    position: "Marketing Director, StartupX",
    message:
      "Their IT solutions are top-notch. Our workflow has never been smoother.",
  },
  {
    name: "Michael Lee",
    position: "Founder, DevStudio",
    message: "A highly professional team with exceptional service quality!",
  },
];

export default function TestimonySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("slide-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("slide-in"); // Apply sliding effect
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimony-slider">
      <img src={quoteicon} alt="quote-icon" className="quote-icon" />
      <h2>Trusted by Our Clients</h2>

      <div key={currentIndex} className={`testimonial ${slideDirection}`}>
        <p className="message">"{testimonials[currentIndex].message}"</p>
        <h4 className="name">{testimonials[currentIndex].name}</h4>
        <p className="position">{testimonials[currentIndex].position}</p>
      </div>

      <div className="slider-controls">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => {
              setSlideDirection("slide-in");
              setCurrentIndex(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
