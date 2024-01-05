import logo from '../images/small_logo.png'

export default function Footer (){
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="logo" />
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served 
                    with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>

                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li>Adress: <br/> 123, Towncity, USA</li>
                            <li>Phone: <br/> ++ 0123 456 789</li>
                            <li>Email: <br/> little@lemon.com </li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    )
}