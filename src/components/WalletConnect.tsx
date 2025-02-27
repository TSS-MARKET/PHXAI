import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { useState, useEffect } from 'react'

export default function WalletConnect() {
  const { address, isConnected } = useAccount()
  const [displayAddress, setDisplayAddress] = useState<string>('')

  useEffect(() => {
    if (address) {
      setDisplayAddress(`${address.slice(0, 6)}...${address.slice(-4)}`)
    }
  }, [address])

  return (
    <div className="wallet-connect-container">
      <Web3Button />
      {isConnected && (
        <span className="connected-address">{displayAddress}</span>
      )}
    </div>
  )
} 