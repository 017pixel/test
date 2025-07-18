/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from '@google/genai';
import { marked } from 'marked';

const button = document.getElementById('interactive-button') as HTMLButtonElement;
const resultContainer = document.getElementById(
  'result-container'
) as HTMLDivElement;

let isLoading = false;

// Initialize the GoogleGenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

button.addEventListener('click', async () => {
  if (isLoading) {
    return;
  }

  isLoading = true;
  button.disabled = true;
  button.classList.add('loading');
  resultContainer.innerHTML = ''; // Clear previous content
  resultContainer.classList.remove('show', 'error');

  try {
    // Call the Gemini API to generate a fun fact in German, requesting markdown
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents:
        'Erzähle mir einen zufälligen, interessanten Fakt auf Deutsch. Nutze Markdown zur Formatierung.',
    });

    // Parse the markdown response and display it as HTML
    const htmlContent = await marked.parse(response.text);
    if (typeof htmlContent === 'string') {
      resultContainer.innerHTML = htmlContent;
    }
    resultContainer.classList.add('show');
  } catch (error) {
    console.error('Error fetching data from Gemini API:', error);
    resultContainer.textContent =
      'Etwas ist schiefgelaufen. Bitte versuche es später erneut.';
    resultContainer.classList.add('error', 'show');
  } finally {
    isLoading = false;
    button.disabled = false;
    button.classList.remove('loading');
  }
});