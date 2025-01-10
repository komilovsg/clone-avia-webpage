import React, { useState, useEffect, ChangeEvent } from "react";
import debounce from "lodash/debounce";
import axios from "axios";

interface City {
  city: string;
  country: string;
  country_code: string;
  code_iata: string;
}

interface CitySearchProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const CitySearch: React.FC<CitySearchProps> = ({ value, onChange, label }) => {
  const [results, setResults] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCities = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/cities`,
        {
          params: { q: query },
        },
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchCities = debounce(fetchCities, 300);

  useEffect(() => {
    if (value) {
      debouncedFetchCities(value);
    } else {
      setResults([]);
    }
  }, [value]);

  return (
    <div className="relative">
      <label className="block text-sm font-medium">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        className="block w-full rounded border border-gray-300 p-2.5"
        placeholder={label}
      />
      {loading && (
        <div className="absolute right-0 top-0 mr-2 mt-2">Loading...</div>
      )}
      {results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white shadow-lg">
          {results.map((city) => (
            <li key={city.code_iata} className="p-2 hover:bg-gray-100">
              {city.city}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
