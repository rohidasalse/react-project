
import { useState } from "react"
import { FaStar } from "react-icons/fa"
export default function Rating({noofStars = 5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    function click(getindex) {
       setRating(getindex)
    }
    function move(getindex) {
     setHover(getindex)

    }
    function leave() {
      setHover(rating   )
    }
    return (
        <>
            <h1>this is rating component</h1>
            <div>
                {
                    [...Array(noofStars)].map(( _, index) => {
                        index+=1;
                        return<FaStar>

                            key={index}
                            className={index <(hover || rating)? "active" : "inactive"}
                            onClick={() => click(index)}
                            onMouseLeave={() => { leave() }}
                            onMouseMove={() => { move(index) }}
                            size={40}
                        </FaStar>


                    })
                }
            </div>
        </>
    )
}
