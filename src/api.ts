/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from '@google/genai';
import { API_KEY } from './config';

// Initialize the GoogleGenAI client with the API key from the config file.
const ai = new GoogleGenAI({ apiKey: API_KEY });
const model = 'gemini-2.5-flash';
const prompt =
  'Erzähle mir einen zufälligen, interessanten Fakt auf Deutsch. Nutze Markdown zur Formatierung.';

/**
 * Fetches a fun fact from the Gemini API.
 * @returns A promise that resolves to the fun fact as a markdown string.
 */
export async function fetchFunFact(): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error('Error fetching data from Gemini API:', error);
    // Re-throw the error to be handled by the caller
    throw new Error('Fehler beim Abrufen der Daten von der Gemini API.');
  }
}
