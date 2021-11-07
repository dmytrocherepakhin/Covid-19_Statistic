import { ICountry } from '../components/home/Home';

const baseUrl = 'https://api.covid19api.com/summary';
export async function getCountries(): Promise<ICountry[] | undefined> {
  const response: Response = await fetch(baseUrl);
  if (response.ok) {
    const countries = await response.json();
    countries.Countries.forEach((el: ICountry) =>
      el.Country.includes(',')
        ? (el.Country = el.Country.split(', ').reverse().join(' '))
        : null
    );
    return countries.Countries;
  } else {
    console.error('Error of request: ' + response.status);
  }
}
