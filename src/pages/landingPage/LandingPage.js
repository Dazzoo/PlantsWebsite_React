import React from 'react';
import { ReactComponent as LeafLine } from "../../assets/img/leaf-line.svg";


function LandingPage() {
    return (
        <header>
            <nav>
            <a className={'nav_logo'}>
            <LeafLine /> Plantex
            </a>
                <ul className={'nav_menu'} >
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Products</a>
                    </li>
                    <li>
                        <a>FAQs</a>
                    </li>
                    <li>
                        <a>Contact Us</a>
                    </li>
                </ul>
            </nav>


        </header>
    );
}

export default LandingPage;