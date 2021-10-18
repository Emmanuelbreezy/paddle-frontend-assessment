import { TestimonialCard } from '../../components/Cards/TestimonialCard';
//TESTIMONY/CUSTOMER IMAGES
import avatar1 from '../../public/assets/images/customer1.png';
import avatar2 from '../../public/assets/images/customer2.png';
import avatar3 from '../../public/assets/images/customer3.png';

export default function Testimonial(){
    return(
        <section  className="testimonial__section ">
        <div className="container">
        <div className="top--testi--section pb-4">
               <h3 className="top--testi--header">
                 Trusted by Thousands of Happy Customer
                 </h3>
               <p className="display-para">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus  accusantium sit amet consectetur consectetur adipisicing elit
                 </p>
             </div>
        <div className=" testi__bottom">
          <div>
            <div className="testi__horizontal py-3">
               <div className="col-md-7 col-lg-4 pe-2 ">
                 <TestimonialCard 
                     active
                     image={avatar1}
                     username={'Viech Robert'}
                     location={'Warsaw, Poland'}
                     rating={'4.5'}
                     text={'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit quae consequuntur quibusdam, libero adipisci, atque eos hic vel labore"'}
                     />
               </div>
               <div className="col-md-7 col-lg-4 pe-2">
                 <TestimonialCard 
                       image={avatar2}
                       username={'Viech Robert'}
                       location={'Warsaw, Poland'}
                       rating={'4.5'}
                       text={'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit quae consequuntur quibusdam, libero adipisci, atque eos hic vel labore"'}
                       />
               </div>
               <div className="col-md-7 col-lg-4 pe-2">
                 <TestimonialCard 
                       image={avatar3}
                       username={'Viech Robert'}
                       location={'Warsaw, Poland'}
                       rating={'4.5'}
                       text={'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit quae consequuntur quibusdam, libero adipisci, atque eos hic vel labore"'}
                       />
               </div>

            </div>
            </div>
            <div className="row actions__btns">
               <div className=" d-flex align-items-center justify-content-end">
                  <button className="action__btn  __btn-left">
                     <svg width="20" height="19" viewBox="0 0 20 19" fill="#000">
                           <path d="M18.75 8.00291H3.925L8.4625 2.55291C8.67467 2.29764 8.77675 1.96854 8.74628 1.638C8.7158 1.30747 8.55527 1.00258 8.3 0.790408C8.04473 0.578235 7.71563 0.476157 7.3851 0.506632C7.05456 0.537107 6.74967 0.697637 6.5375 0.952908L0.2875 8.45291C0.245451 8.51256 0.207849 8.57523 0.175 8.64041C0.175 8.70291 0.175 8.74041 0.0875002 8.80291C0.0308421 8.94623 0.0011764 9.0988 0 9.25291C0.0011764 9.40702 0.0308421 9.55958 0.0875002 9.70291C0.0875002 9.76541 0.0874998 9.80291 0.175 9.86541C0.207849 9.93058 0.245451 9.99325 0.2875 10.0529L6.5375 17.5529C6.65503 17.694 6.8022 17.8075 6.96856 17.8853C7.13491 17.963 7.31636 18.0032 7.5 18.0029C7.79207 18.0035 8.07511 17.9018 8.3 17.7154C8.42657 17.6105 8.5312 17.4816 8.60789 17.3362C8.68458 17.1907 8.73183 17.0316 8.74692 16.8679C8.76202 16.7042 8.74466 16.5391 8.69586 16.3821C8.64705 16.2251 8.56775 16.0792 8.4625 15.9529L3.925 10.5029H18.75C19.0815 10.5029 19.3995 10.3712 19.6339 10.1368C19.8683 9.90237 20 9.58443 20 9.25291C20 8.92139 19.8683 8.60345 19.6339 8.36902C19.3995 8.1346 19.0815 8.00291 18.75 8.00291Z" 
                       />
                 </svg>
                  </button>
                  <button className="action__btn __btn-right">
                     <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                         <path d="M1.25 8.00291H16.075L11.5375 2.55291C11.3253 2.29764 11.2232 1.96854 11.2537 1.638C11.2842 1.30747 11.4447 1.00258 11.7 0.790408C11.9553 0.578235 12.2844 0.476157 12.6149 0.506632C12.9454 0.537107 13.2503 0.697637 13.4625 0.952908L19.7125 8.45291C19.7545 8.51256 19.7922 8.57523 19.825 8.64041C19.825 8.70291 19.825 8.74041 19.9125 8.80291C19.9692 8.94623 19.9988 9.0988 20 9.25291C19.9988 9.40702 19.9692 9.55958 19.9125 9.70291C19.9125 9.76541 19.9125 9.80291 19.825 9.86541C19.7922 9.93058 19.7545 9.99325 19.7125 10.0529L13.4625 17.5529C13.345 17.694 13.1978 17.8075 13.0314 17.8853C12.8651 17.963 12.6836 18.0032 12.5 18.0029C12.2079 18.0035 11.9249 17.9018 11.7 17.7154C11.5734 17.6105 11.4688 17.4816 11.3921 17.3362C11.3154 17.1907 11.2682 17.0316 11.2531 16.8679C11.238 16.7042 11.2553 16.5391 11.3041 16.3821C11.3529 16.2251 11.4322 16.0792 11.5375 15.9529L16.075 10.5029H1.25C0.91848 10.5029 0.600536 10.3712 0.366116 10.1368C0.131695 9.90237 0 9.58443 0 9.25291C0 8.92139 0.131695 8.60345 0.366116 8.36902C0.600536 8.1346 0.91848 8.00291 1.25 8.00291Z" fill="white"/>
                     </svg>

                  </button>
               </div>
            </div>
        </div>
        </div>
      </section>

    );
}