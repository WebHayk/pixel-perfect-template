import React, {FC} from "react";
import {AvatarModel} from "../../core/interfaces/common.interfaces";
import cs from "classnames";

interface AvatarComponentModel extends AvatarModel {
    className?: string
}

export const Avatar: FC<AvatarComponentModel> = (
    {
        name,
        className,
        image
    }
) => {
    return (
        <img
            width={40}
            height={40}
            src={image}
            alt={name}
            className={cs({
                [className as any]: className
            }, "min-w-10 min-h-10 w-[40px] h-[40px] rounded-full")}
        />
    )
}
