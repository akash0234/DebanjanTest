import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div>
            <div class="landing-page">
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>

        </div>
    )
}

export default Layout