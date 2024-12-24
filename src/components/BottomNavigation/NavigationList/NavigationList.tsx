import React, {FC} from "react";
import {MenuItemModel} from "../../../core/interfaces/common.interfaces";
import NavigationItem from "./NavigationItem";

interface NavigationListModel {
    list: MenuItemModel[]
}

export const NavigationList: FC<NavigationListModel> = (
    {
        list
    }
) => {
    return (
        <>
            {
                list.map(item => {
                    return (
                        <NavigationItem
                            key={item.label}
                            item={item}
                        />
                    )
                })
            }
        </>
    )
}
