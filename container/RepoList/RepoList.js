import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { RepoCard } from '../../components/Cards/RepoCard';

export function RepoList({reposData,pageNumber}){
    const [resdata,setReData] = useState(reposData);
    const API_URL = 'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc';


    const mapData = resdata.map((data) => (
        <RepoCard key={data.id}
            avatar_url={data.owner_avatar_url}
            repoName={data.repo_name}
            repoDesc={data.repo_desc}
            repoStars={data.repo_no_stars}
            repoIssues={data.repo_no_issues}
            repotimestamp={data.repo_created_at}
        />
    ));

    const getMorePost = async() => {
        const res = await fetch(`${API_URL}&page=${pageNumber + 1}`);
        const data = await res.json();
            const result = data.items.map((item,) => ({
                    id: item.id,
                    repo_name: item.name,
                    repo_desc: item.description,
                    repo_no_stars: item.stargazers_count,
                    repo_no_issues: item.open_issues,
                    repo_created_at: item.created_at,
                    owner_avatar_url: item.owner.avatar_url,
            }));

            const oldState = [...resdata];
            const newState = oldState.concat([...result])

        setReData(newState);
    }

    return(
        <div className="container">
            <InfiniteScroll
               next={getMorePost}
               hasMore={true}
               dataLength={resdata.length}
               loader={<h4 className="my-3">Loading...</h4>}
            >
                {mapData}
            </InfiniteScroll>
          </div>
        
    );
 }