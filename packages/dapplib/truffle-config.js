require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remain snake inflict enroll sugar slide'; 
let testAccounts = [
"0x47e083147268c1497838a25f0061b39a64cb3396b3924c236aa2c3aa66ec4fb3",
"0xf2eac36eab5be67ccb855f39b737fc12ccbd4c615a8cde32dfe67c05cc302c26",
"0x6d537047c281d3a97fafe369275aa240edf41885a5cb2dac364c7a1a3e898cf3",
"0x3f2331122fbc7fc13af3ab8967544aeacc46bda36070bab7535ff896cfafca3f",
"0xb07dbe4925ec8e0acc356f041f128d393cd4b68a73a8142b4ea5d97b6123028f",
"0xcd306e7007d87220b6681dd8fee8ec20ae5d408d8503d71590592d87a79939ac",
"0x2357af83890cf3b0fc0b2fdaa8bc280b7d7a1106780d17cea382aefb2fd8c294",
"0xaebd1efceddc5769372a1493baabfc9bb17d8d338d0eef195be7752749e3a240",
"0x0d170bf692d4b653848652160d2e16567ccf6e1187081645c1c288f88556b672",
"0x6b764d437fd571060bdb7541b1473ef6e34b57eec88181b9580fb570b3944270"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

