import "./Info.css";

export default function Info({ infoHeading, infoText }) {
  return (
    <>
      <div className="info-container">
        <div className="info-card">
          <h4>{infoHeading}</h4>
          <p>{infoText}</p>
        </div>
      </div>
    </>
  );
}
