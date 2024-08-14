import React from 'react'

function Layout({ children }) {
    console.log(children);
    return (
        <div>
            <header>
                <h1>Header Content</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Footer Content</p>
            </footer>
        </div>
    )
}

export default Layout