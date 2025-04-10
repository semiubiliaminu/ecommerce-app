import {Link} from "next/link"

export default function Navigation (){
    return (
        <nav>
            <Link href="/" className="mr-4 text-blue-500">Home</Link>
            <Link href="/cart" className="mr-4 text-blue-500">Cart</Link>
        </nav>
    )
}