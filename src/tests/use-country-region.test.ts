import { renderHook } from '@testing-library/react-hooks';
import { useCountryRegion } from '..';

// clean up errors
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});
afterEach(() => {
  jest.spyOn(console, 'error').mockRestore();
});

describe('useCountryRegion Tests', () => {
  it('should list all country', () => {
    const { result } = renderHook(() => useCountryRegion({ countryCode: null }));

    const countries = result.current.getCountryList();

    expect(countries.length).toBeGreaterThanOrEqual(1);
  });

  it('should display a correct result', () => {
    const { result: data } = renderHook(() => useCountryRegion({ countryCode: 'MY' }));

    expect(data.current.result?.countryShortCode).toBe('MY');
    expect(data.current.result?.regions.length).toBeGreaterThanOrEqual(1);
  });

  it('should display result on value change', () => {
    let country = '';
    const { result: data, rerender } = renderHook(() => useCountryRegion({ countryCode: country }));

    expect(data.current.result).toBe(null);
    expect(data.current.result?.countryShortCode).toBe(undefined);

    country = 'MY';
    rerender();

    expect(data.current.result?.countryShortCode).toBe('MY');
    expect(data.current.result?.regions.length).toBeGreaterThanOrEqual(1);
  });

  it('should throw an error if invalid country ISO code', () => {
    expect(() => renderHook(() => useCountryRegion({ countryCode: 'MYR' }))).toThrow(
      new Error('"countryCode" must be have 2 letter ISO country code')
    );
  });

  it('should throw an error if unsupported/non-existence country ISO code', () => {
    expect(() => renderHook(() => useCountryRegion({ countryCode: 'TY' }))).toThrow(
      new RegExp('does not supported or not exists')
    );
  });
});
