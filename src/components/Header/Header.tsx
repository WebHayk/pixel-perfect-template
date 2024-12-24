import React, {FC} from "react";
import AvatarGroup from "../../ui/AvatarGroup";
import {SendMessageWidget} from "../SendMessageWidget/SendMessageWidget";
import {PROFILES} from "../../core/static";

export const Header: FC = () => {
    return (
        <div className={"pt-4 px-4 pb-[46px] bg-main-gradient"}>
            <div className={"ps-5 pt-5 pe-5 mb-4"}>
                <div className={"flex items-center justify-between"}>
                    <img alt={"logo"} src={"/images/logo.svg"}/>
                    <AvatarGroup
                        avatars={PROFILES}
                    />
                </div>
                <h1 className={"leading-[38px] text-title pt-[100px] font-bold font-proDisplay text-white"}>
                    <span className={"opacity-70"}>Hello there</span>
                    <br/>
                    How can we help?
                </h1>
            </div>
            <SendMessageWidget/>
        </div>
    )
}
