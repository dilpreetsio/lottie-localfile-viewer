import { useEffect, useRef } from "react"
import lottie from "lottie-web"

const LottieIcon = ({ name, icon }) => {
    const canvasRef = useRef(undefined)
    let animation = useRef(undefined)
    useEffect(() => {
        fetch(`../${icon}`
            ,{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            }
        )
        .then(res => res.json())
        .then(iconJson => {
            animation.current = lottie.loadAnimation({
                container: canvasRef.current,
                animationData: iconJson,
                renderer: "svg", // "canvas", "html"
                loop: false, // boolean
                autoplay: false, // boolean
            });
        })
    }, [])

    const playAnimation = () => {
        // animation.current = 0
        animation.current.goToAndPlay(0)
        animation.current.play()
    }


    return(<div style={{ width: "20%", backgroundColor:"white",
    margin: "0 10px", textAlign: "center" }} onMouseEnter={playAnimation} >
        <div style={{ paddingTop : "8px"}}>{name}</div>
        <div ref={canvasRef} className="cursor-pointer"></div>
    </div>)
}

export default LottieIcon