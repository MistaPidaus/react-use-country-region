# react-use-country-region

[![NPM](https://img.shields.io/npm/v/react-use-country-region.svg)](https://www.npmjs.com/package/react-use-country-region) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple react hook to display a country regions. Use with any UI Framework (Material UI) or any Headless UI (React Aria, Reach UI, etc)
Uses [country-region-data](https://github.com/country-regions/country-region-data) package dependencies to provide (latest) data.

## Install

```bash
yarn add react-use-country-region
```

## Usage

### Get list of countries

To get list of available countries

```tsx
import { useCountryRegion } from 'react-use-country-region';

const Example = () => {
  const { getCountryList } = useCountryRegion();
  const data = getCountryList();

  return <div>{JSON.stringify(data)}</div>;
};
```

### Get list of regions

Simply pass a valid ISO country code to get regions/state/provice data

```tsx
import { useCountryRegion } from 'react-use-country-region';

const Example = () => {
  const { result } = useCountryRegion('MY');
  return <div>{JSON.stringify(result.regions)}</div>;
};
```

## License

MIT © [MistaPidaus](https://github.com/MistaPidaus)
