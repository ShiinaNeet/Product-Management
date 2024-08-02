import React from 'react';
import Link from 'next/link'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 text-white">
                    <div className="flex items-center gap-x-5">
                        <div className="flex-shrink-0 text-2xl font-bold">
                           Products
                        </div>
                        <div className="hidden md:block text-sm">
                            <Link className='px-3' href="/dashboard">Dashboard</Link>
                            <Link className='px-3' href="/category">Category</Link>
                        </div>
                    </div>
                    <div className="hidden md:block text-sm">
                        {/* Additional actions or buttons */}
                        <Link className='p-2 rounded hover:bg-blue-500' href="/dashboard">Login</Link>
                        <Link className='p-2 rounded hover:bg-blue-500' href="/category">Request a demo  </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;