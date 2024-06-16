import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "", labelTextDecoration }) => {
  const elenaFreschStyle = useMemo(() => {
    return {
      textDecoration: labelTextDecoration,
    };
  }, [labelTextDecoration]);

  return (
    <section className={`rectangle-parent20 ${className}`}>
      <div className="frame-child59" />
      <div className="nenartsy-parent4">
        <a className="nenartsy7">NENARTSY</a>
        <div className="elena-fresch-container">
          <a className="elena-fresch7" style={elenaFreschStyle}>
            Elena Fresch
          </a>
        </div>
      </div>
      <nav className="frame-nav">
        <a className="label135">HOME</a>
        <a className="label135">ABOUT</a>
        <a className="label135">PRINTS</a>
        <div className="label-parent29">
          <a className="label138">GALLERY</a>
          <div className="frame-child60" />
        </div>
        <a className="label135">CONTACT</a>
      </nav>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,

  /** Style props */
  labelTextDecoration: PropTypes.any,
};

export default FrameComponent4;
