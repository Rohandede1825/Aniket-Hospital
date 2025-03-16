import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between items-center bg-purple-900 text-white p-4 w-full">
            <div className="flex items-center">
                <img src="https://res.cloudinary.com/deqwiyyxl/image/upload/v1740660375/s7tqvhdluz5z8nzouafj.jpg" alt="Hospital Logo" className="h-12 w-12 mr-4" />
                <div>
                 <p className='font-semibold'>Govardhan ghat, Borban factory, Nanded, Maharashtra 431601 || Contact :- 02462-248108</p>
                </div>
            </div>
            <div className="text-sm">
                <p>&copy; {new Date().getFullYear()} Aniket Hospital. All rights reserved. @2025</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
};