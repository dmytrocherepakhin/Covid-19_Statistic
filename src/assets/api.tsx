import { ICountry } from '../assets/types';

const baseUrl = 'https://api.covid19api.com/summary';
export async function getCountries(): Promise<ICountry[] | undefined> {
  try {
    const response: Response = await fetch(baseUrl);
    const countries = await response.json();
    countries.Countries.forEach((el: ICountry) =>
      el.Country.includes(',')
        ? (el.Country = el.Country.split(', ').reverse().join(' '))
        : null
    );
    return countries.Countries;
  } catch (err) {
    console.log(err);
  }
}
