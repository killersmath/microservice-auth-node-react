import React from "react";

import styles from "./PageTitle.module.scss";

type PageTitleProps = React.HTMLProps<HTMLParagraphElement>;

const PageTitle: React.FC<PageTitleProps> = ({ children, ...rest }) => {
  return (
    <p className={styles.title} {...rest}>
      {children}
    </p>
  );
};

export default PageTitle;
