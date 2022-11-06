import "./homepage.scss"
import { Navigate, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import NavBar from "../navBar/NavBar";

function Homepage() {
    // const access_token = sessionStorage.getItem('token');
    const [sauces, setSauces] = useState([''])
    const userId = sessionStorage.getItem('userId');

    


    const getSauces = async () => {
        const res = await axios.get("https://secure-harbor-62492.herokuapp.com/api/sauces",
            // {
            //     headers: {
            //         'Authorization': `token ${access_token}`
            //     }
            // }
            )
        setSauces(res.data)
         console.log(sauces)
    } 

    useEffect(() => {
        // if(!sessionStorage.getItem('token') ){
        
        //     return <Navigate to={"/signin"} />}
        getSauces()

    }, [])

    const content = sauces.map((data, index) => {
        return (

            // <div className="sauceBox col col-md-6 col-lg-4" key={index}>
            <div className={data.userId === userId ? "sauceBox sauceBoxOwnSauce": "sauceBox"} key={index}>
                <Link className="link" to={`saucepage/${data._id}`} >
                    <div className='sauceBoxImage'>
                        <img src={data.imageUrl} height="150" width="150" alt="The image of a sauce" />
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
        <div>
            <NavBar />
            <div className="allSaucesBody">
            <div className="saucesListHeader">
                <h1>The saucest</h1>
            </div>
            {content}
            </div>
        </div>
    )
}

export default Homepage