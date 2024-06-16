
import data from "./data";
import { useState } from "react";
export default function FirstProject() {
    const [da, setDa] = useState(null)
    return (
        <>
            <h2>hi rohidas</h2>
            {
                data && data.length != 0 ?
                    <div>
                        {

                            data.map(val=>
                                <div>

                                    <div>{val.value}</div>
                                    <button>+</button>
                                </div>
                            
                            )
                        }
                    </div>
                    : <div> Data is not found</div>
            }

        </>
    );
}