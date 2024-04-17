import { keccak256 } from "@ethersproject/keccak256";
export const TESTNET_FLOW_ADDRESS = '0x22C1CaF8cbb671F220789184fda68BfD7eaA2eE1';
// not used anymore
// export const TESTNET_USDT_ADDRESS = '0xe3a700dF2a8bEBeF2f0B1eE92f46d230b01401B1'; 
export const DEFAULT_CHUNK_SIZE = 256; // bytes
export const DEFAULT_SEGMENT_MAX_CHUNKS = 1024;
export const DEFAULT_SEGMENT_SIZE = DEFAULT_CHUNK_SIZE * DEFAULT_SEGMENT_MAX_CHUNKS;
export const EMPTY_CHUNK = new Uint8Array(DEFAULT_CHUNK_SIZE);
export const EMPTY_CHUNK_HASH = keccak256(EMPTY_CHUNK);
export const SMALL_FILE_SIZE_THRESHOLD = 256 * 1024;
export const ZERO_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';
//# sourceMappingURL=constant.js.map