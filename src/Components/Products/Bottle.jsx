/* eslint-disable react/prop-types */
 import './Bottle.css'


const Bottle = ({bottle}) => {
    const {name, price, img} = bottle
    return (
        <div className="bottle">
            <p>Bottle :{name}</p>
            <img className='bottle-img' src={img} alt="" />
            <h5>Price : $ {price}</h5>

        </div>
    );
};

export default Bottle;