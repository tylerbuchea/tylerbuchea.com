import { useAmp } from "next/amp";

export default function Header() {
  const isAmp = useAmp();

  return (
    <>
      <h1>
        <a href="https://tylerbuchea.com">Tyler Buchea</a>
      </h1>
      <h2>Founder & Engineer {isAmp && "⚡"}</h2>
    </>
  );
}
