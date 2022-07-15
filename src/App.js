import './App.css';
import { useNetwork } from './useNetwork';

import Connected from './assets/Connected.svg';
import { RiWifiFill, RiWifiOffFill } from 'react-icons/ri';
import Footer from './Components/Footer';

function App() {

  const [connection, isOnline] = useNetwork();

  return (
    <>
      <div className="main d-flex justify-content-between p-2 sticky-top" style={{ backgroundColor: "#92e3a9" }}>
        <h2 className='text-white heading'>Detect Network Status</h2>
        <a className='support' href="https://www.buymeacoffee.com/bhavyakhurana" target='_blank' rel="noreferrer">
          <img className='img-fluid ms-2' src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" height="50" width="150" alt="Bhavya Khurana" ></img>
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <img className='img-fluid img' src={Connected} alt="Connection Status" />
          </div>
          <div className="col-md-5 m-auto">
            <div className="card my-5 bg-light">
              <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill" style={{ backgroundColor: '#455a64' }}>
                Live Update 🔥
              </span>
              <div className="card-body">
                <div className="list-group" style={{ cursor: "pointer" }}>
                  <h5 className="list-group-item list-group-item-action">Connection Status : <span className={`${isOnline ? 'online' : 'offline'} fw-bold`}>
                    {isOnline ? (
                      <span>Online <RiWifiFill /></span>
                    ) : (
                      <span>Offline <RiWifiOffFill /></span>
                    )}
                  </span>
                  </h5>
                  <h5 className="list-group-item list-group-item-action">Down Link : <span className='text-primary'>{connection.downlink + 'Mb/s'}</span></h5>
                  <h5 className="list-group-item list-group-item-action">Latency or Round Trip Time : <span className='text-primary'>{connection.rtt + ' ms'}</span></h5>
                  <h5 className="list-group-item list-group-item-action">Effective Bandwidth : <span className='text-primary'>{connection.effectiveType}</span></h5>
                  <h5 className="list-group-item list-group-item-action">Data Saver? : <span className='text-primary'>{connection.saveData ? "Yes" : "No"}</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
