function Header() {
    return (
        <div class="topright">
            <img  class="logo" src="/images/LOGO-VIMA.png" alt="vima-logo" />
            <div class="right">
                <span class="material-icons">
                    person
                </span>
                <div class="signOut">Welcome Student | <button class="signOut" id="signOut">Sign out</button></div>
            </div>
        </div>
    )
}
export default Header;