import React, { useEffect, useState } from "react";
import obj from "../house"

function SliderBox(){

    const [slider, setSlider] = useState([])
    const [active, setActive] = useState(1)
    const [left, setLeft] = useState(1)
    const [count, setCount] = useState(1)

    useEffect(() => {
        setSlider(obj)
    }, [])

    const handlerRightBtn = () => {
        setCount(count + 1)
        if(count <= slider.length - 3) {
            setActive(-(300 * count))
        } 
    }

    const handlerLeftBtn = () => {
        setLeft(count - 2)
        setActive(active / left)
    }

    return(
        <div className="slider">
            <div className="slider__leftBox">
                <h1>Hello Carousel</h1>
            </div>
            <div className="slider__rightBox">
                <button onClick={handlerRightBtn} className="slider__rightBtn" style={{display: `${(count <= slider.length - 3 || count === 1) ? "block" : "none" }`}}>
                    <i className='bx bx-chevron-right'></i>
                </button>
                <button onClick={handlerLeftBtn} className="slider__leftBtn" style={{display: `${(count < slider.length - 2) ? "none" : "block" }`}}>
                    <i className='bx bx-chevron-left'></i>
                </button>
                <ul  style={{transform: `translateX(${active}px)`}} className="slider__list">
                    {obj.map((item, i) => {
                        return (
                            <li key={i} className="slider__item">
                                <img className="slider__img" src={item.img} alt="house" />
                                <div className="slider__desc">
                                    <h3 className="slider__title">{item.title}</h3>
                                    <p className="slider__text">{item.text}</p>
                                    <a className="slider__link" href="/">Read More</a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SliderBox