import "./style.css"

import { useEffect, useState } from "react"


export default function LoadMore() {
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)
    const [load, setLoad] = useState(false)
    async function fetchproduct() {
        try {
            setLoad(true)

            let a = await fetch(`https://dummyjson.com/products?limit=12&skip=${count === 0 ? 0 : count * 12}`)
            let response = await a.json()
            if (response && response.products && response.products.length) {
                setProduct((previous)=>[...previous, ...response.products])
                setLoad(false)
                console.log(response.products)
            }
            // console.log(response)

        }
        catch (e) {
            console.log(e)
            setLoad(false)
        }
    }

    useEffect(() => {
        fetchproduct()
    }, [count])
    if (load) {
        return <div>data is loading ! Please wait</div>
        console.log("data is loading ! Please wait")
    }

  
    return <div className="container">
      <div className="heading">

        <h1>this is load more project in react</h1>
      </div>
        <div className="product-container">
            {
                product && product.length ? product.map(item =>
                    <div className="product" key={item.id}>

                        <img src={item.thumbnail} alt="" />
                        <p>{item.title}</p>



                    </div>) : null
            }
        </div>
        <div className="button-container">

            <button onClick={() => setCount(count+1)}>load more</button>
        </div>
    </div>

}