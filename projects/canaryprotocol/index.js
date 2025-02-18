const { VAULTS } = require("./constants")

async function tvl(api) {
  for (const vault of VAULTS) {
    const collateralBalance = await api.call({
      abi: 'erc20:balanceOf',
      target: vault.token.address,
      params: [vault.address],
    });
    // TODO remove debug line
    console.log(vault.name, collateralBalance)

    api.add(vault.token.address, collateralBalance)
  }
}

module.exports = {
  start: 1739788350, // February 17, 2025 10:32:30 UTC
  methodology: "The combined TVL all vaults, retrieved through the ERC20 balanceOf.",
  plume: { tvl },
};
