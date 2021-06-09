import './Navbar.css';

const Navbar = () => {
    return ( 
        <div id="header">
            <div class="line"></div>
            <div class="line2"></div>
            <div class="titleContainer">
                <span class="title">Chili Chat</span>
            </div>

            <div class="line3"></div>
            <div class="line4"></div>
            
            <div class="navbar">
                <ul class="navList">
                    <li class="home">Home</li>
                    <li class="menu">Menu</li>
                    <li class="orderOnline">Order Online</li>
                    <li class="events">Events</li>
                    <li class="aboutUs">About Us</li>
                    <li class="gallery">Gallery</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;