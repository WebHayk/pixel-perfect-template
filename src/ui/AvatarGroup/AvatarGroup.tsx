import React, {FC, useMemo} from "react";
import {AvatarModel} from "../../core/interfaces/common.interfaces";
import {UiHelpers} from "../../core/helpers/ui.helpers";
import Avatar from "../Avatar";
import {CommonHelpers} from "../../core/helpers/common.helpers";
import cs from "classnames";

interface AvatarGroupModel {
    avatars: AvatarModel[],
    maxAvatarsCount?: number
}

export const AvatarGroup: FC<AvatarGroupModel> = (
    {
        avatars,
        maxAvatarsCount = 3
    }
) => {

    const avatarsConfig = useMemo(() => {
        return UiHelpers.avatarsConfig(avatars, maxAvatarsCount);
    },[avatars, maxAvatarsCount]);

    return (
        <div className="flex -space-x-1">
            {avatarsConfig.displayedAvatars.map((avatar, index) => {

                let isLastAvatar = index !== avatarsConfig.displayedAvatars.length - 1;

                return (
                    <div
                        key={index}
                        className="relative"
                        style={{zIndex: avatarsConfig.displayedAvatars.length - index}}
                    >
                        {avatar.image ? (
                            <Avatar
                                className={cs({
                                    ["border-2 border-dark"]: isLastAvatar
                                })}
                                name={avatar.name}
                                image={avatar.image}
                            />
                        ) : (
                            <span
                                className="w-10 h-10 flex items-center justify-center bg-gray-300 text-white font-medium rounded-full">
                            {CommonHelpers.firstLetterUppercased(avatar.name)}
                        </span>
                        )}
                    </div>
                )
            })}

            {!!avatarsConfig.extraAvatars && (
                <div
                    className="relative flex items-center justify-center w-10 h-10 bg-gray-300 text-white font-medium rounded-full">
                    +{avatarsConfig.extraAvatars}
                </div>
            )}
        </div>
    )
}
