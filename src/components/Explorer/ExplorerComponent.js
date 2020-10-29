import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const ExplorerComponent = () => {

    const history = useHistory()

    const [valueSearch, setValueSearch] = useState('')

    const handleInputChange = (e) => {
        setValueSearch(e.target.value)
    }

    const handleInputSearch = (e) => {
        e.preventDefault()

        history.push(`/${valueSearch}`)
    }

    return (
        <div className='Explorer'>
            <form onSubmit={handleInputSearch}>
                <div className='searchbar'>
                <input 
                    name='search'
                    placeholder='Buscar en Twitter' 
                    value={valueSearch}
                    onChange={handleInputChange}
                />
                </div>
            </form>
        </div> 
    )
}
