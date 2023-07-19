import React, { useState } from 'react';
import Box from './Box/Box';
import "./Number.css";

export default function Number({selectNumber, setSelectNumber}) {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    
    return (
        <div className='Number'>
            <div className='select'>
                {arrNumber.map((value, i) => (
                    <Box
                        key={i}
                        value={value}
                        selectNumber={selectNumber}
                        setSelectNumber={setSelectNumber}
                    />
                ))}
            </div>
            <p className='sn'>Select Number</p>
        </div>
    )
}
