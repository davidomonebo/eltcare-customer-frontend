"use client";
import React from "react";
import { motion } from "framer-motion";
import { Field, FieldProps, ErrorMessage } from "formik";

interface IInputProps extends React.PropsWithChildren {
    name: string;
    label: string;
    isPassword?: true;
    disabled?: boolean;
    placeholder: string;
    inputClassName?: string;
    labelClassName?: string;
    wrapperClassName?: string;
    containerClassName?: string;
    type?: React.HTMLInputTypeAttribute;
    element?: "input" | "select" | "textarea";
}

export function Input(properties: IInputProps) {
    const [visible, setVisible] = React.useState(false);
    const Element = motion[properties.element || "input"];

    return (
        <Field name={properties.name}>
            {(props: FieldProps) => (
                <div className={`flex flex-col gap-1 ${properties.containerClassName}`}>
                    <label htmlFor={properties.name} className={`flex text-sm lg:text-base font-semibold items-center gap-2 ${properties.labelClassName}`}>
                        {properties.label}
                    </label>

                    <div className={`flex px-4 gap-2 rounded-md border border-slate-600 ${properties.wrapperClassName}`}>
                        <Element
                            name={properties.name}
                            value={props.field.value}
                            disabled={properties.disabled}
                            onChange={props.form.handleChange}
                            placeholder={properties.placeholder}
                            type={visible ? 'text' : properties.type}
                            onBlur={() => props.form.setFieldTouched(properties.name, true)}
                            className={`flex-1 w-full h-10 border-none outline-none bg-ransparent ${properties.inputClassName}`}
                        >
                            {properties.children}
                        </Element>
                        {properties.isPassword && (
                            <button type="button" onClick={() => setVisible(!visible)}>
                                <i className={`fa-regular ${visible ? "fa-eye-slash" : "fa-eye"}`} />
                            </button>
                        )}
                    </div>

                    <ErrorMessage
                        name={properties.name}
                        render={message => (<span className="text-sm text-red-600 variant-small-caps">{message}</span>)}
                    />
                </div>
            )}
        </Field>
    );
}
