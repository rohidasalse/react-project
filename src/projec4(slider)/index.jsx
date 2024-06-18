import { useEffect, useState } from "react";

export default function Slider({ url, limit=10, page=1 }) {
    const [image, setImage] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    async function fetchImg(geturl) {
        try {
            setLoading(true)

            const response = await fetch(`${geturl}?page=${1} & limit=${10}`)
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
    return (
        <>
            <div className="container">

                <h2>slider</h2>
                <h2>slider</h2>
            </div>
        </>
    );
}
// https://picsum.photos/v2/list?page=1&limit=500