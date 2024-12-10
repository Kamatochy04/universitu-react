import React, { FC } from "react";

import styles from "./container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
