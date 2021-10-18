import Head from 'next/head';
import Link from 'next/link';
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
          <div className="container pt-5">
            <h2 className="text-center">Pebble Frontend Assessment</h2>
            <div className="row __center__div">
              <div className="col-md-4">
              <h5>Task 1</h5>
                <div className="card ">
                  <div className="card-body">
                  <h5 className="card-title">Pebble Task</h5>
                    <p className="card-text">Reproduce the landing page as instructed</p>
                     <Link href="/homepage">
                        <a className="btn btn-primary">Preview</a>
                     </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Task 2</h5>
                <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Github Task</h5>
                      <p className="card-text">List the Github repos using it api</p>
                      <Link href="/github">
                          <a className="btn btn-primary">Preview</a>
                      </Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </Layout> 
    </>
  )
}
