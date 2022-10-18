import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div className="p-5 bg-primary text-white">
      <h1>Services Page</h1>
      <p>Lorem ipsum...</p>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <Link className="nav-link active" to="webdesign">
            Web Design
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="mobiledesign">
            Mobile Design
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="fullstack">
            Fullstack
          </Link>
        </li>
      </ul>
      <div className="tab-content">
        <Outlet />
        {/* <div id="webdesign" className="container p-0 m-0 mt-4 tab-pane active">
          <WebDesign/>
        </div>
        <div id="mobiledesign" className="container p-0 m-0 mt-4 tab-pane fade">
          <MobileDesign/>
        </div>
        <div id="fullstack" className="container p-0 m-0 mt-4 tab-pane fade">
          <Fullstack/>
        </div> */}
      </div>
    </div>
  );
}
