import React from 'react';
import { RepoCard } from '../../components/Cards/RepoCard';

export function RepoList(props){

    const mapData = props.reposData.map((data) => (
        <RepoCard key={data.id}
            avatar_url={data.owner_avatar_url}
            repoName={data.repo_name}
            repoDesc={data.repo_desc}
            repoStars={data.repo_no_stars}
            repoIssues={data.repo_no_issues}
            repotimestamp={data.repo_created_at}
        />
    ))
    return(
        <div className="container">
            <div className="row">
                {mapData}
            </div>
          </div>
        
    );
 }