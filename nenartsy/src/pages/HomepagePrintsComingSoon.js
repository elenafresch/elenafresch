import Content from "../components/Content";
import GroupComponent from "../components/GroupComponent";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./HomepagePrintsComingSoon.css";

const HomepagePrintsComingSoon = () => {
  return (
    <div className="homepage">
      <div className="divider" />
      <div className="homepage-child" />
      <div className="homepage-item" />
      <div className="homepage-inner" />
      <div className="rectangle-div" />
      <div className="homepage-child1" />
      <div className="shop-now-wrapper">
        <div className="shop-now">Shop Now</div>
      </div>
      <div className="prints">PRINTS</div>
      <Content />
      <GroupComponent />
      <a className="nenartsy">NENARTSY</a>
      <a className="elena-fresch">Elena Fresch</a>
      <a className="label">ABOUT</a>
      <a className="label1">PRINTS</a>
      <a className="label2">GALLERY</a>
      <a className="label3">CONTACT</a>
      <FrameComponent2 />
      <section className="body">
        <FrameComponent1 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default HomepagePrintsComingSoon;
