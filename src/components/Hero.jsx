import "./Hero.css";
export default function Hero({ heroHeading, heroSubHeading, heroText }) {
  return (
    <>
      <div className="hero-div">
        <h3 className="hero-heading">{heroHeading}</h3>
        <h2 className="hero-subheading">{heroSubHeading}</h2>
        <p className="hero-paragraph">{heroText}</p>
      </div>
    </>
  );
}
