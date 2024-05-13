const  NavigationBar= (props) => {
    return (  
        <>
            <nav className="bg-dark text-light container-fluid p-2">
            <ul class="navbar-menu list-unstyled d-flex justify-content-center fw-bold">
                    <li class="menu-item me-5 mt-2">
                        <a class="menu-link text-light" href=""><i class="fa-solid fa-house"></i>  HOME</a>
                    </li>
                    <li class="menu-item me-5 mt-2">
                        <a class="menu-link text-light" href=""><i class="fa-solid fa-book-open"></i>  MENU</a>
                    </li>
                    <li class="menu-item me-5 mt-2">
                        <a class="menu-link text-light" href=""><i class="fa-solid fa-circle-info"></i>  ABOUT US</a>
                    </li>
                    <li class="menu-item me-5 mt-2">
                        <a class="menu-link text-light" href=""><i class="fa-solid fa-envelope"></i>  CONTACT</a>
                    </li>
                </ul>
            </nav>
            <img src={props.img} className="w-100" alt="" srcset=""/>
        </>
    );
}
 
export default NavigationBar;