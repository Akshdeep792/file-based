import Link from "next/link"
const HomePage = () => {
    return (
        <div>
            <h1>The Home Page</h1>
            <ul>
                <l1>
                    <Link href="/portfolio">Portfolio</Link>
                </l1>
                <l1>
                    <Link href="/clients">Clients</Link>
                </l1>
            </ul>
        </div>
    )
}

export default HomePage