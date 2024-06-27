import Link from "next/link";


const NavigationMenuBar = () => {
    return (
        <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <ul className="flex items-center justify-center gap-8">
                {/* <Link href={'#section-plans'}>Pricing</Link> */}
                <Link className="text-gray-300 dark:text-gray-600 pointer-events-none" href={'#section-plans'}>Pricing</Link>
                <Link className="text-gray-300 dark:text-gray-600 pointer-events-none" href={'/about'}>About</Link>
                <Link className="text-gray-300 dark:text-gray-600 pointer-events-none" href={'/docs'}>Documentation</Link>
                {/* <Link href={'#'}>Features</Link> */}
            </ul>
        </nav>
    );
}

export default NavigationMenuBar;
