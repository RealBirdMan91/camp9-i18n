import { useTranslation, Trans } from "react-i18next";

type Lngs = {
  [key: string]: {
    nativeName: string;
  };
};

const lngs: Lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

function App() {
  const { t, i18n } = useTranslation(["pastry"]);
  return (
    <div className="App">
      <div>
        {Object.keys(lngs).map((key) => (
          <button
            key={key}
            onClick={() => i18n.changeLanguage(key)}
            disabled={i18n.resolvedLanguage === key}
          >
            {lngs[key].nativeName}
          </button>
        ))}
      </div>
      <h1>{t("pastry:cake")}</h1>
      <p>
        <Trans i18nKey="pastry:description">Default value</Trans>
      </p>
    </div>
  );
}

export default App;
