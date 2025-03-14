import "./Address.css";
export default function Address({ addressHeader, addressText }) {
  return (
    <>
      <div className="address-div">
        <ul>
          <li>
            {addressHeader}
            <span>
              <p>{addressText}</p>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
