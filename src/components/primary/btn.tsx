"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ComponentProps<typeof motion.button> {
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function MyButton(props: ButtonProps) {
  return (
    <motion.button
      {...props}
      onClick={props.loading || props.disabled ? undefined : props.onClick}
      whileTap={!props.loading && !props.disabled ? { scale: 0.9 } : undefined}
      className={`bg-brand-900 whitespace-nowrap cursor-pointer text-white bg-blue-dark py-2 px-6 rounded-md flex items-center justify-center gap-2 ${props.loading || props.disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${props.className}`}
      disabled={props.loading || props.disabled}
    >
      {props.icon && (props.iconPosition ?? "left") === "left" && (
        <span className="flex items-center">{props.icon}</span>
      )}
      {props.loading ? (
        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
      ) : (
        props.children
      )}
      {props.icon && props.iconPosition === "right" && (
        <span className="flex items-center">{props.icon}</span>
      )}
    </motion.button>
  );
}
