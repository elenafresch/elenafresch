import { memo } from "react";
import PropTypes from "prop-types";
import "./GalleryPreviewStreet.css";

const GalleryPreviewStreet = memo(({ className = "" }) => {
  return (
    <img
      className={`gallery-nested-images2 ${className}`}
      loading="lazy"
      alt=""
      src="/rectangle-209-1@2x.png"
    />
  );
});

GalleryPreviewStreet.propTypes = {
  className: PropTypes.string,
};

export default GalleryPreviewStreet;
