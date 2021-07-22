import React from "react";
import Nomics from "nomics";
import { orderBy } from "lodash";
import { to } from "await-to-js";

const apiKey = "53d8fffd7523f4bf547d31a165a070f84c338df1";
const nomics = new Nomics({ apiKey });

const SORT_BY = ["portfolioValue"];
const SORT_ORDER = ["desc"];
const PORTFOLIO = {
  // BTC: { quantity: 1.272, usdInvested: 18435.34 },
  // ETH: { quantity: 3.717, usdInvested: 2779.06 },
  MM4: { quantity: 235, usdInvested: 32000 },
  // DOGE: { quantity: 23413.5, usdInvested: 5000 },
  // SOL: { quantity: 89.926, usdInvested: 3273.39166 },
  // SFAX: { quantity: 93919678.97787109, usdInvested: 676.713 },
  // BABYDOGE2: { quantity: 47715996546.546961, usdInvested: 276 },
  // RUNE: { quantity: 50, usdInvested: 337.62 },
  // AXS2: 0,
};

async function fetchCurrencies() {
  const options = {
    interval: ["1d"], // 1d, 7d, 30d, 365d, ytd
    ids: Object.keys(PORTFOLIO),
    convert: "USD",
  };
  const [error, currencies] = await to(nomics.currenciesTicker(options));
  if (error) throw error;
  const currenciesWithPortfolioData = currencies.map((currency) => {
    const { id, price } = currency;
    const quantity = PORTFOLIO[id].quantity;
    const usdInvested = PORTFOLIO[id].usdInvested;
    return {
      ...currency,
      portfolioAmount: quantity,
      portfolioValue: quantity * price,
      profitable: quantity * price > usdInvested,
      profitDiff: quantity * price - usdInvested,
    };
  });
  const sortedCurrencies = orderBy(
    currenciesWithPortfolioData,
    SORT_BY,
    SORT_ORDER
  );
  console.log("sortedCurrencies", sortedCurrencies);
  return sortedCurrencies;
}

{
  /*
  <div class="nomics-ticker-widget" data-name="Axie Infinity" data-base="AXS2" data-quote="USD"></div>
  <script src="https://widget.nomics.com/embed.js"></script>
  */
}

export function formatNumber(price) {
  const adjustedPrice = price > 2 ? Math.floor(price) : price;
  const options = { maximumSignificantDigits: 20 };
  const formatter = new Intl.NumberFormat("en-US", options);
  const formattedPrice = formatter.format(adjustedPrice);
  return formattedPrice;
}

export function formatPrice(price) {
  const prefix = price < 0 ? "-$" : "$";
  return prefix + formatNumber(Math.abs(price));
}

export default function Crypto() {
  const intervalRef = React.useRef();
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [lastUpdate, setLastUpdate] = React.useState(new Date());
  const [currencies, setCurrencies] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const portfolioTotal = React.useMemo(
    () => (currencies || []).reduce((total, c) => c.portfolioValue + total, 0),
    [currencies]
  );
  const secondsAgo = React.useMemo(
    () => Math.floor((currentTime.getTime() - lastUpdate.getTime()) / 1000),
    [currentTime, lastUpdate]
  );

  const refetchCurrencies = React.useCallback(() => {
    setLoading(true);
    setError(null);
    fetchCurrencies()
      .then(setCurrencies)
      .catch((err) => setError(err?.message || err))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    refetchCurrencies();
    intervalRef.current = setInterval(() => {
      setLastUpdate(new Date());
      refetchCurrencies();
    }, 5000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  React.useEffect(() => {
    const currentTimeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(currentTimeIntervalId);
    };
  }, []);

  React.useEffect(() => {
    if (error) {
      clearInterval(intervalRef.current);
    }
  }, [error]);

  return (
    <div className="root">
      <header>
        <h1>Crypto Dash</h1>
        <h2>
          <small>Last Update:</small>
          <span
            style={{
              color:
                secondsAgo > 6
                  ? "var(--color-error)"
                  : "var(--color-foreground)",
            }}
          >
            {secondsAgo} Seconds Ago
          </span>
          <br />
          <button onClick={refetchCurrencies}>
            {loading ? "Loading" : "Refetch"}
          </button>
          {error && <h2 className="error">{error}</h2>}
        </h2>

        <h2>
          <small>Portfolio Total:</small>
          {formatPrice(portfolioTotal)}
        </h2>
      </header>

      <main>
        <ul>
          {currencies?.map(
            ({
              id,
              price,
              name,
              portfolioValue,
              portfolioAmount,
              profitable,
              profitDiff,
            }) => (
              <li key={id}>
                <h2>
                  {name}
                  <small>({id})</small>
                </h2>
                <h2>
                  <small>Price:</small>
                  {formatPrice(price)}
                </h2>
                <h2>
                  <small>Quantity:</small>
                  {formatNumber(portfolioAmount)}
                </h2>
                <h2>
                  <small>Total Value:</small>
                  {formatPrice(portfolioValue)}
                </h2>
                <h2
                  style={{
                    color: profitable ? "var(--success)" : "var(--error)",
                  }}
                >
                  <small>{profitable ? "Gain" : "Loss"}</small>
                  {formatPrice(Math.floor(profitDiff))}
                </h2>
              </li>
            )
          )}
        </ul>
      </main>

      <footer>
        <a href="https://nomics.com/">
          Crypto Market Cap & Pricing Data Provided By Nomics.
        </a>
      </footer>

      <style jsx>{`
        .root {
          padding: 10px 40px 0px 40px;
          margin: 20px 20px 0px 20px;
        }

        button {
          border: none;
          background: var(--accent);
          color: var(--foreground);
          padding: 5px 10px;
          border-radius: 3px;
          cursor: pointer;
        }

        button:hover,
        button:active {
          background: var(--accent-active);
        }

        header h2 {
          text-align: center;
          margin: 0px;
          padding: 0px;
          padding-top: 20px;
        }
        header h2 small {
          font-size: 14px;
          display: block;
        }
        .error {
          color: var(--error);
        }
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          flex-wrap: wrap;
          grid-gap: 10px;
          list-style-type: none;
          justify-content: center;
          padding: 0px;
        }
        li {
          background: var(--midground-1);
          padding: 5px 10px 20px 10px;
          border-radius: 5px;
          text-align: center;
          white-space: nowrap;
        }
        li h2 {
          margin: 0px;
          padding: 0px;
          padding-top: 20px;
        }
        li h2 small {
          font-size: 14px;
          display: block;
        }
        footer {
          margin-top: 100px;
        }
      `}</style>
    </div>
  );
}
