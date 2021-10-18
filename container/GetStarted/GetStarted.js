import Image from 'next/image';
import Button from '../../components/Button/Button';

//COMPANIES IMAGE
import netflix from '../../public/assets/images/netflix.png';
import reddit from '../../public/assets/images/reddit.png';
import amazon from '../../public/assets/images/amazon.png';
import discord from '../../public/assets/images/discord.png';
import spotify from '../../public/assets/images/spotify.png';


export default function GetStarted(){
    return(
        <section className="get__started_">
        <div className="container">
            <div className="top--get--started pb-4">
              <h3 className="get--started--header">Get Started With Paddle Today</h3>
              <p className="display-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus  accusantium</p>
               <Button pad={'0.6rem'} type={'default'} text={'Start Today'} />
            </div>

            <div className="companies__client mt-5"> 
              <div className="row __client--row">
                <div className="col-md-2 text-center __client--col ">
                   <Image src={netflix} placeholder="blur"/>
                </div>
                <div className="col-md-2 text-center  __client--col ">
                  <Image src={reddit} placeholder="blur" />
                </div>
                <div className="col-md-2 text-center  __client--col ">
                   <Image src={amazon} placeholder="blur" />
                </div>
                <div className="col-md-2 text-center  __client--col ">
                   <Image src={discord} placeholder="blur" />
                </div>
                <div className="col-md-2 text-center  __client--col ">
                   <Image src={spotify} placeholder="blur" />
                </div>
              </div>
            </div>
        </div>
     </section>

    );
}
