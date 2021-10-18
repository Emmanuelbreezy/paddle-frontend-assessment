import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';

import Logo from '../../public/assets/images/logo.png';

export default function Footer(){
    return(
       <footer className="footer-section position-relative">
            <div className="container sectioncard--wrapper">
               <div className="container shadow  footer-section--card">
                <div className="row align-items-center">
                   <div className="col-md-6 --card-col1">
                       <h2>
                           <span className="d-block">Subscribe Now Of</span>
                           <span className="d-block">Get Special Features!</span>
                       </h2>
                       <p className="display-para">Praesent mollis lobortis nisi nec laoreet</p>
                   </div>
                   <div className="col-md-6 --card-col2">
                       <Button pad={'0.7em'} type={'default'} text={'Subscribe Now'} />
                   </div>
                </div>    
              </div>
            </div>

           <div className="container footer--container2">
               <div className="row ">
                   <div className="col-md-4 footer--col1">
                     <Image  src={Logo} placeholder="blur" />
                     <br />
                     <br />
                     <p className="display-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum officia facere voluptatem consequuntur, distinctio amet? Laudantium odio sint dignissimos soluta officiis voluptatum </p>
                     <br />
                     
                   </div>
                   <div className="col-md-3 position-footer--col ">
                       <div>
                            <h5 className="display--plans">Product</h5>
                            <ul className="list-none">
                                <li className="display-para">Praesent</li>
                                <li  className="display-para">Laoreet</li>
                                <li  className="display-para">Laoreet</li>
                                <li  className="display-para">Server</li>
                            </ul>
                      </div>
                   </div>
                   <div className="col-md-3 position-footer--col">
                    <div>
                        <h5 className="display--plans">Engage</h5>
                            <ul className="list-none">
                                <li  className="display-para">Mauris</li>
                                <li  className="display-para">Aenean</li>
                                <li  className="display-para">Linsean</li>
                                <li  className="display-para">Lingula</li>
                            </ul>
                    </div>
                   </div>
                   <div className="col-md-2 position-footer--col">
                    <div >
                        <h5 className="display--plans">Earn Money</h5>
                            <ul className="list-none">
                                <li  className="display-para">Ultrices</li>
                                <li  className="display-para">Fusce</li>
                            </ul>
                    </div>
                   </div>
               </div>
               <div className="row">
                    <p className="footer--copy-para">
                                &copy;
                                <span>2021PADDLE</span>
                            </p>
               </div>
           </div>
       </footer>
    );
}