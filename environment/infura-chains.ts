export const getInfuraChains = (infura_api_key: string) => {
  return [
    {
      name: 'Ethereum Mainnet',
      short_name: 'eth',
      chain: 'ETH',
      network: 'mainnet',
      chain_id: 1,
      hex_chain_id: '0x1',
      network_id: 1,
      rpc_url: 'https://mainnet.infura.io/v3/' + infura_api_key,
      native_currency: {
        symbol: 'ETH',
        name: 'Ether',
        decimals: '18',
        contractAddress: '',
        balance: '',
      },
    },
    {
      name: 'Ethereum Rinkeby',
      short_name: 'rin',
      chain: 'ETH',
      network: 'rinkeby',
      chain_id: 4,
      hex_chain_id: '0x4',
      network_id: 4,
      rpc_url: 'https://rinkeby.infura.io/v3/' + infura_api_key,
      native_currency: {
        symbol: 'ETH',
        name: 'Ether',
        decimals: '18',
        contractAddress: '',
        balance: '',
      },
    },
  ]
}
