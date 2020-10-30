import React from 'react'

export const ButtonFollower = ({styleBtn, handleInputFollow}) => {
    return (
        <div>
            <div className={styleBtn} role='button' onClick={handleInputFollow}>
                <span></span>
            </div>
        </div>
    )
}
