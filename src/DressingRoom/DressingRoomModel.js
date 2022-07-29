import { useDispatch, useSelector } from 'react-redux'
import { useSpring, animated } from 'react-spring';
import { resetDressAction } from '../redux/actions/DressingRoomAction';

export default function DressingRoomModel() {
    const { bikinitop, bikinibottom, feet, hairstyle, necklace, handbag, background } = useSelector(state => state.DressingRoomReducer);
    const dispatch = useDispatch();

    const bikinitopEnter = {
        width: "500px",
        height: "500px",
        background: bikinitop.background,
        position: "absolute",
        top: "-9%",
        left: "-5%",
        zIndex: "3",
        transform: "scale(0.5)",
        opacity: 1
    }

    const bikinibottomEnter = {
        width: "500px",
        height: "1000px",
        background: bikinibottom.background,
        position: "absolute",
        top: "-30%",
        left: "-5%",
        zIndex: "2",
        transform: "scale(0.5)",
        opacity: 1
    }

    const feetEnter = {
        width: "500px",
        height: "1000px",
        background: feet.background,
        position: "absolute",
        bottom: "-37%",
        right: "-3.5%",
        zIndex: "1",
        transform: "scale(0.5)",
        opacity: 1
    }

    const necklaceEnter = {
        width: "500px",
        height: "1000px",
        background: necklace.background,
        position: "absolute",
        bottom: "-40%",
        right: "-3.5%",
        zIndex: "4",
        transform: "scale(0.5)",
        opacity: 1
    }

    const handbagEnter = {
        width: "500px",
        height: "1000px",
        background: handbag.background,
        position: "absolute",
        bottom: "-40%",
        right: "-3.5%",
        zIndex: "4",
        transform: "scale(0.5)",
        opacity: 1
    }

    const hairstyleEnter = {
        width: "1000px",
        height: "1000px",
        background: hairstyle.background,
        position: "absolute",
        top: "-75%",
        right: "-57%",
        zIndex: "4",
        transform: "scale(0.15)",
        opacity: 1
    }

    // React-spring decalaration
    const bikinitopAnim = useSpring({ from: bikinitop, to: bikinitopEnter, reset: true, config: { duration: 500 } })
    const bikinibottomAnim = useSpring({ from: bikinibottom, to: bikinibottomEnter, reset: true, config: { duration: 500 } })
    const feetAnim = useSpring({ from: feet, to: feetEnter, reset: true, config: { duration: 500 } })
    const necklaceAnim = useSpring({ from: necklace, to: necklaceEnter, reset: true, config: { duration: 500 } })
    const handbagAnim = useSpring({ from: handbag, to: handbagEnter, reset: true, config: { duration: 500 } })
    const hairstyleAnim = useSpring({ from: hairstyle, to: hairstyleEnter, reset: true, config: { duration: 500 } })

    return (
        <div className="col-md-4">
            <div className="contain">
                <div className="body" />
                <div className="model" />
                <div className='bra' />
                <div className='pants' />
                <div className='shoes' />
                <div className="background" style={background} />
                <animated.div className={bikinitop} style={bikinitopAnim} />
                <animated.div className={bikinibottom} style={bikinibottomAnim} />
                <animated.div className={feet} style={feetAnim} />
                <animated.div style={handbagAnim} />
                <animated.div style={hairstyleAnim} />
                <animated.div style={necklaceAnim} />

                {/* Reset Button*/}
                <button className='btn btn-danger ml-4 mt-1' onClick={() => {
                    dispatch(resetDressAction())
                }}>Reset</button>
            </div>
        </div>
    )
}
