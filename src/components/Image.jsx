import React from 'react'

const Image = ({ src, width, height }) => {
    return (
        <div>
            <img src={src} alt="" width={width} height={height} />
        </div>
    )
}

export default Image