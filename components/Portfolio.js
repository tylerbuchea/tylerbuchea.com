import Slider from "./Slider";
import Card from "./Card";

export default function Portfolio() {
  return (
    <>
      <h4>Companies</h4>
      <Slider>
        <Card
          key="Dexloan"
          title="Dexloan"
          sub="Unlock the value of your NFTs with escrowless borrowing & lending."
          img="dexloan3.png"
          color="linear-gradient(162deg, #2f855a 19%, #2d3748 97%)"
          href="https://twitter.com/dexloanio"
        />
        <Card
          key="Chicken Tribe"
          title="Chicken Tribe"
          sub="Building no-code launchpad services for holders. Engaging the community through comic page-style bits of lore."
          img="chickentribe.svg"
          color="linear-gradient(162deg, #b000ff 19%, #0368ff 97%)"
          href="https://twitter.com/ChickenTribe"
        />
        <Card
          key="Exiled Apes"
          title="Exiled Apes"
          sub="A historic collection of only 518 NFTs. First mint of the Degen Ape Academy. Solana's only misprint NFT."
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
