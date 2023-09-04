import React, { useEffect, useState } from 'react';
import Cosmetic from '../cosmetic/Cosmetic';

const cosmetics = () => {
    // const [cosmetics, setCosmetics] = useState([]);

    // useEffect(()=>{
    //     fetch("")
    // },[])

    const cosmetics = [
        {id:'fdsa5631456_faswreq', name: 'Alta', price: 250},
        {id:'5679ewqfafevbew_wg', name: 'nail polis', price: 150},
        {id:'fsafe864654t3t43w_r443w', name: 'Ear ring', price: 50},
        {id:'kurjy_rwt546864twe4', name: 'Churi', price: 350},
        {id:'myeeq_rew5646terw', name: 'Tip', price: 278},
        {id:'htyiuoouhfbfng6548794_5646', name: 'Topor', price: 1855},
        {id:'5664re86q4ewr6q4r89_ytrtu', name: 'Bala', price: 9876}
    ]
    return (
        <div>
            {
                cosmetics.map(cosmetic =><Cosmetic
                key={cosmetic.id}
                cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default cosmetics;