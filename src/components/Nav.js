

function Nav() {

    const navButtonStyle = {
        listStyle: 'none', 
        display: 'flex',
        justifyContent: 'space-around'
    };
    
    return (
        <div className="nav-container"> 
            <nav className="navbar">
            <h1>KnewsFeed</h1>
            <ul style={navButtonStyle}>
                <li> 
                    <button>
                        Tech
                    </button>
                </li>

                <li> 
                    <button>
                        Sports
                    </button>
                </li>

                <li> 
                    <button>
                        Health
                    </button>
                </li>

                <li> 
                    <button>
                        Entertainment
                    </button>
                </li>

                <li> 
                    <button>
                        Science
                    </button>
                </li>

            </ul>
            </nav>
        </div>
    );

}

export default Nav
