import React from "react";
import {useTranslation} from "react-i18next";

const Title = () => {
    const { t } = useTranslation();
  return (
    <div>
        {t('tag-line')}
    </div>
  );
};

export default Title;