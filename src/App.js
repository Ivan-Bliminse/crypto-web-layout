import { useEffect, useState } from "react";
import crypto from './crypto.png'

const bitcoin = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')
const ethereum = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade')
const solana = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade')



function App() {

  const [bitcoinPrice, setBitcoinPrice] = useState(0)
  const [ethereumPrice, setEthereumPrice] = useState(0)
  const [solanaPrice, setSolanaPrice] = useState(0)

  useEffect(() => {
    bitcoin.onmessage = (event) => {
      let stockObject = JSON.parse(event.data)
      setBitcoinPrice(Math.round(stockObject.p * 100) / 100)
    }
    ethereum.onmessage = (event) => {
      let stockObject = JSON.parse(event.data)
      setEthereumPrice(Math.round(stockObject.p * 100) / 100)
    }
    solana.onmessage = (event) => {
      let stockObject = JSON.parse(event.data)
      setSolanaPrice(Math.round(stockObject.p * 100) / 100)
    }

  }, [bitcoinPrice, ethereumPrice, solanaPrice])

  return (
    <div className="App">

      <div><img className="logo" src="https://cdn2.iconfinder.com/data/icons/bitcoin-detailed/60/Bitcoin_Wallet_bitcoin_wallet_crypto_wallet-512.png" alt="" /></div>

      <div className="header">
        <div>Market</div>
        <div>Features</div>
        <div>Stats</div>
        <div>About Us</div>
      </div>

      <div className="text">
        <p>Invest in your future</p>
        <p>with <span className="crypto">Crypto</span> </p>
      </div>

      <div className="motivate">
        <p>Start your future with one click and make your dream comes true!</p>
      </div>

      <div className="ob">
        <button>EXPLORE MORE</button>
      </div>

      <div>
        <img src={crypto} alt="" />
      </div>

      <div className="coins">
        <div className="btc">
          <img src="https://cdn1.iconfinder.com/data/icons/social-icons-33/512/bitcoin-256.png" alt="" /> <span>{bitcoinPrice}</span>
        </div>

        <div className="etc">
          <img src="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/etherium_eth_ethcoin_crypto-256.png" alt="" /> <span>{ethereumPrice}</span>
        </div>

        <div className="sol">
          <img src="https://cdn2.iconfinder.com/data/icons/cryptocurrency-logo/128/ic_sol-256.png" alt="" /> <span>{solanaPrice}</span>
        </div>

      </div>
    </div>

  );
}

export default App;
