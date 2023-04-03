import Slider from "./Slider";
import Card from "./Card";

export default function Portfolio() {
  return (
    <>
      <h3>Articles</h3>
      <Slider>
        <Card
          key="Rhombus Systems"
          title="Rhombus Systems"
          sub="Modern video security and IoT sensor platform for enhanced operations."
          img="rhombus.png"
          color="linear-gradient(90deg,#3c87ec,#46cce1)"
          href="/rhombus-systems"
        />
        <Card
          key="WProducts"
          title="WooProducts"
          sub="The only app that lets you add products with product images to your WooCommerce store!"
          img="wooproducts.png"
          color="#2f1b4c"
          href="/wproducts"
        />
        <Card
          key="Carbon Native"
          title="Carbon Native"
          sub="A set of UI components for building React Native apps."
          img="carbon-native.png"
          color="#ff704c"
          href="carbon-native"
        />
      </Slider>
      <style jsx>{`
        h3 {
          margin-left: 1.5vw;
          border-bottom: 2px solid var(--foreground);
          padding: 0;
          margin-bottom: 2vh;
          margin-top: 2vh;
          display: inline-block;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}
