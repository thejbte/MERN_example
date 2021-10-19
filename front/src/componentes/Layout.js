import React from 'react'
import Header from "./Header";
// children , paginas dentro de los padres por eso el layout es el padre
const Layout = ({children}) => {
    return (
        <div className="page">
            <Header/>
            <main> {/*contenido princiapl del body
             El contenido dentro del elemento principal debe ser exclusivo del documento*/}
                {children} 
            </main>
        </div>
    )
}

export default Layout
