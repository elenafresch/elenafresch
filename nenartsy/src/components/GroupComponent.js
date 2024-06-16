import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <footer className={`vector-group ${className}`}>
      <img className="frame-child54" alt="" src="/rectangle-202.svg" />
      <div className="footer-left">
        <div className="more-container">
          <h1 className="more6">MORE</h1>
        </div>
        <div className="footer-labels">
          <div className="label125">PRINTS</div>
          <a className="label126">GALLERY</a>
          <div className="label127">CONTACT</div>
          <a className="label128">PRIVACY</a>
          <div className="label129">SHIPPING</div>
          <div className="label129">REFUNDS</div>
        </div>
      </div>
      <div className="footer-description">
        <div className="label131">2024 © Elena Fresch</div>
      </div>
    </footer>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
