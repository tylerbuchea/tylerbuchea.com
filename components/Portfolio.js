import Slider from "./Slider";
import Card from "./Card";

export default function Portfolio() {
  return (
    <>
      <h4>Companies</h4>
      <Slider>
        <Card
          key="Exiled Apes"
          title="Exiled Apes"
          sub="The first mint of the Degen Ape Academy, a historic collection of only 518 NFTs."
          img="exiled-logo.png"
          color="linear-gradient(162deg, #4e4e50 19%, #1c1c1c 97%)"
          href="https://twitter.com/ExiledApes"
        />
        <Card
          key="Solana Sanctuary"
          title="Solana Sanctuary"
          sub="The Sanctuary is a DAO dedicated to providing resources to Solana NFT communities that have been rugged."
          img="sanctuary.png"
          color="linear-gradient(162deg, #61f9c7 19%, #7499ff 97%)"
          href="https://twitter.com/SolanaSanctuary"
        />
        <Card
          key="Chicken Tribe"
          title="Chicken Tribe"
          sub="We're a storyline-driven brand, pairing art with digital+physical: games, products, and experiences."
          img="chickentribe.svg"
          color="linear-gradient(162deg, #b000ff 19%, #0368ff 97%)"
          href="https://twitter.com/ChickenTribe"
        />
        <Card
          key="Onda Protocol"
          title="Onda Protocol"
          sub="Onda is a decentralized liqudity layer that gives control to NFT communities."
          img="onda-white.png"
          color="linear-gradient(162deg, #621fff 19%, #1a183c 97%)"
          href="https://twitter.com/OndaProtocol"
        />
      </Slider>
      <style jsx>{`
        h4 {
          margin-left: 4.5vw;
          border-bottom: 2px solid var(--foreground);
          padding: 0;
          margin-bottom: 2vh;
          margin-top: 5vh;
          display: inline-block;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}
