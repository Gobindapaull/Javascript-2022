import { ethers } from 'ethers'

// v5
import { providers } from 'ethers'
const { InfuraProvider } = providers

// v6
import { InfuraProvider } from 'ethers'
import { AbiCoder } from 'ethers'

const coder = AbiCoder.defaultAbiCoder()
console.log(coder.encode(['string'],['test']))

// v5
const hexV5 = ethers.utils.hexValue(value)

// v6
const hexV6 = ethers.toQuantity(10)
console.log(hexV6)

const encoded = ethers.encodeBytes32String("solidity")
console.log(encoded)

const decoded = ethers.decodeBytes32String(encoded)
console.log(decoded)



// node
// const huge = BigInt(100)
// huge
// 100n

// 1e18
// 1000000000000000000

// typeof 1n == 'bigint'
// true
