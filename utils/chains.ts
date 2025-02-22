import { Currency } from '@reservoir0x/reservoir-kit-ui'
import { reservoirChains, customChains } from '@reservoir0x/reservoir-sdk'
import { zeroAddress } from 'viem'
import {
  arbitrum,
  mainnet,
  polygon,
  optimism,
  Chain,
  bsc,
  avalanche,
  polygonZkEvm,
  zkSync,
  linea,
  zora,
  base,
  arbitrumNova,
  scroll,
  opBNB,
} from 'wagmi/chains'
import usdcContracts from './usdcContracts'

//CONFIGURABLE: The default export controls the supported chains for the marketplace. Removing
// or adding chains will result in adding more or less chains to the marketplace.
// They are an extension of the wagmi chain objects

export type ReservoirChain = Chain & {
  lightIconUrl: string
  darkIconUrl: string
  reservoirBaseUrl: string
  proxyApi?: string
  routePrefix: string
  apiKey?: string
  coingeckoId?: string
  collectionSetId?: string
  community?: string
  wssUrl?: string
  listingCurrencies?: Currency[]
  oracleBidsEnabled?: boolean
  checkPollingInterval?: number
  paperContractId?: string
}

const nativeCurrencyBase = {
  contract: zeroAddress,
  symbol: 'ETH',
  decimals: 18,
  coinGeckoId: 'ethereum',
}

const usdcCurrencyBase = {
  contract: '',
  symbol: 'USDC',
  decimals: 6,
  coinGeckoId: 'usd-coin',
}

export const DefaultChain: ReservoirChain = {
  ...polygon,
    lightIconUrl: '/icons/polygon-icon-dark.svg',
    darkIconUrl: '/icons/polygon-icon-light.svg',
    reservoirBaseUrl: reservoirChains.polygon.baseApiUrl,
    proxyApi: '/api/reservoir/polygon',
    routePrefix: 'polygon',
    coingeckoId: 'matic-network',
    collectionSetId: process.env.NEXT_PUBLIC_POLYGON_COLLECTION_SET_ID,
    community: process.env.NEXT_PUBLIC_POLYGON_COMMUNITY,
    paperContractId: process.env.PAPER_POLYGON_CONTRACT_ID,
    wssUrl: 'wss://ws-polygon.reservoir.tools',
    listingCurrencies: [
      {
        ...nativeCurrencyBase,
        symbol: 'MATIC',
        coinGeckoId: 'matic-network',
      },
      {
        ...usdcCurrencyBase,
        contract: usdcContracts[polygon.id],
      },
      {
        contract: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        symbol: 'WETH',
        decimals: 18,
        coinGeckoId: 'weth',
      },
    ],
    oracleBidsEnabled: true,
    checkPollingInterval: reservoirChains.polygon.checkPollingInterval,
}

export default [
  DefaultChain,
  //{
    // ...polygon,
    // lightIconUrl: '/icons/polygon-icon-dark.svg',
    // darkIconUrl: '/icons/polygon-icon-light.svg',
    // reservoirBaseUrl: reservoirChains.polygon.baseApiUrl,
    // proxyApi: '/api/reservoir/polygon',
    // routePrefix: 'polygon',
    // coingeckoId: 'matic-network',
    // collectionSetId: process.env.NEXT_PUBLIC_POLYGON_COLLECTION_SET_ID,
    // community: process.env.NEXT_PUBLIC_POLYGON_COMMUNITY,
    // paperContractId: process.env.PAPER_POLYGON_CONTRACT_ID,
    // wssUrl: 'wss://ws-polygon.reservoir.tools',
    // listingCurrencies: [
    //   {
    //     ...nativeCurrencyBase,
    //     symbol: 'MATIC',
    //     coinGeckoId: 'matic-network',
    //   },
    //   {
    //     ...usdcCurrencyBase,
    //     contract: usdcContracts[polygon.id],
    //   },
    //   {
    //     contract: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    //     symbol: 'WETH',
    //     decimals: 18,
    //     coinGeckoId: 'weth',
    //   },
    // ],
    // oracleBidsEnabled: true,
    // checkPollingInterval: reservoirChains.polygon.checkPollingInterval,
 // },
  // {
  //   ...arbitrum,
  //   name: 'Arbitrum',
  //   lightIconUrl: '/icons/arbitrum-icon-dark.svg',
  //   darkIconUrl: '/icons/arbitrum-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.arbitrum.baseApiUrl,
  //   proxyApi: '/api/reservoir/arbitrum',
  //   routePrefix: 'arbitrum',
  //   coingeckoId: 'arbitrum-iou',
  //   collectionSetId: process.env.NEXT_PUBLIC_ARBITRUM_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_ARBITRUM_COMMUNITY,
  //   wssUrl: 'wss://ws-arbitrum.reservoir.tools',
  //   listingCurrencies: [
  //     { ...nativeCurrencyBase, coinGeckoId: 'arbitrum-iou' },
  //     {
  //       ...usdcCurrencyBase,
  //       contract: usdcContracts[arbitrum.id],
  //     },
  //   ],
  //   checkPollingInterval: reservoirChains.arbitrum.checkPollingInterval,
  // },
  // {
  //   ...base,
  //   lightIconUrl: '/icons/base-icon-dark.svg',
  //   darkIconUrl: '/icons/base-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.base.baseApiUrl,
  //   proxyApi: '/api/reservoir/base',
  //   routePrefix: 'base',
  //   coingeckoId: 'ethereum',
  //   collectionSetId: process.env.NEXT_PUBLIC_BASE_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_BASE_COMMUNITY,
  //   checkPollingInterval: reservoirChains.base.checkPollingInterval,
  // },
  // {
  //   ...optimism,
  //   name: 'Optimism',
  //   lightIconUrl: '/icons/optimism-icon-dark.svg',
  //   darkIconUrl: '/icons/optimism-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.optimism.baseApiUrl,
  //   proxyApi: '/api/reservoir/optimism',
  //   routePrefix: 'optimism',
  //   coingeckoId: 'optimism',
  //   collectionSetId: process.env.NEXT_PUBLIC_OPTIMISM_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_OPTIMISM_COMMUNITY,
  //   wssUrl: 'wss://ws-optimism.reservoir.tools',
  //   listingCurrencies: [
  //     { ...nativeCurrencyBase, coinGeckoId: 'optimism' },
  //     {
  //       ...usdcCurrencyBase,
  //       contract: usdcContracts[optimism.id],
  //     },
  //   ],
  //   checkPollingInterval: reservoirChains.optimism.checkPollingInterval,
  // },
  // {
  //   ...zora,
  //   name: 'Zora',
  //   lightIconUrl: '/icons/zora-icon-dark.svg',
  //   darkIconUrl: '/icons/zora-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.zora.baseApiUrl,
  //   proxyApi: '/api/reservoir/zora',
  //   routePrefix: 'zora',
  //   coingeckoId: 'ethereum',
  //   checkPollingInterval: reservoirChains.zora.checkPollingInterval,
  // },
  // {
  //   ...bsc,
  //   lightIconUrl: '/icons/bsc-icon-dark.svg',
  //   darkIconUrl: '/icons/bsc-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.bsc.baseApiUrl,
  //   proxyApi: '/api/reservoir/bsc',
  //   routePrefix: 'bsc',
  //   coingeckoId: 'binancecoin',
  //   collectionSetId: process.env.NEXT_PUBLIC_BSC_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_BSC_COMMUNITY,
  //   wssUrl: 'wss://ws-bsc.reservoir.tools',
  //   listingCurrencies: [
  //     { ...nativeCurrencyBase, coinGeckoId: 'binancecoin' },
  //     {
  //       ...usdcCurrencyBase,
  //       contract: usdcContracts[bsc.id],
  //     },
  //   ],
  //   checkPollingInterval: reservoirChains.bsc.checkPollingInterval,
  // },
  // {
  //   ...opBNB,
  //   lightIconUrl: '/icons/bsc-icon-dark.svg',
  //   darkIconUrl: '/icons/bsc-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.opBnb.baseApiUrl,
  //   proxyApi: '/api/reservoir/opbnb',
  //   routePrefix: 'opbnb',
  //   coingeckoId: 'binancecoin',
  //   checkPollingInterval: reservoirChains.opBnb.checkPollingInterval,
  // },
  // {
  //   ...customChains.ancient8,
  //   lightIconUrl: '/icons/ancient8-icon-dark.svg',
  //   darkIconUrl: '/icons/ancient8-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.ancient8.baseApiUrl,
  //   proxyApi: '/api/reservoir/ancient8',
  //   routePrefix: 'ancient8',
  //   coingeckoId: 'ethereum',
  //   checkPollingInterval: reservoirChains.ancient8.checkPollingInterval,
  // },
  // {
  //   ...avalanche,
  //   lightIconUrl: '/icons/avalanche-icon-dark.svg',
  //   darkIconUrl: '/icons/avalanche-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.avalanche.baseApiUrl,
  //   proxyApi: '/api/reservoir/avalanche',
  //   routePrefix: 'avalanche',
  //   coingeckoId: 'avalanche-2',
  //   collectionSetId: process.env.NEXT_PUBLIC_AVALANCHE_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_AVALANCHE_COMMUNITY,
  //   checkPollingInterval: reservoirChains.avalanche.checkPollingInterval,
  // },
  // {
  //   ...arbitrumNova,
  //   lightIconUrl: '/icons/arbitrum-nova-icon-dark.svg',
  //   darkIconUrl: '/icons/arbitrum-nova-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.arbitrumNova.baseApiUrl,
  //   proxyApi: '/api/reservoir/arbitrum-nova',
  //   routePrefix: 'arbitrum-nova',
  //   coingeckoId: 'ethereum',
  //   collectionSetId: process.env.NEXT_PUBLIC_ARBITRUM_NOVA_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_ARBITRUM_NOVA_COMMUNITY,
  //   checkPollingInterval: reservoirChains.arbitrumNova.checkPollingInterval,
  // },
  // {
  //   ...linea,
  //   lightIconUrl: '/icons/linea-icon-dark.svg',
  //   darkIconUrl: '/icons/linea-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.linea.baseApiUrl,
  //   proxyApi: '/api/reservoir/linea',
  //   routePrefix: 'linea',
  //   coingeckoId: 'ethereum',
  //   collectionSetId: process.env.NEXT_PUBLIC_LINEA_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_LINEA_COMMUNITY,
  //   checkPollingInterval: reservoirChains.linea.checkPollingInterval,
  // },
  // {
  //   ...polygonZkEvm,
  //   lightIconUrl: '/icons/polygon-zkevm-icon-dark.svg',
  //   darkIconUrl: '/icons/polygon-zkevm-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.polygonZkEvm.baseApiUrl,
  //   proxyApi: '/api/reservoir/polygon-zkevm',
  //   routePrefix: 'polygon-zkevm',
  //   apiKey: process.env.RESERVOIR_API_KEY,
  //   coingeckoId: 'ethereum',
  //   collectionSetId: process.env.NEXT_PUBLIC_POLYGON_ZKEVM_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_POLYGON_ZKEVM_COMMUNITY,
  //   checkPollingInterval: reservoirChains.polygonZkEvm.checkPollingInterval,
  // },
  // {
  //   ...zkSync,
  //   name: 'zkSync',
  //   lightIconUrl: '/icons/zksync-icon-dark.svg',
  //   darkIconUrl: '/icons/zksync-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.zkSync.baseApiUrl,
  //   proxyApi: '/api/reservoir/zksync',
  //   routePrefix: 'zksync',
  //   apiKey: process.env.RESERVOIR_API_KEY,
  //   coingeckoId: 'ethereum',
  //   collectionSetId: process.env.NEXT_PUBLIC_ZKSYNC_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_ZKSYNC_COMMUNITY,
  //   checkPollingInterval: reservoirChains.zkSync.checkPollingInterval,
  // },
  // {
  //   ...scroll,
  //   name: 'Scroll',
  //   lightIconUrl: '/icons/scroll-testnet-icon-dark.svg',
  //   darkIconUrl: '/icons/scroll-testnet-icon-light.svg',
  //   reservoirBaseUrl: reservoirChains.scroll.baseApiUrl,
  //   proxyApi: '/api/reservoir/scroll',
  //   routePrefix: 'scroll',
  //   apiKey: process.env.RESERVOIR_API_KEY,
  //   coingeckoId: 'ethereum',
  //   collectionSetId: process.env.NEXT_PUBLIC_SCROLL_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_SCROLL_COMMUNITY,
  //   checkPollingInterval: reservoirChains.scroll.checkPollingInterval,
  // },
  // {
  //   ...customChains.apexPop,
  //   name: 'Apex',
  //   lightIconUrl: '/icons/apex-pop-icon-light.svg',
  //   darkIconUrl: '/icons/apex-pop-icon-dark.svg',
  //   reservoirBaseUrl: reservoirChains.apexPop.baseApiUrl,
  //   proxyApi: '/api/reservoir/apex',
  //   routePrefix: 'apex',
  //   apiKey: process.env.RESERVOIR_API_KEY,
  //   coingeckoId: 'ethereum',
  //   collectionSetId: process.env.NEXT_PUBLIC_APE_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_APEX_COMMUNITY,
  //   checkPollingInterval: reservoirChains.apexPop.checkPollingInterval,
  // },
  // {
  //   ...customChains.blast,
  //   name: 'Blast',
  //   lightIconUrl: '/icons/blast-icon-light.svg',
  //   darkIconUrl: '/icons/blast-icon-dark.svg',
  //   reservoirBaseUrl: 'https://api-blast.reservoir.tools',
  //   proxyApi: '/api/reservoir/blast',
  //   routePrefix: 'blast',
  //   apiKey: process.env.RESERVOIR_API_KEY,
  //   coingeckoId: 'ethereum',
  //   collectionSetId: process.env.NEXT_PUBLIC_BLAST_COLLECTION_SET_ID,
  //   community: process.env.NEXT_PUBLIC_BLAST_COMMUNITY,
  //   checkPollingInterval: reservoirChains.blast.checkPollingInterval,
  // },
] as ReservoirChain[]
