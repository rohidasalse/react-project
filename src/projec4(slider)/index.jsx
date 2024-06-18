import { useEffect, useState } from "react";
import "./style.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
export default function Slider({ url, limit, page }) {
    const [image, setImage] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    async function fetchImg(geturl) {
        try {
            setLoading(true)

            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`)
            const data = await response.json()
            if (data) {
                setImage(data)
                setLoading(false)
            }
        } catch (error) {
            setErrorMessage(error.message)
            setLoading(false)

        }
    }
    useEffect(() => {
        if (url !== "") {
            fetchImg(url)
        }
    }, [url])
    console.log(image)
    if (loading) {
        return <div> data is loading ! please wait</div>
    }
    if (errorMessage !== null) {
        return <div>Error occured !{errorMessage}</div>
    }
    return <div className="container">

        <BsArrowLeftCircleFill className="arrow arrow-left" />{
            image && image.length ? image.map((imageItm) => (
                <img
                    src={imageItm.download_url}
                    alt={imageItm.download_url}
                    key={imageItm.id}
                    className="current-img" />
            )) :null
        }
        <BsArrowRightCircleFill className="arrow arrow-right" />{
            <span className="circle-indicator">{

                image && image.length ? image.map((_,index) => <button
                     key={index.id}
                     className="current-indicator" 
                >
                </button>) : null
            }

            </span>

        }
    </div>


}
// https://picsum.photos/v2/list?page=1&limit=500