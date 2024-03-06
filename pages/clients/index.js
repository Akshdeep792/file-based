import React from 'react'
import Link from 'next/link'
const ClientsPage = () => {
    return (
        <>
            <div>ClientsPage</div>
            <ul>
                <l1><Link href="/clients/Aksh">Aksh</Link></l1>
                <l1><Link href="/clients/Yash">Yash</Link></l1>
                <l1><Link href={{
                    pathname: '/clients/[id]',
                    query: { id: 'manu' }
                }}>Manu</Link></l1>
            </ul>
        </>
    )
}

export default ClientsPage