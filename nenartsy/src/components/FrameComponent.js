import GalleryPreviewFaces from "./GalleryPreviewFaces";
import GalleryPreviewPlaces from "./GalleryPreviewPlaces";
import GalleryPreviewStreet from "./GalleryPreviewStreet";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent19 ${className}`}>
      <div className="frame-child58" />
      <div className="gallery-content">
        <h1 className="gallery6">GALLERY</h1>
      </div>
      <div className="gallery-images">
        <GalleryPreviewFaces />
        <GalleryPreviewPlaces />
        <GalleryPreviewStreet />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
