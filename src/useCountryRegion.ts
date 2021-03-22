import { useEffect, useState } from 'react';
import data, { Country } from 'country-region-data';
import {
  CountryState,
  useCountryRegionOutputProps,
  useCountryRegionProps,
} from './types/country-region-hooks';

export const useCountryRegion = (props: useCountryRegionProps): useCountryRegionOutputProps => {
  const { countryCode } = props;
  const [result, setResult] = useState<CountryState>(null);

  const getCountryList = (): Country[] => {
    return data;
  };

  useEffect(() => {
    if (countryCode && countryCode !== '') {
      // By default the country short code should only has two letter ISO country code
      if (countryCode.length !== 2) {
        // handle error
        if (process.env.NODE_ENV !== 'production') {
          throw new Error(`"countryCode" must be have 2 letter ISO country code`);
        }
      }

      const countryResult: CountryState = data.find(d => countryCode === d.countryShortCode);
      if (!countryResult) {
        if (process.env.NODE_ENV !== 'production') {
          throw new Error(`"countryCode" (${countryCode}) does not supported or not exists`);
        }
      }
      return setResult(countryResult);
    }
  }, [countryCode]);

  return { getCountryList, result };
};
