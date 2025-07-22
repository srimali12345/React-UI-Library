import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "left",
  block = false,
  className,
  children,
  ...rest
}) => {
  const btnClass = classNames(
    styles.button,
    styles[variant],
    styles[size],
    { [styles.block]: block, [styles.loading]: loading },
    className
  );

  return (
    <button className={btnClass} disabled={loading || rest.disabled} {...rest}>
      {loading && <span className={styles.spinner} />}
      {icon && iconPosition === "left" && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === "right" && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
