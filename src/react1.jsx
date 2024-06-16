
import data from "./data";
import { useState } from "react";
import "./react1.css"
export default function FirstProject() {
    const [da, setDa] = useState(null)
    function fun(id) {
        // console.log(id)
        setDa(id === da ? null : id)

    }
    return (
        <>
            <div className="main">

                <h2>hi rohidas</h2>
                {
                    data && data.length != 0 ?
                        <div className="allItems">
                            {
                                data.map(val =>
                                    <div className="items">
                                        <div onClick={() => { fun(val.id) }} className="item">
                                            <div>{val.value}</div>
                                            <div><button>+</button>
                                            </div>

                                            <div className="itemData">
                                                {

                                                    da === val.id ?
                                                        <div>{val.data}</div>
                                                        : null
                                                }
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                        </div> : <div> Data is not found</div>
                }

            </div>

        </>
    );
}