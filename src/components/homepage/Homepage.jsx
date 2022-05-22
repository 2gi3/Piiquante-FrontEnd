import "./homepage.css"
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Homepage() {
    const access_token = sessionStorage.getItem('token');
    const [sauces, setSauces] =useState([''])


    const getSauces = async () => {
        const res = await axios.get("https://secure-harbor-62492.herokuapp.com/api/sauces",
            {
                headers: {
                    // 'Authorization': `token ${access_token}`
                    "Authorization": "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mjg3YjNiYzc0NjM4NzBjNWYxZWIwZjAiLCJpYXQiOjE2NTMxNDUxMjgsImV4cCI6MTY1MzIzMTUyOH0.vklux6sqge8HLX1OWnyS_ALfxHmQVyH5QncVDFtbvMQ"
                }
            })
        await setSauces(res.data)
        console.log(await sauces)
    }

    useEffect(() => {
        getSauces()


    }, [])

    const content = sauces.map((data, index) => {
        return (
           
            <div className="sauceBox col col-md-6 col-lg-4" key={index}>
                <Link to={`saucepage/${data._id}`} >
                    <div className='sauceBoxImage d-flex flex-wrap justify-content-around'>
                        <img src={data.imageUrl} alt="" />
                    </div>
                    <div className="sauceName">
                        <h2>{data.name}</h2>
                        <p>Heat: {data.heat}/10</p>
                    </div>


                </Link>
            </div>
        )
    })

    return (
        <div className="row">
            
            
                 {content}
            
        </div>
    )
}

export default Homepage