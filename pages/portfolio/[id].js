import React from 'react'
import { useRouter } from 'next/router'
const PortfolioById = () => {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)
    return (
        // < div > { params }</div >
        <div>
            <h1>Portfolio</h1>
        </div>
    )
}

export default PortfolioById