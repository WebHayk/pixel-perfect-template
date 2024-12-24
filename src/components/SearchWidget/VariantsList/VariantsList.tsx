import React, {FC} from "react";
import VariantItem from "../VariantItem";

interface VariantsListModel {
    variants: string[]
}

export const VariantsList: FC<VariantsListModel> = ({variants}) => {
    return (
        <>
            {
                variants.map(variant => {
                    return (
                        <VariantItem
                            key={variant}
                            label={variant}
                        />
                    )
                })
            }
        </>
    )
}
