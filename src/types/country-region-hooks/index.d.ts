import { Country } from 'country-region-data';

export interface useCountryRegionProps {
  countryCode: string | null | undefined;
}

export interface useCountryRegionOutputProps {
  result: CountryState;
  getCountryList: () => Country[];
}

export type CountryState = Country | null | undefined;
