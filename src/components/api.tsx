import { ICovidData } from './home/Home';

const baseUrl = 'https://api.covid19api.com/summary';
export async function getCountries(): Promise<ICovidData | undefined> {
  const response: Response = await fetch(baseUrl);
  if (response.ok) {
    const countries = await response.json();
    return countries;
  } else {
    console.error('Error of request: ' + response.status);
  }

  // try {
  //   return countries;
  // } catch (err: unknown) {
  //   throw new Error('Error of request');
  // }
}
