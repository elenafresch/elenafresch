import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent18 ${className}`}>
      <div className="frame-child57" />
      <div className="about-content">
        <a className="about1">ABOUT</a>
      </div>
      <div className="about-description">
        <div className="about-paragraph">
          <h3 className="label133">
            <p className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat erat ut turpis pellentesque euismod. Nam in diam fringilla, maximus mauris sed, ornare nibh. Ut blandit, turpis et dignissim euismod, diam tellus pellentesque diam, maximus hendrerit lacus turpis sit amet justo. Ut efficitur, risus sed tincidunt elementum, lacus tortor sagittis leo, a iaculis felis nunc sit amet nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies condimentum sem, et scelerisque est semper vitae. `}</p>
            <p className="aliquam-aliquet-lacus1">
              Aliquam aliquet lacus a nisl sodales, nec pretium tortor mattis.
              Cras augue nisi, tempor vel tincidunt vel, interdum in tellus. Sed
              vel facilisis nibh, a euismod nunc. Ut gravida vel quam eu
              ullamcorper. Cras quam nulla, tincidunt ut leo et, aliquet
              sollicitudin mi. Vestibulum tempor euismod ligula, eget gravida
              lacus cursus sed. Sed sed elit luctus, porta mi at, faucibus
              velit. In ultrices facilisis nisl sit amet sollicitudin.
            </p>
          </h3>
        </div>
        <div className="image-container">
          <div className="image-container-child" />
          <img
            className="dsc-0082-1-icon1"
            loading="lazy"
            alt=""
            src="/dsc-0082-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
