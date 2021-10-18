import Image from 'next/image';

export function RepoCard(props){
    return(
        <div className="col-12 mb-2">
        <div className="card border-none shadow">
            <div className="card-body">
                <div className="row card__single ml-0">
                   <div className="col-lg-2 pl-0">
                       <div className="image__container ">
                            <Image src={props.avatar_url} />
                       </div>
                   </div>
                   <div className="col-lg-8 repo__info">
                       <div className="repo__info--top">
                           <h2>{props.repoName}</h2>
                           <p>{!props.repoDesc ? 'no description' : props.repoDesc}</p>
                       </div>
                       <div className="repo__info--bottom">
                           <span className="wrap--btn">Stars:{props.repoStars}k</span>
                           <span className="wrap--btn">Issues:{props.repoIssues}k</span>
                           <span>
                           {props.repotimestamp}
                           </span>
                       </div>
                   </div>
                </div>
            </div>
        </div> 
     </div>

    );
 }