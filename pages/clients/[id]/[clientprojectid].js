import React from 'react'
import { useRouter } from 'next/router'
const ClientProjectId = () => {
    const router = useRouter()
    console.log(router.query)
    return (
        <div>ClientProjectId for Project</div>
    )
}

export default ClientProjectId