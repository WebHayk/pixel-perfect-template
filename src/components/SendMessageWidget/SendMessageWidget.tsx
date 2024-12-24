import React, {FC} from "react";
import SendIcon from "../../assets/icons/SendIcon";

export const SendMessageWidget: FC = () => {
    return (
        <div className={"w-full shadow-paper-shadow items-center-between cursor-pointer active:ring-1 duration-300 active:ring-offset-transparent active:ring-offset-2 active:ring-primary bg-secondary py-4 px-5 rounded-[10px] border border-primary"}>
            <div className={"flex flex-col"}>
                <h4 className={"text-primary-body font-semibold"}>Send us a message</h4>
                <p className={"text-dark-icons font-normal"}>We typically reply within a day</p>
            </div>
            <div>
                <SendIcon />
            </div>
        </div>
    )
}
