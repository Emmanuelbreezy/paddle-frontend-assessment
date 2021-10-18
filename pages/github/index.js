import Head from 'next/head';

import { useEffect, useState } from 'react';
import Layout from '../../hoc/Layout/Layout';
import GitLoader from '../../components/Loader/GitLoader';
import { RepoList } from '../../container/RepoList/RepoList';


export default function Github(props) {
  const [loading,setLoading] = useState(true);
  const [pageNumber,setPageNumber] = useState(1);

  useEffect(() => {
    if(loading){
      setTimeout(function(){
        setLoading(false);
      },2000)
    }
   
  },[loading,setLoading]);

console.log(props.result,'[]]')

  return (
    <>
      <Head>
        <title>Github Demo</title>
        <meta name="description" content="Github" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {loading ? <GitLoader /> : (
        <>
        <header className="pb-5 mb-4">
           <nav className="navbar navbar-expand-lg pt-3 z-index pb-3 navbar-light bg-white __top--nav fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Github
                </a>
             </div> 
            </nav>
       </header>
        <main className="main pt-4">
           <RepoList reposData={props.data} pageNumber={pageNumber} />
        </main>
        </>)}
        </Layout> 
    </>
  )
}

export async function getServerSideProps(context){
    const API_URL = 'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=1';

    const res = await fetch(`${API_URL}`,{
        method:"GET"
    });
    const data = await res.json();
    const mapData = data.items.map((item,) => ({
            id: item.id,
            repo_name: item.name,
            repo_desc: item.description,
            repo_no_stars: item.stargazers_count,
            repo_no_issues: item.open_issues,
            repo_created_at: item.created_at,
            owner_avatar_url: item.owner.avatar_url,
    }));

    return {
        props:{
            data:mapData
        }
    }
}

