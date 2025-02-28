import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "....",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.trustwallet.app"),
  createWallet("app.phantom"),
  createWallet("com.binance"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.okex.wallet"),
  createWallet("com.bybit"),
  createWallet("com.bitget.web3"),
  createWallet("org.uniswap"),
];

export default function WalletConnect() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      theme={darkTheme({
        colors: {
          primaryButtonText: "hsl(0, 0%, 100%)",
          skeletonBg: "hsl(233, 12%, 15%)",
          primaryButtonBg: "hsl(300, 70%, 48%)",
        },
      })}
      connectButton={{ label: "Connect Wallet" }}
      connectModal={{
        size: "wide",
        title: "Connect Wallet",
        titleIcon:
          "https://media-hosting.imagekit.io//bb66b97e75224d27/phoenix.png?Expires=1835338039&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MBLPbUCjmP8OH~wE52cJcLayDERTpdl-NvgWgkwrkpOv6lfGi6irqUAdDOZ86pzU1Awk5oIaTXw44UpEbO2c4~PSrjNzt25~0h-91fZRHf-SipEm05OU~XuC5ezqq00cN~7VfCqMcKiNAP4UrkNpsxOynefvHD55ptYcC250dVVfe46jkcbrDSvhKERlDqOokMsQ3~xlidf~oU8NTfput8X655NvME5slI9Ry0DF7wcnoSPilFhfNaZ6odzdFOLuxwY42YzhZ2eV21nzwfP28Qk4yHgtlqA6cEKVWBcFE6Iz485J4rrh9CcSh0kgTWTOcsiDAJmwMHPpEOBsmQJLaA__",
        showThirdwebBranding: false,
      }}
    />
  );
}
