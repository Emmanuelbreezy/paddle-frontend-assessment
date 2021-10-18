import Image from 'next/image';
import Button from '../../components/Button/Button';
import { PlanItem } from '../../components/List/List';
//PLANS IMAGES
import freePlanArt from '../../public/assets/images/pricing1.png';
import standPlanArt from '../../public/assets/images/pricing2.png';
import premPlanArt from '../../public/assets/images/pricing3.png';


export default function Plans(){
    return(
        <section className="pricing--section _plans">
        <div className="container">
          <div className="_plans--head text-center">
            <h3 className="display-h3">
              Choose Your Plan
            </h3>
            <p className="display-para">Let's choose package that is best for you and explore it happily and cheerfully</p>
          </div>
          <div className="row _plans--row">
            <div className="col-md-6 col-lg-4 mb-2">
               <div className="__plans--column">
                 <div className=" __first--wrap" style={{paddingTop:"4.0rem"}}>
                   <div className="w-100 text-center"><Image src={freePlanArt} placeholder="blur" /></div>
                   <h3 className="display--plans text-center">Free Plan</h3>
                   <ul className="__wrap--list">
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                       <PlanItem text={'Mauris sem neque'} />  
                     </li>
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                   </ul>
                 </div>
                 <div className="text-center bottom--wrap mt-2">
                     <h2 className="display-h3">Free</h2>
                     <Button type={'outline'}text={'Select'} />
                 </div>
               </div>
            </div> 


            <div className="col-md-6 col-lg-4 mb-2">
                <div className="__plans--column">
                <div className=" __first--wrap " style={{paddingBottom:"5.79rem"}}>
                  <div className="w-100 text-center pt-2"><Image src={standPlanArt} placeholder="blur" /></div>
                   <h3 className="display--plans text-center">Standard Plan</h3>
                   <ul className="__wrap--list">
                     <li>
                       <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                   </ul>
                 </div>
                 <div className="text-center bottom--wrap w-100">
                   <div className="d-flex align-items-center bottom--wrap--action justify-content-center">
                     <h2 className="display-h3">$9</h2>
                     <span className="_plans-sub-text">/ mo</span>
                   </div>
                     <Button type={'outline'}text={'Select'} />
                 </div>

                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-2 _plan__prem">
               <div className="__plans--column  __plan--active">
                 <div className=" __first--wrap" style={{paddingTop:"4.3rem",  paddingBottom:"2.99rem"}}>
                   <div className="w-100 text-center"><Image src={premPlanArt} placeholder="blur" /></div>
                   <h3 className="display--plans text-center">Premium Plan</h3>
                   <ul className="__wrap--list">
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                         <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                        <PlanItem text={'Mauris sem neque'} />
                     </li>
                     <li>
                       <span className="__wrap--icon">
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.39614 9.27955C5.26488 9.27981 5.13485 9.25416 5.01353 9.20405C4.8922 9.15394 4.78196 9.08036 4.68914 8.98755L0.447144 4.74455C0.351571 4.65237 0.275313 4.54208 0.222819 4.42011C0.170326 4.29814 0.142648 4.16694 0.141402 4.03417C0.140155 3.90139 0.165364 3.76969 0.215558 3.64676C0.265752 3.52383 0.339925 3.41213 0.433751 3.31817C0.527576 3.22421 0.639174 3.14988 0.762034 3.09951C0.884893 3.04915 1.01655 3.02375 1.14933 3.02481C1.28211 3.02587 1.41335 3.05336 1.53539 3.10568C1.65743 3.158 1.76783 3.2341 1.86014 3.32955L5.39514 6.86455L11.7601 0.501546C11.9477 0.313906 12.202 0.208437 12.4673 0.208344C12.7326 0.20825 12.987 0.313538 13.1746 0.501046C13.3623 0.688554 13.4678 0.942923 13.4678 1.20819C13.4679 1.47346 13.3627 1.72791 13.1751 1.91555L6.10314 8.98755C6.01032 9.08036 5.90009 9.15394 5.77876 9.20405C5.65744 9.25416 5.52741 9.27981 5.39614 9.27955Z" fill="#2FAB73"/>
                              </svg>
                       </span>
                       <span  className="__wrap--text display-para">Mauris sem neque</span>
                     </li>
                   </ul>
                 </div>
                 <div className="text-center bottom--wrap mt-2">
                 <div className="d-flex align-items-center bottom--wrap--action justify-content-center">
                     <h2 className="display-h3">$12</h2>
                     <span className="_plans-sub-text"> / mo</span>
                   </div>
                     <Button type={'default'}text={'Select'} />
                 </div>
               </div>
            </div> 
          </div>
            
         
        </div>
     </section>

    );
}
