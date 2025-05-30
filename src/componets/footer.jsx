import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Footer() {
   
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">AddisRestaurant</h5>
            <p>
              Your favorite destination for delicious, authentic Ethiopian cuisine served with warmth and tradition.
            </p>
          </div>

          {[...Array(2)].map((_, i) => (
            <div key={i} className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Section</h5>
              <p><a href="#" className="text-white text-decoration-none">Home</a></p>
              <p><a href="#" className="text-white text-decoration-none">Menu</a></p>
              <p><a href="#" className="text-white text-decoration-none">About</a></p>
              <p><a href="#" className="text-white text-decoration-none">Contact</a></p>
            </div>
          ))}

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Subscribe</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© 2025 Addis<span className='westo'>Restaurant.</span> All rights reserved.</p>
          </div>

          <div className="col-md-5 col-lg-4 text-end">
            <a href="#" className="text-white me-3 fs-5"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}