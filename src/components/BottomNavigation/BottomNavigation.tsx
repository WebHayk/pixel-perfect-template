import React, {FC} from "react";
import NavigationList from "./NavigationList";
import {MENU_ITEMS} from "../../core/static";
import cs from "classnames";

interface BottomNavigationModel {
    className?: string
}

export const BottomNavigation: FC<BottomNavigationModel> = (
    {
        className
    }
) => {
    return (
        <div className={cs(className, "bg-dark z-[5] border-t border-t-dark-border shadow-paper-shadow-lg rounded-lg")}>
            <ul className={`grid grid-cols-3 w-full`}>
                <NavigationList
                    list={MENU_ITEMS}
                />
            </ul>
        </div>
    )
}

