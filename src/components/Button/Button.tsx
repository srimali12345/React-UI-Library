import React, { useEffect } from "react";
import classNames from "classnames";
import { ButtonProps } from "../../types";

const injectStyles = () => {
  const styleId = "custom-button-styles";
  if (document.getElementById(styleId)) return; // avoid duplicate injection

  const style = document.createElement("style");
  style.id = styleId;
  style.innerHTML = `
    .custom-button {
      font-family: inherit;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .custom-button.block {
      width: 100%;
    }

    .custom-button.loading {
      opacity: 0.6;
      pointer-events: none;
    }

    .custom-button .icon {
      display: flex;
    }

    .custom-button .spinner {
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top: 2px solid white;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .custom-button .label {
      display: inline-block;
    }

    /* Variants */
    .custom-button.primary {
      background-color: #007bff;
      color: white;
    }
    .custom-button.primary:hover {
      background-color: #0069d9;
    }

    .custom-button.secondary {
      background-color: #6c757d;
      color: white;
    }
    .custom-button.secondary:hover {
      background-color: #5a6268;
    }

    .custom-button.outline {
      background-color: transparent;
      border: 1px solid #007bff;
      color: #007bff;
    }
    .custom-button.outline:hover {
      background-color: #e9f5ff;
    }

    .custom-button.danger {
      background-color: #dc3545;
      color: white;
    }
    .custom-button.danger:hover {
      background-color: #c82333;
    }

    /* Sizes */
    .custom-button.sm {
      padding: 6px 12px;
      font-size: 12px;
    }

    .custom-button.md {
      padding: 8px 16px;
      font-size: 14px;
    }

    .custom-button.lg {
      padding: 10px 20px;
      font-size: 16px;
    }
  `;
  document.head.appendChild(style);
};

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
  useEffect(() => {
    injectStyles();
  }, []);

  const btnClass = classNames(
    "custom-button",
    variant,
    size,
    {
      block,
      loading,
    },
    className
  );

  return (
    <button className={btnClass} disabled={loading || rest.disabled} {...rest}>
      {loading && <span className="spinner" />}
      {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
      <span className="label">{children}</span>
      {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
    </button>
  );
};

export default Button;
