import { CHANGE_DRESS, RESET_DRESS } from "../types/DressingRoomType"

export const changeDressAction = (dressItem) => ({
    type: CHANGE_DRESS,
    dressItem
})

export const resetDressAction = () => ({
    type: RESET_DRESS
})