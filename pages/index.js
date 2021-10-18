import Head from 'next/head'
import Layout from '../hoc/Layout/Layout';

export default function Home() {
 
  return (
    <>
      <Head>
        <title>My Assessment</title>
        <meta name="description" content="My Assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <div className="container" style={{width:"100%",height:"100vh"}}>
            <div className="row __center__div  bg-danger">
              <div className="col-md-4">
                <div className="card ">
                  <div className="card-body">
                       Pebble Demo
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        Github Demo
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </Layout> 
    </>
  )
}
