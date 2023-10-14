import React from "react";
import SectionTitle from "../UI/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";
import { getCurrency } from "../util/Constants";

const CurrencyConverter = () => {
  const [currency, setCurrency] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");
  const [conversionResult, setConversionResult] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCurrencyInputChange = (e) => setCurrency(+e.target.value);
  const handleFromChange = (e) => setFrom(e.target.value);
  const handleToChange = (e) => setTo(e.target.value);

  useEffect(() => {
    setError(null);
    if (!currency) {
      setConversionResult("");
      return;
    }
    if (from === to) {
      setConversionResult(currency);
      return;
    }
    
    const controller = new AbortController()
    const fetchCurrency = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(getCurrency(currency, from, to), {
          signal: controller.signal
        });
        if (!res.ok) throw new Error("Something wrong happened");
        const data = await res.json();
        if (!data || Object.keys(data.rates).length === 0)
          throw new Error("Data is empty");
        //MASTER THIS DYNAMIC ACCESS
        const result = data["rates"][to];
        if (!result) throw new Error("Currency not found");
        setConversionResult(result);
        // setError(null) Recommended to be done here
      } catch (e) {
        if(e.name !== "AbortError") setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrency();

    //PREVENTS RACE CONDITION (ABORTS PREVIOUS REQUEST AND FETCHES THE MOST RECENT REQUEST IN CASE OF ONCHANGE)
    return () => controller.abort()
  }, [currency, from, to]);

  return (
    <section className="mb-20">
      <SectionTitle>Currency Converter</SectionTitle>
      <div className="flex justify-center items-center">
        <input
          placeholder="Enter amount..."
          type="text"
          value={currency}
          onChange={handleCurrencyInputChange}
        />
        <label className="ml-5">From: </label>
        <select onClick={handleFromChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <label className="ml-5">To: </label>
        <select onClick={handleToChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        {isLoading && <p className="ml-10">Loading...</p>}
        {!error && !isLoading && (
          <p className="ml-10">
            Result:{" "}
            {conversionResult
              ? conversionResult
              : "Please enter a value to convert"}
          </p>
        )}
        {error && <p className="ml-10">Error: {error}</p>}
      </div>
    </section>
  );
};

export default CurrencyConverter;
