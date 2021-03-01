import { createContext, useState } from "react";
import { defaultLocale } from "../config.yaml";
import rosetta from "rosetta";

const I18nContext = createContext({});

export const I18nProvider = ({ locales, ...props }) => {
  const [locale, setLocale] = useState(defaultLocale);

  const getI18n = () => {
    const i18n = rosetta();
    const table = require(`../i18n/${locale}.yaml`);

    i18n.set(locale, table);
    i18n.locale(locale);

    return i18n;
  };

  const context = {
    ...getI18n(),
    locales,
    setLocale,
  };

  return <I18nContext.Provider value={context} {...props} />;
};

export default I18nContext;
