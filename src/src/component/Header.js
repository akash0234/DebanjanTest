import React from 'react'

const Header = (props) => {
    return (
        <>
        
            <header>
                <div class="container">
                        {props.name}
                    <a href="#" class="logo">Your <b>Website</b></a>
                    <ul class="links">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Info</li>
                        <li>Get Started</li>
                    </ul>
                </div>

            </header>


        </>
    )
}

export default Header