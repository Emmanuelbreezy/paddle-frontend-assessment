import Image from 'next/image';
import moment from 'moment';

export function RepoCard(props){
    const time_ago = moment(props.repotimestamp).fromNow();
    return(
        <div className="col-12 mb-2">
        <div className="card border-none shadow">
            <div className="card-body">
                <div className="row card__single ml-0">
                   <div className="col-lg-2 pl-0">
                       <div className="image__container ">
                            <Image src={props.avatar_url} layout="responsive" width={'100%'} height={'100%'} />
                       </div>
                   </div>
                   <div className="col-lg-8 repo__info">
                       <div className="repo__info--top">
                           <h2>{props.repoName}</h2>
                           <p className="display-para">{!props.repoDesc ? 'no description' : props.repoDesc}</p>
                       </div>
                       <div className="repo__info--bottom">
                           <span className="wrap--btn">Stars: {props.repoStars}k</span>
                           <span className="wrap--btn">Issues: {props.repoIssues}k</span>
                           <span className="wrap--span">
                           {time_ago}
                           </span>
                       </div>
                   </div>
                </div>
            </div>
        </div> 
     </div>

    );
 }