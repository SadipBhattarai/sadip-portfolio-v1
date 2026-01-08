import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return(
    <>
        <header className="header">
        <nav>
          <div className="container">
            <div className="logo">
              <Link href="/">
              <Image
                src="/logo.png"
                alt="Sadip Bhattarai Logo"
                width={80}
                height={80}
                priority
              />
            </Link>
              
            </div>

            <div className="links">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#hireme" className="active">Hire me</a>
                </li>
              </ul>
            </div>

            <div className="hamburger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </nav>
      </header>
    </>
    );
}