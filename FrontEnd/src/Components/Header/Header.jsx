import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto  p-6'>

            <header className="bg-blue-600 text-white shadow-md ">

                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo or Title */}
                    <h1 className="text-2xl font-bold">TODO APP</h1>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    to="/"
                                    className="text-white hover:text-blue-300 transition duration-300"
                                >
                                    Home
                                </Link>


                            </li>
                            <li>
                                <Link
                                    to='/view'
                                    className="text-white hover:text-blue-300 transition duration-300"
                                >
                                    View Data
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
