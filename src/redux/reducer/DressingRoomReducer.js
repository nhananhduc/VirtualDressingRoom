import { CHANGE_DRESS, RESET_DRESS } from "../types/DressingRoomType"

const initialState = {
    bikinitop: {},
    bikinibottom: {},
    feet: {},
    background: {},
    necklace: {},
    handbag: {},
    hairstyle: {}
}


const DressingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DRESS:
            const { type, imgSrc_png } = action.dressItem
            if (type === "topclothes") {
                state.bikinitop = {
                    ...state.bikinitop,
                    background: `url("${imgSrc_png}")`,
                    transform: "scale(0.1)",
                    left: "-100%",
                    opacity: 0
                }
            }
            if (type === "botclothes") {
                state.bikinibottom = {
                    ...state.bikinibottom,
                    background: `url(${imgSrc_png})`,
                    transform: "scale(0.8)",
                    left: "100%",
                    opacity: 0
                }
            }
            if (type === "shoes") {
                state.feet = {
                    ...state.feet,
                    background: `url(${imgSrc_png})`,
                    transform: "scale(1)",
                    opacity: 0
                }
            }
            if (type === "handbags") {
                state.handbag = {
                    ...state.handbag,
                    background: `url(${imgSrc_png})`,
                    transform: "scale(1)",
                    opacity: 0
                }
            }
            if (type === "necklaces") {
                state.necklace = {
                    ...state.necklace,
                    background: `url(${imgSrc_png})`,
                    transform: "scale(1)",
                    opacity: 0
                }
            }
            if (type === "hairstyle") {
                state.hairstyle = {
                    ...state.hairstyle,
                    background: `url(${imgSrc_png})`,
                    opacity: 0
                }
            }
            if (type === "background") {
                state.background = {
                    ...state.background,
                    backgroundImage: `url(${imgSrc_png})`,
                }
            }
            return { ...state }
        case RESET_DRESS: {
            state = {
                ...state,
                bikinitop: { background: 'url("../../public/img/allbody/bikini_branew.png")' },
                bikinibottom: { background: 'url("../../public/img/allbody/bikini_pantsnew.png")' },
                feet: { background: 'url("../../public/img/shoes/shoes1.png")' },
                background: { backgroundImage: 'url("./img/background/background2.jpg")' },
                necklace: { background: "" },
                handbag: { background: "" },
                hairstyle: { background: "" }
            }
            console.log(state)
            return { ...state }
        }
        default:
            return state
    }
}

export default DressingRoomReducer
