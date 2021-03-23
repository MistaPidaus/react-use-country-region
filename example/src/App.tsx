import React, { useState } from 'react';

import { useCountryRegion, CountryRegionProp } from 'react-use-country-region';

const App = () => {
  const [country, setCountry] = useState<CountryRegionProp>(null);
  const { result } = useCountryRegion(country);
  return (
    <div>
      <button onClick={() => setCountry('MY')}>Country: Malaysia (MY)</button>
      <button onClick={() => setCountry('US')}>Country: United States (US)</button>
      <button onClick={() => setCountry('CA')}>Country: Canada (CA)</button>
      <button onClick={() => setCountry('GB')}>Country: United Kingdom (GB)</button>
      <button onClick={() => setCountry('JP')}>Country: Japan (JP)</button>
      <button onClick={() => setCountry('CH')}>Country: Switzerland (CH)</button>
      <pre>{JSON.stringify(result, null, 4)}</pre>
    </div>
  );
};
export default App;
