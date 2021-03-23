import { Country } from 'country-region-data';

export type CountryRegionProp = string | null | undefined;

export interface useCountryRegionOutputProps {
  result: CountryState;
  getCountryList: () => Country[];
}

export type CountryState = Country | null | undefined;
