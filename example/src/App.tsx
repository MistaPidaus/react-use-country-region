import React, { useState } from 'react';

import { useCountryRegion, CountryRegionProp } from 'react-use-country-region';

const App = () => {
  const [country, setCountry] = useState<CountryRegionProp>(null);
  const { result } = useCountryRegion(country);

  document.title = 'React - useCountryRegion hook example';

  return (
    <div>
      <div style={{ maxWidth: '1280px', margin: '0 auto', marginTop: '3rem' }}>
        <h1>React - useCountryRegion hook example</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <button style={{ padding: '1rem' }} onClick={() => setCountry('MY')}>
            Country: Malaysia (MY)
          </button>
          <button style={{ padding: '1rem' }} onClick={() => setCountry('US')}>
            Country: United States (US)
          </button>
          <button style={{ padding: '1rem' }} onClick={() => setCountry('CA')}>
            Country: Canada (CA)
          </button>
          <button style={{ padding: '1rem' }} onClick={() => setCountry('GB')}>
            Country: United Kingdom (GB)
          </button>
          <button style={{ padding: '1rem' }} onClick={() => setCountry('JP')}>
            Country: Japan (JP)
          </button>
          <button style={{ padding: '1rem' }} onClick={() => setCountry('CH')}>
            Country: Switzerland (CH)
          </button>
          <pre>{JSON.stringify(result, null, 4)}</pre>
        </div>
      </div>
    </div>
  );
};
export default App;
