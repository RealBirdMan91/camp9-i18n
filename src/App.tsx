import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

type Lngs = {
  [key: string]: {
    nativeName: string;
  };
};

interface Blog {
  title: string;
  body: string;
}

const lngs: Lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

function App() {
  const { t, i18n } = useTranslation(["pastry", "blog"]);
  const [apple, setApple] = useState(0);

  const posts = t("blog:posts", { returnObjects: true }) as Blog[];
  console.log(posts);
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

      <h2>{t("pastry:interpol", { is: "Apple" })}</h2>
      <h1>{t("pastry:plural.apple", { count: apple })}</h1>
      <button onClick={() => setApple(apple + 1)}>Countula</button>

      <div id="blog">
        {posts.map((post) => (
          <div key={post.title} className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
