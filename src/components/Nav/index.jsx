import "./style.css"

const Nav = (props) => {
    return (
        <nav className="nav">
            <ul className="list">
                {props.children}
            </ul>
        </nav>
    )
}

export default Nav