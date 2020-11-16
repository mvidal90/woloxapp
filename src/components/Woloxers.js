import React from 'react';
import tw from '../icons/twitter.svg';

export const Woloxers = () => {
    return (
        // <div className = "container">
            <div className = "wrapper">
                <div className = "col-7 wlx1">
                    <h2><strong className = "greenWolox">350 + </strong><strong className = "blueWolox">Woloxers</strong></h2>
                    <br />
                    {/* <p><img src = { tw } alt = "Ícono de Twitter"/>  @Wolox</p> */}
                    <button className = "btn-followus">Siguenos</button>
                </div>
                <div className = "col-5 wlx2">
                    <h2>Trabajamos para
                        <br/><strong className = "green"> Wolox </strong>
                        <strong className = "blue">ideas</strong> en
                        <br/>productos.
                    </h2>
                </div>
            {/* </div> */}
        </div>
    )
}
