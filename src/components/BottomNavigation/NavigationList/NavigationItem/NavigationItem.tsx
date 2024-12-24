import React, {FC, useMemo} from "react";
import {MenuItemModel} from "../../../../core/interfaces/common.interfaces";
import cs from "classnames";
import {useLocation} from "react-router-dom";

interface NavigationItemModel {
    item: MenuItemModel
}

export const NavigationItem: FC<NavigationItemModel> = ({item}) => {

    let {
        path,
        label
    } = item;

    const {pathname} = useLocation();

    const isActivePath = useMemo(() => {
        return pathname === path;
    },[path, pathname]);

    return (
        <li className={"hover:bg-primary/20 active:bg-primary/30 rounded-lg duration-300 cursor-pointer py-[14px] flex flex-col justify-center items-center gap-2"}>
            <item.icon/>
            <p className={cs({
                ["text-primary-body"]: !isActivePath,
                ["text-primary font-semibold"]: isActivePath
            })}>{label}</p>
        </li>
    )
}
