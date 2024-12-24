import React, {FC} from "react";
import ArrowIcon from "../../../assets/icons/ArrowIcon";

interface VariantItemModel {
    label: string
}

export const VariantItem: FC<VariantItemModel> = (
    {
        label
    }
) => {
    return (
        <div className={"active:ring-1 active:ring-primary active:ring-offset-transparent active:ring-offset-2 cursor-pointer hover-state duration-300 items-center-between py-3 px-3 rounded-lg"}>
            <p className={"font-normal text-primary-body"}>{label}</p>
            <ArrowIcon />
        </div>
    )
}
