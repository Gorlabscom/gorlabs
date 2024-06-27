import Link from "next/link";
import Image from "next/image";
import logo from "@repo/ui/assets/logo.svg"

const Logo = () => {
    return (
        <Link
            className="navbar-brand"
            href={'/'}
        >
            <aside className="flex items-center gap-2">
                <Image
                    src={logo}
                    width={40}
                    height={40}
                    alt="logo"
                />
                <span className="text-xl font-bold"> Gorlabs.</span>
            </aside>

        </Link>
    );
}

export default Logo;
