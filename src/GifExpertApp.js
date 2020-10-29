import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        setCategories([...categories,'Death Note']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>

            <ol>
                {
                    categories.map((cat) => 
                        <GifGrid category={cat} key={cat}></GifGrid>
                    )
                }
            </ol>
        </>
    )
}