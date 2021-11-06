import React from 'react'
const Layout = ({esquerda, direita}) => {
    return (
                <div className="grid mt-3">
                    <div className="col-12 md:col-9">
                        {esquerda}
                    </div>
                    <div className="col-12 md:col-3">
                        {direita}
                    </div>
                    
                </div>
    )
}

export default Layout