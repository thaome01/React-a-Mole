import { useEffect } from 'react'
import moleImg from './RR-React-A-Mole-Images/mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '10vw' }} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole