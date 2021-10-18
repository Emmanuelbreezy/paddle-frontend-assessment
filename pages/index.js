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
          <div className="container-fluid" >
            <div className="row w-25 bg-danger" style={{position:"absolute", left:"30%",top:"30%"}}>
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                       Pebble Demo
                  </div>
                </div>
              </div>
              <div className="col-md-8">
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
