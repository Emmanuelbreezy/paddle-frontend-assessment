import Image from 'next/image';
//FEATURE IMAGE
import featureArt from '../../public/assets/images/features_art.png';

export default function Features(){
    return(
        <section className="features--section _feature">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 pl-0">
                <Image src={featureArt} placeholder="blur"   />
            </div>
            <div className="col-md-4 _feature--col">
               <h3 className="display-h3">Features We Provide For You</h3>
               <p className="display-para">Lorem ipsum dolor sit amet consectetur adipis icing elit. Totam tempora, labore</p>
               <ul className="__feature_ul">
                   <li>
                     <span className="__feature_square"></span>
                     <span className="__feature_text">Curabitur tempor justo</span>
                   </li>
                   <li>
                     <span className="__feature_square"></span>
                     <span className="__feature_text">Curabitur tempor justo</span>
                   </li>
                   <li>
                     <span className="__feature_square"></span>
                     <span className="__feature_text">Curabitur tempor justo</span>
                   </li>
                   <li>
                     <span className="__feature_square"></span>
                     <span className="__feature_text">Curabitur tempor justo</span>
                   </li>
               </ul>
            </div>
          </div>
        </div>
  </section>
    );
}
