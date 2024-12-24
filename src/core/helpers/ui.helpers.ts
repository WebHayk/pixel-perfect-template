import {AvatarModel} from "../interfaces/common.interfaces";

export class UiHelpers {
    static avatarsConfig = (
        avatars: AvatarModel[],
        maxAvatarsCount: number
    ) => {
        const displayedAvatars = avatars.slice(0, maxAvatarsCount);
        const extraAvatars = avatars.length > maxAvatarsCount ? avatars.length - maxAvatarsCount : 0;
        return {
            displayedAvatars,
            extraAvatars
        }
    }
}
