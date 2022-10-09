import React from 'react'
import Header from '../components/Header'
import {Helmet} from "react-helmet"

function Home() {
    return (
        <div>
            <Helmet>
                <title>Instagram</title>
            </Helmet>
            home page
        </div>
    )
}

export default Home