/**
 * @file demo.js
 *
 * Support for generating an HTML demo page.
 */

// Imports
// -------------------------------------------------------------------------------------------------

import './style.css';

import { icons, styles, ccIcon } from './index.js';

// Definitions
// -------------------------------------------------------------------------------------------------

const title = "SVG Payment Icons";

// Implementation
// -------------------------------------------------------------------------------------------------

function iconTable() {
  const table = document.createElement('table');

  for (const style of styles()) {
    const tr = document.createElement('tr');

    for (const icon of icons(style)) {
      // Construct <img> that displays icon.
      const img = ccIcon(icon, style);

      // <td><img></td>
      const td = document.createElement('td');
      td.className = 'credit-card';
      td.appendChild(img);
      // <tr>...<td><img></td>...</tr>
      tr.appendChild(td);
    }

    // <table>...<tr></tr>...</table>
    table.appendChild(tr);
  }

  return table;
};

// Display a table of available icons on page load.
window.addEventListener('load', (event) => {
  const pageHeading = document.createElement('h1');
  const pageTitle = document.createTextNode(title);
  pageHeading.appendChild(pageTitle);

  document.body.appendChild(pageHeading);

  const table = iconTable();
  document.body.appendChild(table);
});
