import { PortfolioData } from './types';

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error('Failed to fetch portfolio data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    throw error;
  }
}
