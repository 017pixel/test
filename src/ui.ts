/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { marked } from 'marked';

// DOM Element References
export const button = document.getElementById(
  'interactive-button'
) as HTMLButtonElement;
export const resultContainer = document.getElementById(
  'result-container'
) as HTMLDivElement;

let isLoading = false;

/**
 * Sets the loading state of the application.
 * @param loading - Whether the app is in a loading state.
 */
export function setLoading(loading: boolean) {
  isLoading = loading;
  button.disabled = loading;
  if (loading) {
    button.classList.add('loading');
  } else {
    button.classList.remove('loading');
  }
}

/**
 * @returns The current loading state.
 */
export function getIsLoading(): boolean {
  return isLoading;
}

/**
 * Clears the result container and prepares it for new content.
 */
export function clearResult() {
  resultContainer.innerHTML = '';
  resultContainer.classList.remove('show', 'error');
}

/**
 * Displays the markdown content in the result container.
 * @param markdownText - The markdown string to display.
 */
export async function updateResult(markdownText: string) {
  const htmlContent = await marked.parse(markdownText);
  if (typeof htmlContent === 'string') {
    resultContainer.innerHTML = htmlContent;
  }
  resultContainer.classList.add('show');
}

/**
 * Displays an error message in the result container.
 * @param message - The error message to display.
 */
export function showError(message: string) {
  resultContainer.textContent = message;
  resultContainer.classList.add('error', 'show');
}
