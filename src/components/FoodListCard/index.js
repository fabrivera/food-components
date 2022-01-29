import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import './style.css'
import './style-sm.css'

export default function FoodListCard(props) {
    const [ show, setShow ] = useState(false)
    const [ style, setStyle ] = useState(true)
    const star = Number(props.star)

    useEffect(() => {
        if (props.style === 'food-list-card-sm') {
            setStyle(false)
            setShow(false)
        } else if(props.style === 'food-list-card' && !style) {
            setStyle(true)
        }
    }, [props.style])
    
    let category = ''
    //if (props.category !== undefined) {
      //  category = props.category.toString().toUpperCase()
    //}

    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => style && setShow(true),
        onSwipedRight: (eventData) => style && setShow(false)
    })

    const ShowStars = () => {
        return  <div className="stars">
                    <span className={`material-icons ${star >= 1 && 'addColor'}`}>star</span>
                    <span className={`material-icons ${star >= 2 && 'addColor'}`}>star</span>
                    <span className={`material-icons ${star >= 3 && 'addColor'}`}>star</span>
                    <span className={`material-icons ${star >= 4 && 'addColor'}`}>star</span>
                    <span className={`material-icons ${star >= 5 && 'addColor'}`}>star</span>
                </div>
    }

    return <>
        <div className={props.style}>
            {style && <h1>{props.title}</h1> }
            <div className="header">
                <div {...handlers} onClick={() => style && setShow(!show)} className={`body ${show && 'show'}`}>
                    {category !== '' && <h5>{category}</h5>}
                    <figure>
                        <img src={props.imageUrl} alt="" />
                    </figure>
                    <div className="arrow-container">
                        <div className="arrow"></div>
                    </div>
                    <div className="info">
                        {!style 
                            ? <>
                                <h3>{props.title}</h3>
                                <p>{props.info}</p>
                                <ShowStars />
                                <h2>{props.price}</h2>
                            </>
                            : <p>{props.info}</p>
                        }
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="price">
                    {style && <>
                        <ShowStars />
                        <div className="spawn"></div>
                        <h2>{props.price}</h2>
                    </>}
                </div>
                <h4>Agregar</h4>
            </div>
        </div>
    </>
}