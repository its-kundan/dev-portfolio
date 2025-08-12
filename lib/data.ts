import { PortfolioData } from './types';

// Import the JSON data directly - this works reliably in both dev and production
const portfolioData = require('../public/data.json') as PortfolioData;

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    // Return the imported data directly - this works in both dev and production
    return portfolioData;
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    throw error;
  }
}
