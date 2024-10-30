import { Carousel } from "antd";
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
const contentStyle = {
  width: "100%",
  height: "360px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "10px",
  marginTop: "10px",
  marginBottom: "40px",
};

const HeroSection = () => {
  return (
    <Carousel autoplay>
      <div>
        <img
          style={contentStyle}
          src={img1}
          alt="banner-image"
          loading="lazy"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src={img2}
          alt="banner-image"
          loading="lazy"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src={img3}
          alt="banner-image"
          loading="lazy"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src={img4}
          alt="banner-image"
          loading="lazy"
        />
      </div>
    </Carousel>
  );
};

export default HeroSection;
