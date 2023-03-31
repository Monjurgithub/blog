import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-12">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl">Knowledge Cafe</a>
                </div>
                <div className="flex-none gap-2">
                    
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://images.unsplash.com/photo-1588731234159-8b9963143fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                            </div>
                        </label>

                    </div>
                </div>
            </div>
            <hr className='horijontal'/>
        </div>
    );
};

export default Header;