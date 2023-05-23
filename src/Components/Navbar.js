// to use anything as component we need react-function_based-component {rfc-shot code}

import React from 'react'
import PropTypes from 'prop-types'


// to pass in properties/parameters : all we need to write in only props 
// then jus mention the property we want to use i.e like props.attr1
// and in the jsx <component attr1="value"/> -------------- will be used to add value to the props

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.brandText}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// 'PROPS' must be read only!!!!

// 'propTypes', We need to import it first ... impt (shortcut)
Navbar.propTypes = {
    // propName: propType
    // brandText: PropTypes.string,
    // This allows us to set a type for the props , to be type-safe

    // we can make a 'prop' required 
    brandText: PropTypes.string.isRequired,
}

// Setting default 'propValues' to 'props'
// so if we forget to give value to prop then the default value will be applied.
Navbar.defaultProps = {
    aboutText: "About Us",
}