/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { fetchFunFact } from './api';
import {
  button,
  setLoading,
  getIsLoading,
  clearResult,
  updateResult,
  showError,
} from './ui';

// Attach the main event listener to the button
button.addEventListener('click', async () => {
  if (getIsLoading()) {
    return;
  }

  setLoading(true);
  clearResult();

  try {
    const fact = await fetchFunFact();
    await updateResult(fact);
  } catch (error) {
    console.error(error);
    showError('Etwas ist schiefgelaufen. Bitte versuche es später erneut.');
  } finally {
    setLoading(false);
  }
});
