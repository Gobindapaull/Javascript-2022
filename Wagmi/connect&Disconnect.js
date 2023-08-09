import './App.css';
import { WagmiConfig, createConfig, configureChains } from "wagmi"
import { mainnet, bsc, polygon } from 'wagmi/chains'
import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import { publicProvider } from 'wagmi/providers/public'
import "bootstrap/dist/css/bootstrap.min.css"


const { chains, publicClient } = configureChains(
  [mainnet, bsc, polygon],
  [
    publicProvider()
    // jsonRpcProvider({
    //   rpc: () => ({
    //     http: "https://mainnet.infura.io/v3/"
    //   })
    // })
  ]
)

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true
      }
    })
  ]
})

function Profile() {
  const { address } = useAccount()
  const { connect, isConnecting } = useConnect({
    connector: new InjectedConnector()
  })
  const { disconnect } = useDisconnect()
  const { data, isError, isLoading } = useBalance({
    address: address
  })

  if (address) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className='text-center'>
          <p>Connected to {address}</p>
          <p>Balance: {data ? data.formatted : "Loading..."} ETH</p>
          <p>Chain ID: {config ? config.lastUsedChainId : ""}</p>
          <button className='btn btn-primary mt-3' onClick={() => disconnect()}>Disconnect</button>
        </div>
      </div>
    )
  }

  if (isConnecting) {
    return (
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <p>Connecting...</p>
      </div>
    )
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <button className='btn btn-primary' onClick={() => connect()}>Connect Wallet</button>
    </div>
  )
}

function App() {
  return (
    <WagmiConfig config={config}>
      <Profile />
    </WagmiConfig>
  )
}


export default App;
