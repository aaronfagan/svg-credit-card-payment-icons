/**
 * @file index.js
 */

// Imports
// -------------------------------------------------------------------------------------------------

import flatAlipay from '../flat/alipay.svg';
import flatAmex from '../flat/amex.svg';
import flatCodeFront from '../flat/code-front.svg';
import flatCode from '../flat/code.svg';
import flatDiners from '../flat/diners.svg';
import flatDiscover from '../flat/discover.svg';
import flatElo from '../flat/elo.svg';
import flatGeneric from '../flat/generic.svg';
import flatHipercard from '../flat/hipercard.svg';
import flatHiper from '../flat/hiper.svg';
import flatJcb from '../flat/jcb.svg';
import flatMaestro from '../flat/maestro.svg';
import flatMastercard from '../flat/mastercard.svg';
import flatMir from '../flat/mir.svg';
import flatPaypal from '../flat/paypal.svg';
import flatUnionpay from '../flat/unionpay.svg';
import flatVisa from '../flat/visa.svg';

import flatRoundedAlipay from '../flat-rounded/alipay.svg';
import flatRoundedAmex from '../flat-rounded/amex.svg';
import flatRoundedCodeFront from '../flat-rounded/code-front.svg';
import flatRoundedCode from '../flat-rounded/code.svg';
import flatRoundedDiners from '../flat-rounded/diners.svg';
import flatRoundedDiscover from '../flat-rounded/discover.svg';
import flatRoundedElo from '../flat-rounded/elo.svg';
import flatRoundedGeneric from '../flat-rounded/generic.svg';
import flatRoundedHipercard from '../flat-rounded/hipercard.svg';
import flatRoundedHiper from '../flat-rounded/hiper.svg';
import flatRoundedJcb from '../flat-rounded/jcb.svg';
import flatRoundedMaestro from '../flat-rounded/maestro.svg';
import flatRoundedMastercard from '../flat-rounded/mastercard.svg';
import flatRoundedMir from '../flat-rounded/mir.svg';
import flatRoundedPaypal from '../flat-rounded/paypal.svg';
import flatRoundedUnionpay from '../flat-rounded/unionpay.svg';
import flatRoundedVisa from '../flat-rounded/visa.svg';

import monoAlipay from '../mono/alipay.svg';
import monoAmex from '../mono/amex.svg';
import monoCodeFront from '../mono/code-front.svg';
import monoCode from '../mono/code.svg';
import monoDiners from '../mono/diners.svg';
import monoDiscover from '../mono/discover.svg';
import monoElo from '../mono/elo.svg';
import monoGeneric from '../mono/generic.svg';
import monoHipercard from '../mono/hipercard.svg';
import monoHiper from '../mono/hiper.svg';
import monoJcb from '../mono/jcb.svg';
import monoMaestro from '../mono/maestro.svg';
import monoMastercard from '../mono/mastercard.svg';
import monoMir from '../mono/mir.svg';
import monoPaypal from '../mono/paypal.svg';
import monoUnionpay from '../mono/unionpay.svg';
import monoVisa from '../mono/visa.svg';

import monoOutlineAlipay from '../mono-outline/alipay.svg';
import monoOutlineAmex from '../mono-outline/amex.svg';
import monoOutlineCodeFront from '../mono-outline/code-front.svg';
import monoOutlineCode from '../mono-outline/code.svg';
import monoOutlineDiners from '../mono-outline/diners.svg';
import monoOutlineDiscover from '../mono-outline/discover.svg';
import monoOutlineElo from '../mono-outline/elo.svg';
import monoOutlineGeneric from '../mono-outline/generic.svg';
import monoOutlineHipercard from '../mono-outline/hipercard.svg';
import monoOutlineHiper from '../mono-outline/hiper.svg';
import monoOutlineJcb from '../mono-outline/jcb.svg';
import monoOutlineMaestro from '../mono-outline/maestro.svg';
import monoOutlineMastercard from '../mono-outline/mastercard.svg';
import monoOutlineMir from '../mono-outline/mir.svg';
import monoOutlinePaypal from '../mono-outline/paypal.svg';
import monoOutlineUnionpay from '../mono-outline/unionpay.svg';
import monoOutlineVisa from '../mono-outline/visa.svg';

import logoAlipay from '../logo/alipay.svg';
import logoAmex from '../logo/amex.svg';
import logoCodeFront from '../logo/code-front.svg';
import logoCode from '../logo/code.svg';
import logoDiners from '../logo/diners.svg';
import logoDiscover from '../logo/discover.svg';
import logoElo from '../logo/elo.svg';
import logoGeneric from '../logo/generic.svg';
import logoHipercard from '../logo/hipercard.svg';
import logoHiper from '../logo/hiper.svg';
import logoJcb from '../logo/jcb.svg';
import logoMaestro from '../logo/maestro.svg';
import logoMastercard from '../logo/mastercard.svg';
import logoMir from '../logo/mir.svg';
import logoPaypal from '../logo/paypal.svg';
import logoUnionpay from '../logo/unionpay.svg';
import logoVisa from '../logo/visa.svg';

import logoBorderAlipay from '../logo-border/alipay.svg';
import logoBorderAmex from '../logo-border/amex.svg';
import logoBorderCodeFront from '../logo-border/code-front.svg';
import logoBorderCode from '../logo-border/code.svg';
import logoBorderDiners from '../logo-border/diners.svg';
import logoBorderDiscover from '../logo-border/discover.svg';
import logoBorderElo from '../logo-border/elo.svg';
import logoBorderGeneric from '../logo-border/generic.svg';
import logoBorderHipercard from '../logo-border/hipercard.svg';
import logoBorderHiper from '../logo-border/hiper.svg';
import logoBorderJcb from '../logo-border/jcb.svg';
import logoBorderMaestro from '../logo-border/maestro.svg';
import logoBorderMastercard from '../logo-border/mastercard.svg';
import logoBorderMir from '../logo-border/mir.svg';
import logoBorderPaypal from '../logo-border/paypal.svg';
import logoBorderUnionpay from '../logo-border/unionpay.svg';
import logoBorderVisa from '../logo-border/visa.svg';

// Definitions
// -------------------------------------------------------------------------------------------------

// Available credit card icons.
//
// First level: available icon styles.
// Second level: available icons.
const availableIcons = {
  'flat': {
    'alipay': flatAlipay,
    'amex': flatAmex,
    'code-front': flatCodeFront,
    'code': flatCode,
    'diners': flatDiners,
    'discover': flatDiscover,
    'elo': flatElo,
    'generic': flatGeneric,
    'hipercard': flatHipercard,
    'hiper': flatHiper,
    'jcb': flatJcb,
    'maestro': flatMaestro,
    'mastercard': flatMastercard,
    'mir': flatMir,
    'paypal': flatPaypal,
    'unionpay': flatUnionpay,
    'visa': flatVisa,
  },
  'flat-rounded': {
    'alipay': flatRoundedAlipay,
    'amex': flatRoundedAmex,
    'code-front': flatRoundedCodeFront,
    'code': flatRoundedCode,
    'diners': flatRoundedDiners,
    'discover': flatRoundedDiscover,
    'elo': flatRoundedElo,
    'generic': flatRoundedGeneric,
    'hipercard': flatRoundedHipercard,
    'hiper': flatRoundedHiper,
    'jcb': flatRoundedJcb,
    'maestro': flatRoundedMaestro,
    'mastercard': flatRoundedMastercard,
    'mir': flatRoundedMir,
    'paypal': flatRoundedPaypal,
    'unionpay': flatRoundedUnionpay,
    'visa': flatRoundedVisa,
  },
  'mono': {
    'alipay': monoAlipay,
    'amex': monoAmex,
    'code-front': monoCodeFront,
    'code': monoCode,
    'diners': monoDiners,
    'discover': monoDiscover,
    'elo': monoElo,
    'generic': monoGeneric,
    'hipercard': monoHipercard,
    'hiper': monoHiper,
    'jcb': monoJcb,
    'maestro': monoMaestro,
    'mastercard': monoMastercard,
    'mir': monoMir,
    'paypal': monoPaypal,
    'unionpay': monoUnionpay,
    'visa': monoVisa,
  },
  'mono-outline': {
    "alipay": monoOutlineAlipay,
    "amex": monoOutlineAmex,
    "code-front": monoOutlineCodeFront,
    "code": monoOutlineCode,
    "diners": monoOutlineDiners,
    "discover": monoOutlineDiscover,
    "elo": monoOutlineElo,
    "generic": monoOutlineGeneric,
    "hipercard": monoOutlineHipercard,
    "hiper": monoOutlineHiper,
    "jcb": monoOutlineJcb,
    "maestro": monoOutlineMaestro,
    "mastercard": monoOutlineMastercard,
    "mir": monoOutlineMir,
    "paypal": monoOutlinePaypal,
    "unionpay": monoOutlineUnionpay,
    "visa": monoOutlineVisa,
  },
  'logo': {
    "alipay": logoAlipay,
    "amex": logoAmex,
    "code-front": logoCodeFront,
    "code": logoCode,
    "diners": logoDiners,
    "discover": logoDiscover,
    "elo": logoElo,
    "generic": logoGeneric,
    "hipercard": logoHipercard,
    "hiper": logoHiper,
    "jcb": logoJcb,
    "maestro": logoMaestro,
    "mastercard": logoMastercard,
    "mir": logoMir,
    "paypal": logoPaypal,
    "unionpay": logoUnionpay,
    "visa": logoVisa,
  },
  'logo-border': {
    "alipay": logoBorderAlipay,
    "amex": logoBorderAmex,
    "code-front": logoBorderCodeFront,
    "code": logoBorderCode,
    "diners": logoBorderDiners,
    "discover": logoBorderDiscover,
    "elo": logoBorderElo,
    "generic": logoBorderGeneric,
    "hipercard": logoBorderHipercard,
    "hiper": logoBorderHiper,
    "jcb": logoBorderJcb,
    "maestro": logoBorderMaestro,
    "mastercard": logoBorderMastercard,
    "mir": logoBorderMir,
    "paypal": logoBorderPaypal,
    "unionpay": logoBorderUnionpay,
    "visa": logoBorderVisa,
  },
};

// Implementation
// -------------------------------------------------------------------------------------------------

/**
 * Return a set of available styles.
 *
 * @returns {Set} The available style names as a set of strings.
 */
export function styles() {
  return new Set(Object.keys(availableIcons));
}

/**
 * Return the set of available icons for a style.
 *
 * @param {String} style - The name of an icon style.

 * @returns {Set} The available icons for the given style as a set of strings.
 */
export function icons(style) {
  return new Set(Object.keys(availableIcons[style]));
};

/**
 * Return an SVG payment icon as an img tag for use in an HTML document.
 *
 * @param {string} icon - The name of the icon to return.
 * @param {string} [style=flat] - The icon style.
 *
 * @returns {Image} An <img> tag that displays the selected icon.
 */
export function ccIcon(name, style = 'flat') {
  if (! styles().has(style)) {
    throw new Error(`unsupported style: ${style}`);
  }

  const iconsForStyle = availableIcons[style];

  if (! icons(style).has(name)) {
    throw new Error(`unsupported icon: ${name}`);
  }

  const fileName = iconsForStyle[name];

  // Construct an <img> tag displaying the selected icon.
  const icon = new Image();
  icon.src = fileName;
  icon.alt = `${name} icon`;

  return icon;
}
