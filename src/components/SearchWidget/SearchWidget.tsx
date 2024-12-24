import React, {FC, useState} from "react";
import TextField from "../../ui/TextField";
import SearchIcon from "../../assets/icons/SearchIcon";
import cs from "classnames";
import VariantsList from "./VariantsList";
import {VARIANTS} from "../../core/static";

interface SearchWidgetModel {
    className?: string
}

export const SearchWidget: FC<SearchWidgetModel> = (
    {
        className
    }
) => {

    let [value, setValue] = useState<string>("");

    return (
        <div className={cs(className, "w-full border border-dark-border shadow-paper-shadow rounded-[10px] bg-dark p-2 flex flex-col gap-2")}>
            <TextField
                placeholderColor={"placeholder-primary-body"}
                append={<SearchIcon />}
                placeholder={"Search for help"}
                onChange={(event) => setValue(event.target.value)}
                value={value}
            />
            <div className={"grid grid-cols-1"}>
                <VariantsList
                    variants={VARIANTS}
                />
            </div>
        </div>
    )
}
