import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-10 mr-4" />
                    <input
                        type="text"
                        placeholder="Cari negara, kota, atau guide"
                        className="border rounded-full px-4 py-2 w-64 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <nav className="flex space-x-6">
                    <Link href="/" className="text-gray-900 hover:text-red-500">
                        Beranda
                    </Link>
                    <Link href="/services" className="text-gray-900 hover:text-red-500">
                        Service Kami
                    </Link>
                    <Link href="/blog" className="text-red-500 hover:text-gray-900">
                        Blog
                    </Link>
                    <Link href="/login" className="text-black hover:text-red-500">
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
