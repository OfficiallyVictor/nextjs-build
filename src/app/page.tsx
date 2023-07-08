import { Alert } from "@/components/bootstrap";


export default function Home() {
  return (
    <div>
      <Alert>
        <p>
          This is a sample project to showcase and learn the new <strong>NextJS 13 app directory</strong> and its features, including:
        </p>
        <ul>
          <li>static and dynamic server-side rendering</li>
          <li>incremental static regeneration</li>
          <li>client-side rendering</li>
          <li>route handlers (API endpoints)</li>
          <li>meta-data API</li>
          <li>and many more cool stuffs</li>
        </ul>
        <p className="mb-0">
          Every page uses a different approach to <strong>fetching and caching data.</strong> Click the links in the nav bar to try them out.
        </p>
      </Alert>
      <Alert variant="secondary">
        <p>Note: In order to load the data on this site, you need to get a <a href="https://api.unsplash.com">free API key from Unsplash</a> and add it to your <small >.env.local</small> file as <small >UNSPLASH_ACCESS_KEY</small> </p>
        <p className="mb-0">Unsplash has a free quota of 50 requests per hour so you might start getting errors if you try too often</p>
      </Alert>
      <Alert>
       <p> This site was built by <strong>"Victor d'techie"</strong>an inquisitive Fullstack web developer and the site was built using <strong>NextJS 13!</strong></p>
      </Alert>
    </div>
  )
}
