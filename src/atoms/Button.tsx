import React, { FC, ReactNode } from "react";
import { Button as MuiButton, SxProps } from "@mui/material";
import { colors } from "utils/constants";
import "@fontsource/roboto/700.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  sx?: SxProps;
  color?: string;
  margin?: string;
  disabled?: boolean;
  size?: "medium" | "small" | "large";
  variant?: "text" | "contained" | "outlined";
  backgroundColor?: string;
  backgroundColorHover?: string;
  borderColor?: string;
};

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  variant,
  icon,
  sx,
  margin,
  size,
  disabled,
  color,
  backgroundColor,
  backgroundColorHover,
  borderColor,
}: ButtonProps) => {
  return (
    <MuiButton
      startIcon={icon}
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      sx={{
        ...sx,
        margin: margin,
        padding: "7px 23px",
        borderRadius: "9px",
        fontFamily: "Roboto",
        borderColor: borderColor,
        backgroundColor: variant === "contained" ? backgroundColor : "",
        color: color,
        "&:hover": { backgroundColor: backgroundColorHover },
      }}
    >
      {label}
    </MuiButton>
  );
};

Button.defaultProps = {
  size: "medium",
  variant: "contained",
  color: colors.white,
  backgroundColor: colors.primary,
  backgroundColorHover: colors.tertiary,
};
