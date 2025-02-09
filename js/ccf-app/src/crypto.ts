// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the Apache 2.0 License.

/**
 * The `crypto` module provides access to common cryptographic
 * algorithms.
 *
 * Example:
 * ```
 * import * as ccfcrypto from '@microsoft/ccf-app/crypto.js';
 *
 * const key = ccfcrypto.generateAesKey(128);
 * ```
 *
 * @module
 */

import { ccf } from "./global.js";

/**
 * @inheritDoc global!CCFCrypto.generateAesKey
 */
export const generateAesKey = ccf.crypto.generateAesKey;

/**
 * @inheritDoc global!CCFCrypto.generateRsaKeyPair
 */
export const generateRsaKeyPair = ccf.crypto.generateRsaKeyPair;

/**
 * @inheritDoc global!CCFCrypto.generateEcdsaKeyPair
 */
export const generateEcdsaKeyPair = ccf.crypto.generateEcdsaKeyPair;

/**
 * @inheritDoc global!CCFCrypto.generateEcdsaKeyPair
 */
export const generateEddsaKeyPair = ccf.crypto.generateEddsaKeyPair;

/**
 * @inheritDoc global!CCFCrypto.wrapKey
 */
export const wrapKey = ccf.crypto.wrapKey;

/**
 * @inheritDoc global!CCFCrypto.unwrapKey
 */
export const unwrapKey = ccf.crypto.unwrapKey;

/**
 * @inheritDoc global!CCFCrypto.sign
 */
export const sign = ccf.crypto.sign;

/**
 * @inheritDoc global!CCFCrypto.verifySignature
 */
export const verifySignature = ccf.crypto.verifySignature;

/**
 * @inheritDoc global!CCFCrypto.digest
 */
export const digest = ccf.crypto.digest;

/**
 * @inheritDoc global!CCFCrypto.isValidX509CertBundle
 */
export const isValidX509CertBundle = ccf.crypto.isValidX509CertBundle;

/**
 * @inheritDoc global!CCFCrypto.isValidX509CertChain
 */
export const isValidX509CertChain = ccf.crypto.isValidX509CertChain;

/**
 * @inheritDoc global!CCFCrypto.pubPemToJwk
 */
export const pubPemToJwk = ccf.crypto.pubPemToJwk;

/**
 * @inheritDoc global!CCFCrypto.pemToJwk
 */
export const pemToJwk = ccf.crypto.pemToJwk;

/**
 * @inheritDoc global!CCFCrypto.pubRsaPemToJwk
 */
export const pubRsaPemToJwk = ccf.crypto.pubRsaPemToJwk;

/**
 * @inheritDoc global!CCFCrypto.rsaPemToJwk
 */
export const rsaPemToJwk = ccf.crypto.rsaPemToJwk;

/**
 * @inheritDoc global!CCFCrypto.pubEddsaPemToJwk
 */
export const pubEddsaPemToJwk = ccf.crypto.pubEddsaPemToJwk;

/**
 * @inheritDoc global!CCFCrypto.eddsaPemToJwk
 */
export const eddsaPemToJwk = ccf.crypto.eddsaPemToJwk;

/**
 * @inheritDoc global!CCFCrypto.pubJwkToPem
 */
export const pubJwkToPem = ccf.crypto.pubJwkToPem;

/**
 * @inheritDoc global!CCFCrypto.JwkToPem
 */
export const jwkToPem = ccf.crypto.jwkToPem;

/**
 * @inheritDoc global!CCFCrypto.pubRsaJwkToPem
 */
export const pubRsaJwkToPem = ccf.crypto.pubRsaJwkToPem;

/**
 * @inheritDoc global!CCFCrypto.rsaJwkToPem
 */
export const rsaJwkToPem = ccf.crypto.rsaJwkToPem;

/**
 * @inheritDoc global!CCFCrypto.pubEddsaJwkToPem
 */
export const pubEddsaJwkToPem = ccf.crypto.pubEddsaJwkToPem;

/**
 * @inheritDoc global!CCFCrypto.eddsaJwkToPem
 */
export const eddsaJwkToPem = ccf.crypto.eddsaJwkToPem;

export {
  WrapAlgoParams,
  AesKwpParams,
  RsaOaepParams,
  RsaOaepAesKwpParams,
  CryptoKeyPair,
  DigestAlgorithm,
  SigningAlgorithm,
} from "./global";
