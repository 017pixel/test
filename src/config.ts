/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This file contains the configuration for the application, including sensitive data like API keys.
 *
 * IMPORTANT: The API key is sourced from environment variables.
 * - For local development, create a `.env` file at the root of your project and add:
 *   API_KEY="YOUR_GEMINI_API_KEY"
 * - For deployment, set the API_KEY as an environment variable in your hosting provider's settings.
 *
 * This setup ensures that your secret key is never hardcoded or exposed in the client-side code.
 */

// It is a common practice to load environment variables from a .env file
// in development. A bundler like Vite or a tool like dotenv can handle this.
// We assume process.env.API_KEY is populated by the build/runtime environment.
export const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error(
    'API_KEY is not defined. Please set it in your environment variables.'
  );
}
