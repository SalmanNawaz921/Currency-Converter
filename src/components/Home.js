import React from "react";
import { useState, useEffect } from "react";
import { CurrencyItem } from "./CurrencyItem";
import "../App.css";

function Home(props) {
  const { apiKey } = props;
  const currencies = {
    ADA: { code: "ADA", value: 3.8256406852 },
    AED: { code: "AED", value: 3.6735206829 },
    AFN: { code: "AFN", value: 83.0939996932 },
    ALL: { code: "ALL", value: 102.5159128156 },
    AMD: { code: "AMD", value: 386.8575581867 },
    ANG: { code: "ANG", value: 1.7864703394 },
    AOA: { code: "AOA", value: 824.9126786337 },
    ARB: { code: "ARB", value: 1.0528652191 },
    ARS: { code: "ARS", value: 350.0859342763 },
    AUD: { code: "AUD", value: 1.5623102061 },
    AVAX: { code: "AVAX", value: 0.099374755 },
    AWG: { code: "AWG", value: 1.79 },
    AZN: { code: "AZN", value: 1.7 },
    BAM: { code: "BAM", value: 1.8153402092 },
    BBD: { code: "BBD", value: 2 },
    BDT: { code: "BDT", value: 109.2056507161 },
    BGN: { code: "BGN", value: 1.8030803483 },
    BHD: { code: "BHD", value: 0.376 },
    BIF: { code: "BIF", value: 2829.7793258686 },
    BMD: { code: "BMD", value: 1 },
    BNB: { code: "BNB", value: 0.0045738868 },
    BND: { code: "BND", value: 1.3558801565 },
    BOB: { code: "BOB", value: 6.9363911569 },
    BRL: { code: "BRL", value: 4.8727707222 },
    BSD: { code: "BSD", value: 1 },
    BTC: { code: "BTC", value: 3.82267e-5 },
    BTN: { code: "BTN", value: 82.6773344896 },
    BUSD: { code: "BUSD", value: 0.9962898511 },
    BWP: { code: "BWP", value: 13.5611518425 },
    BYN: { code: "BYN", value: 2.518426474 },
    BYR: { code: "BYR", value: 25184.264864107 },
    BZD: { code: "BZD", value: 2 },
    CAD: { code: "CAD", value: 1.3600002409 },
    CDF: { code: "CDF", value: 2480.2006297739 },
    CHF: { code: "CHF", value: 0.8843401442 },
    CLF: { code: "CLF", value: 0.0230300043 },
    CLP: { code: "CLP", value: 845.5790330921 },
    CNY: { code: "CNY", value: 7.291111346 },
    COP: { code: "COP", value: 4121.0008011503 },
    CRC: { code: "CRC", value: 538.3535620514 },
    CUC: { code: "CUC", value: 1 },
    CUP: { code: "CUP", value: 24 },
    CVE: { code: "CVE", value: 102.1867139095 },
    CZK: { code: "CZK", value: 22.2880122994 },
    DAI: { code: "DAI", value: 1.00958398 },
    DJF: { code: "DJF", value: 177.721 },
    DKK: { code: "DKK", value: 6.9068710476 },
    DOP: { code: "DOP", value: 56.7412583681 },
    DOT: { code: "DOT", value: 0.2225203482 },
    DZD: { code: "DZD", value: 137.1294687456 },
    EGP: { code: "EGP", value: 30.9033955924 },
    ERN: { code: "ERN", value: 15 },
    ETB: { code: "ETB", value: 55.2095405751 },
    ETH: { code: "ETH", value: 0.0006022161 },
    EUR: { code: "EUR", value: 0.926300175 },
    FJD: { code: "FJD", value: 2.2652402709 },
    FKP: { code: "FKP", value: 0.7949335322 },
    GBP: { code: "GBP", value: 0.7951701055 },
    GEL: { code: "GEL", value: 2.6346504563 },
    GGP: { code: "GGP", value: 0.7949337363 },
    GHS: { code: "GHS", value: 11.2552512274 },
    GIP: { code: "GIP", value: 0.7949340143 },
    GMD: { code: "GMD", value: 58.9011696322 },
    GNF: { code: "GNF", value: 8533.7167054616 },
    GTQ: { code: "GTQ", value: 7.8573513067 },
    GYD: { code: "GYD", value: 208.8947446969 },
    HKD: { code: "HKD", value: 7.8441514882 },
    HNL: { code: "HNL", value: 24.6148225528 },
    HRK: { code: "HRK", value: 7.0440408034 },
    HTG: { code: "HTG", value: 135.4882514949 },
    HUF: { code: "HUF", value: 353.5226229703 },
    IDR: { code: "IDR", value: 15277.99275291 },
    ILS: { code: "ILS", value: 3.7994705256 },
    IMP: { code: "IMP", value: 0.7949338283 },
    INR: { code: "INR", value: 82.6248514966 },
    IQD: { code: "IQD", value: 1312.5160809789 },
    IRR: { code: "IRR", value: 42008.753430732 },
    ISK: { code: "ISK", value: 132.4093662408 },
    JEP: { code: "JEP", value: 0.7949340912 },
    JMD: { code: "JMD", value: 156.6070602656 },
    JOD: { code: "JOD", value: 0.71 },
    JPY: { code: "JPY", value: 146.4957357505 },
    KES: { code: "KES", value: 144.6668563119 },
    KGS: { code: "KGS", value: 88.4661393516 },
    KHR: { code: "KHR", value: 4146.8596669846 },
    KMF: { code: "KMF", value: 455.582139483 },
    KPW: { code: "KPW", value: 899.9998476628 },
    KRW: { code: "KRW", value: 1322.5271925137 },
    KWD: { code: "KWD", value: 0.308540035 },
    KYD: { code: "KYD", value: 0.83333 },
    KZT: { code: "KZT", value: 463.8383401837 },
    LAK: { code: "LAK", value: 19545.08928747 },
    LBP: { code: "LBP", value: 15013.679312191 },
    LKR: { code: "LKR", value: 323.7086847401 },
    LRD: { code: "LRD", value: 186.149841233 },
    LSL: { code: "LSL", value: 18.5147921968 },
    LTC: { code: "LTC", value: 0.0153173878 },
    LTL: { code: "LTL", value: 3.1982440993 },
    LVL: { code: "LVL", value: 0.6509866528 },
    LYD: { code: "LYD", value: 4.8184709289 },
    MAD: { code: "MAD", value: 10.10043185 },
    MATIC: { code: "MATIC", value: 1.8301257482 },
    MDL: { code: "MDL", value: 17.7442032754 },
    MGA: { code: "MGA", value: 4490.3237290296 },
    MKD: { code: "MKD", value: 56.7997901207 },
    MMK: { code: "MMK", value: 2095.0622963423 },
    MNT: { code: "MNT", value: 3476.0994974 },
    MOP: { code: "MOP", value: 8.0824614461 },
    MRO: { code: "MRO", value: 356.999828 },
    MUR: { code: "MUR", value: 45.9508681331 },
    MVR: { code: "MVR", value: 15.4530917723 },
    MWK: { code: "MWK", value: 1075.6761009069 },
    MXN: { code: "MXN", value: 16.7372821735 },
    MYR: { code: "MYR", value: 4.6390606798 },
    MZN: { code: "MZN", value: 63.6999074251 },
    NAD: { code: "NAD", value: 18.6033718917 },
    NGN: { code: "NGN", value: 772.3856129296 },
    NIO: { code: "NIO", value: 36.6150016563 },
    NOK: { code: "NOK", value: 10.6964911361 },
    NPR: { code: "NPR", value: 132.3751791201 },
    NZD: { code: "NZD", value: 1.6933502955 },
    OMR: { code: "OMR", value: 0.3841900499 },
    OP: { code: "OP", value: 0.6805525903 },
    PAB: { code: "PAB", value: 0.9992801888 },
    PEN: { code: "PEN", value: 3.6803705856 },
    PGK: { code: "PGK", value: 3.616030551 },
    PHP: { code: "PHP", value: 56.6104563539 },
    PKR: { code: "PKR", value: 300.0278797453 },
    PLN: { code: "PLN", value: 4.1379305508 },
    PYG: { code: "PYG", value: 7313.399335971 },
    QAR: { code: "QAR", value: 3.6399905529 },
    RON: { code: "RON", value: 4.5700305329 },
    RSD: { code: "RSD", value: 108.1663691043 },
    RUB: { code: "RUB", value: 95.0008132541 },
    RWF: { code: "RWF", value: 1187.5001225705 },
    SAR: { code: "SAR", value: 3.7485706353 },
    SBD: { code: "SBD", value: 8.4314587622 },
    SCR: { code: "SCR", value: 14.1887722015 },
    SDG: { code: "SDG", value: 601.5 },
    SEK: { code: "SEK", value: 11.0526412544 },
    SGD: { code: "SGD", value: 1.3552601938 },
    SHP: { code: "SHP", value: 0.795170101 },
    SLL: { code: "SLL", value: 21849.239316553 },
    SOL: { code: "SOL", value: 0.0489743604 },
    SOS: { code: "SOS", value: 568.6809096886 },
    SRD: { code: "SRD", value: 38.4083248297 },
    STD: { code: "STD", value: 22675.976686674 },
    SVC: { code: "SVC", value: 8.75 },
    SYP: { code: "SYP", value: 13100.003672373 },
    SZL: { code: "SZL", value: 18.5976526664 },
    THB: { code: "THB", value: 35.1417851894 },
    TJS: { code: "TJS", value: 10.9585713022 },
    TMT: { code: "TMT", value: 3.5 },
    TND: { code: "TND", value: 3.1011505101 },
    TOP: { code: "TOP", value: 2.3603904334 },
    TRY: { code: "TRY", value: 26.5527245903 },
    TTD: { code: "TTD", value: 6.7787907285 },
    TWD: { code: "TWD", value: 31.8660953687 },
    TZS: { code: "TZS", value: 2494.9272494551 },
    UAH: { code: "UAH", value: 36.687904627 },
    UGX: { code: "UGX", value: 3698.4419792954 },
    USD: { code: "USD", value: 1 },
    USDC: { code: "USDC", value: 0.9995158176 },
    USDT: { code: "USDT", value: 1.0001328118 },
    UYU: { code: "UYU", value: 37.736564388 },
    UZS: { code: "UZS", value: 12057.094518317 },
    VEF: { code: "VEF", value: 3222124.8850213 },
    VND: { code: "VND", value: 24024.097277249 },
    VUV: { code: "VUV", value: 120.9902012448 },
    WST: { code: "WST", value: 2.7770585857 },
    XAF: { code: "XAF", value: 607.773605603 },
    XAG: { code: "XAG", value: 0.0412943772 },
    XAU: { code: "XAU", value: 0.0005223649 },
    XCD: { code: "XCD", value: 2.7 },
    XDR: { code: "XDR", value: 0.7521600787 },
    XOF: { code: "XOF", value: 607.7736106188 },
    XPD: { code: "XPD", value: 0.0008041958 },
    XPF: { code: "XPF", value: 110.4874565518 },
    XPT: { code: "XPT", value: 0.0010558561 },
    XRP: { code: "XRP", value: 1.887888245 },
    YER: { code: "YER", value: 249.8696283831 },
    ZAR: { code: "ZAR", value: 18.5935919932 },
    ZMK: { code: "ZMK", value: 9001.2 },
    ZMW: { code: "ZMW", value: 19.7877736296 },
    ZWL: { code: "ZWL", value: 4559.590002104 },
  };

  const myStyle = {
    margin: "auto",
    width: "100%",
    padding: "40px",
  };
  const [options, setOptions] = useState({
    toCurrency: currencies.PKR.code,
    baseCurrency: currencies.USD.code,
    currenciesArr: [],
    value: 0,
    convertedValue: 0,
    isSubmit: false,
  });

  const handleChange = (e) => {
    const newBValue = e.target.value;
    setOptions((prevOptions) => ({
      ...prevOptions,
      value: newBValue,
      convertedValue:
        newBValue * options.currenciesArr[options.toCurrency].value,
    }));
  };

  const fetchData = async () => {
    let url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${options.baseCurrency}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setOptions((prevOptions) => ({
      ...prevOptions,
      currenciesArr: parseData["data"],
      convertedValue: parseData.data[options.toCurrency].value * options.value,
    }));
  };

  useEffect(() => {
    fetchData();
  }, [options.baseCurrency, options.toCurrency]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOptions((prevOptions) => ({
      ...prevOptions,
      isSubmit: true,
    }));
    await fetchData();
  };
  const handleBaseCurrencyChange = (event) => {
    const newBaseCurrency = event.target.value;
    setOptions((prevOptions) => ({
      ...prevOptions,
      baseCurrency: newBaseCurrency,
      if(isSubmit) {
        fetchData();
      },
    }));
  };

  const handleToCurrencyChange = (event) => {
    const newToCurrency = event.target.value;
    setOptions((prevOptions) => ({
      ...prevOptions,
      toCurrency: newToCurrency,
    }));
  };

  const handleSwap = (event) => {
    let temp;
    temp = options.toCurrency;
    setOptions((prevOptions) => ({
      ...prevOptions,
      toCurrency: options.baseCurrency,
      baseCurrency: temp,
    }));
  };

  return (
    <div
      className="container bg-light"
      style={{ width: "30%", minHeight: "40vh", marginTop: "20vh" }}
    >
      <form onSubmit={handleSubmit} className="p-4">
        <h1 className="text-center">Exchange Your Currency</h1>
        <div className="mb-3">
          <label htmlFor="inp_amount" className="form-label">
            Amount
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="inp_amount"
            value={options.value}
            onChange={handleChange}
          />
        </div>
        <div className="row align-items-center">
          <div className="col-md-5 mb-3">
            <label htmlFor="sel_base" className="form-label">
              From
            </label>
            <select
              className="form-select form-select-sm"
              id="sel_base"
              value={options.baseCurrency}
              onChange={handleBaseCurrencyChange}
            >
              {Object.values(options.currenciesArr).map((currency) => (
                <option key={currency.code}>{currency.code}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <i
              class="fa-solid fa-arrow-right-arrow-left"
              style={{
                color: "#000000",
                fontSize: "1.2rem",
                marginTop: "20px",
                cursor: "pointer",
                transitionDelay: "1.2s",
                transition: "all 0.2s ease",
              }}
              onClick={handleSwap}
              onMouseEnter={(e) => {
                e.target.classList.add("hover-effect");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("hover-effect");
              }}
            ></i>
          </div>
          <div className="col-md-5 mb-3">
            <label htmlFor="sel_to" className="form-label">
              To
            </label>
            <select
              className="form-select form-select-sm"
              id="sel_to"
              value={options.toCurrency}
              onChange={handleToCurrencyChange}
            >
              {Object.values(options.currenciesArr).map((currency) => (
                <option key={currency.code}>{currency.code}</option>
              ))}
            </select>
          </div>
        </div>
        <CurrencyItem
          baseCurr={options.baseCurrency}
          toCurr={options.toCurrency}
          convertedVal={options.convertedValue}
          amount={options.value}
          isSubmit={options.isSubmit}
        />
        <div className="mt-4">
          <button type="submit" className="btn btn-outline-dark" id="submitBtn">
            Convert
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
