import { useEffect, useState } from 'react';
import data, { Country } from 'country-region-data';
import {
  CountryState,
  useCountryRegionOutputProps,
  CountryRegionProp,
} from './types/country-region-hooks';

export const useCountryRegion = (country?: CountryRegionProp): useCountryRegionOutputProps => {
  const [result, setResult] = useState<CountryState>(null);

  const getCountryList = (): Country[] => {
    return data;
  };

  useEffect(() => {
    if (country && country !== '') {
      // By default the country short code should only has two letter ISO country code
      if (country.length !== 2) {
        // handle error
        if (process.env.NODE_ENV !== 'production') {
          throw new Error(`"countryCode" must be have 2 letter ISO country code`);
        }
      }

      const countryResult: CountryState = data.find(d => country === d.countryShortCode);
      if (!countryResult) {
        if (process.env.NODE_ENV !== 'production') {
          throw new Error(`"country" (${country}) does not supported or not exists`);
        }
      }
      return setResult(countryResult);
    }
  }, [country]);

  return { getCountryList, result };
};
