import React from "react";
import cs from "classnames";

interface TextFieldModel {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    append?: React.ReactNode;
    type?: string;
    disabled?: boolean;
    className?: string;
    placeholderColor?: string;
}

export const TextField: React.FC<TextFieldModel> = (props) => {

    const {
        value,
        onChange,
        placeholder,
        append,
        type = "text",
        disabled = false,
        className,
        placeholderColor = "primary-body"
    } = props;

    return (
        <div className={cs("relative inline-block w-full", className)}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={cs(
                    `font-semibold text-primary-body w-full px-3 py-2.5 bg-secondary rounded-lg focus:outline-none focus:ring-1 focus:ring-primary`,
                    {
                        ["pr-10"]: append,
                        ["bg-gray-100 cursor-not-allowed"]: disabled,
                    },
                    placeholderColor
                )}
            />
            {append && (
                <div
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                >
                    {append}
                </div>
            )}
        </div>
    );
};
