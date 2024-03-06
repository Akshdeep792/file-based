import React from 'react'
import { useRouter } from 'next/router'
const ClientProjects = () => {
    const router = useRouter()
    const loadProjectHandler = () => {
        // router.push('/clients/max/projecta')
        // router.replace()
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'aksh', clientprojectid: 'projecta' }
        })
    }
    return (
        <>
            <div>ClientProjects</div>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </>
    )
}

export default ClientProjects