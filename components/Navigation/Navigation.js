import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import Button from '../Button/Button';

import Logo from '../../public/assets/images/logo.png';


export default function Navigation(){
    const [isvisible, setIsVisibe] = useState(false);
    function mobileDropdown(e){
      return setIsVisibe((preState) => !preState);
    }

    const toggleIconClass = isvisible ? 'show': ''; 
    return(
        
       <header className="nav--header">
           <nav className="navbar navbar-expand-lg pt-3 z-index pb-3 navbar-light fixed-top menu--bar">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Image src={Logo} width="100" placeholder="blur"/>
                </a>
                <button onClick={mobileDropdown} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={toggleIconClass + " collapse navbar-collapse justify-content-end"} id="navbarSupportedContent">
                    <div className="menu--bar--collapse">
                        <ul className="navbar-nav navbar-list  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link  nav-b">About</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="#">
                                    <a className="nav-link nav-b">FAQS</a>
                            </Link> 
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="#">
                                    <a className="nav-link nav-b">Pricing</a>
                            </Link> 
                            </li>
                            <li className="nav-item">
                                <Link href="#">
                                <a className="nav-link nav-b">Testimonials</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-auth mb-2 mb-lg-0">
                            <li className="nav-item">
                               <Link href="#">
                                  <a className="nav-link nav-a">Sign In</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="#">
                                <Button text={'Sign Up'} type={'outline'} />
                              </Link>
                            </li>
                        </ul>
                    </div>
              
                </div>
            </div>
            </nav>
       </header>
       
    );
}