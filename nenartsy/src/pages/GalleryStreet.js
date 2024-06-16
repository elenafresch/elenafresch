import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import "./GalleryStreet.css";

const GalleryStreet = () => {
  return (
    <div className="gallery-street">
      <main className="gallery-street-inner">
        <FrameComponent4 labelTextDecoration="unset" />
      </main>
      <div className="gallery-street-child" />
      <div className="gallery-street-item" />
      <div className="gallery-street-child1" />
      <div className="shop-now-container">
        <div className="shop-now1">Shop Now</div>
      </div>
      <FrameComponent3 />
      <div className="divider-wrapper">
        <div className="divider1" />
      </div>
      <div className="rectangle-parent">
        <div className="frame-item" />
        <div className="gallery-header">
          <div className="gallery-title">
            <h1 className="gallery">GALLERY</h1>
            <div className="gallery-subtitle">
              <div className="label18">Street</div>
            </div>
          </div>
        </div>
        <div className="frame-parent">
          <div className="rectangle-group">
            <img
              className="frame-inner"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
            <img
              className="frame-inner"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
            <img
              className="frame-inner"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
          </div>
          <div className="rectangle-container">
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/rectangle-210@2x.png"
            />
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/rectangle-212@2x.png"
            />
          </div>
          <div className="rectangle-group">
            <img
              className="frame-inner"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
            <img
              className="frame-inner"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
            <img
              className="frame-inner"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
          </div>
          <div className="rectangle-container">
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/rectangle-210@2x.png"
            />
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/rectangle-212@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryStreet;
