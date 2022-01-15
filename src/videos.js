import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './videos/video-1.mp4'

function Video(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <div>
            <video
                ref={videoRef}
                src={video1}
                width={450}
            />
        </div>
    )
}

export default forwardRef(Video)