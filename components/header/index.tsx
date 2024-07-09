import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white h-48 absolute top-0 left-0 w-full">
            <div className="container mx-auto flex items-center justify-between px-6 h-full">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="mr-4 h-36" />
                    <input
                        type="text"
                        placeholder="Cari negara, kota, atau guide"
                        className="border rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 text-lg shadow-md custom-shadow w-96 h-16"
                    />
                </div>
                <nav className="flex space-x-6">
                    <Link href="/" className="text-red-500 text-2xl">
                        Beranda
                    </Link>
                    <Link href="/services" className="text-red-500 text-2xl">
                        Service Kami
                    </Link>
                    <Link href="/blog" className="text-red-500 text-2xl">
                        Blog
                    </Link>
                    <Link href="/login" className="text-black hover:text-red-500 text-2xl px-6">
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
