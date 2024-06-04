import Nav from "../Nav";

const Header = () => {
    return (
        <header>
            <Nav>
                <li><button className="button" value="hiragana">Hiragana</button></li>
                <li><button className="button" value="katakana">Katakana</button></li>
            </Nav>
        </header>
    )
}

export default Header;