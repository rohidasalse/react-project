
import "./style.css"
import { useState } from "react";

export default function RandomColorGenerator() {
    const [color, setColor] = useState("hex")
    const [rgbcolor, setRgbcolor] = useState("#243553")
    function fun(ele) {
        return (Math.floor(Math.random() * ele))
    }
    function hex() {
        const arrayhex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', "E", 'F']
        let colorhex = "#";
        for (let i = 0; i < 6; i++) {

            colorhex += arrayhex[fun(15)]
        }
        //  console.log(colorhex)
        setColor(colorhex)
    }
    function rgb() {
        const r=fun(256)
        const g=fun(256)
        const b=fun(256)
    setColor(`rgb(${r},${g},${b})`);
        // console.log(`rgb${r}${g}${b}`)

    }
    return (
        <>
            <div style={{
                height: "100vh",
                backgroundColor: color,
                with: "100wh"
            }
            }>

                <div className="container" >
                    <h1>randomColorGenerator</h1>
                    <button onClick={hex}> hex color code</button>
                    <button onClick={rgb}>rgb color code </button>
                    <button>Generate color </button>
                    <div>
                        <h2>color code</h2>
                        <p style={{color:"white",
                            fontSize:"30px"
                        }}> {color}</p>
                    </div>
                </div>
            </div>
        </>
    );
}