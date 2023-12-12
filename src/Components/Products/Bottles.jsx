/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './Bottle.css'


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then(res => res.json())
        .then(data =>setBottles(data))
    }, [])

    return (
        <div>
            <h3>Sports Maniack</h3>
            <h3>bottle :{bottles.length}</h3>
            <div className="bottle-container">
            {
                bottles.map(bottle =>
                <Bottle key={bottle.id} bottle={bottle}>
                </Bottle>)
            }
            </div>
           
           
        </div>
    );
};

export default Bottles;