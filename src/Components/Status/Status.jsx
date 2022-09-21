import React from 'react';
import { useNetwork } from '../../useNetwork';
import styles from './Status.module.css';

import Connected from '../../assets/Connected.svg';
import { RiWifiFill, RiWifiOffFill } from 'react-icons/ri';

const Status = () => {

    const [connection, isOnline] = useNetwork();

    return (
        <>
            <div className="container mt-5">
                <div className={`${styles.Notification} mb-5`}>
                    {
                        isOnline ? (
                            <div className={`${styles.alert} alert alert-success text-center`} role="alert">
                                <strong>Hurray!!</strong> <br /> Connection looks good
                            </div>
                        ) : (
                            <div className={`${styles.alert} alert alert-danger text-center`} role="alert">
                                <strong>Oops!!</strong> <br /> No internet connection <br /> Please check your internet connection and try again
                            </div>
                        )
                    }
                </div>
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <img className='img-fluid' src={Connected} alt="Connection Status" />
                    </div>
                    <div className="col-md-6 m-auto">
                        <div className="card shadow border-0">
                            <h4>
                                <span className={`position-absolute top-0 start-50 translate-middle ${styles.badge} badge`}>
                                    Live Update 🔥
                                </span>
                            </h4>
                            <div className="card-body mt-3">
                                <table className='table table-bordered'>
                                    <thead className='table-secondary'>
                                        <tr>
                                            <th scope="col">
                                                <h4>Connection Property</h4>
                                            </th>
                                            <th scope="col">
                                                <h4>Value</h4>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5>Status :</h5>
                                            </td>
                                            <td>
                                                <h5><span className={`${isOnline ? 'online' : 'offline'} fw-bold`}>
                                                    {isOnline ? (
                                                        <span>Online <RiWifiFill /></span>
                                                    ) : (
                                                        <span>Offline <RiWifiOffFill /></span>
                                                    )}
                                                </span></h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Down Link : </h5>
                                            </td>
                                            <td>
                                                <h5><span className={styles.text}>{connection.downlink + 'Mb/s'}</span></h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Latency or Round Trip Time :</h5>
                                            </td>
                                            <td>
                                                <h5><span className={styles.text}>{connection.rtt + ' ms'}</span></h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Effective Bandwidth :</h5>
                                            </td>
                                            <td>
                                                <h5><span className={styles.text}>{connection.effectiveType}</span></h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Data Saver? :</h5>
                                            </td>
                                            <td>
                                                <h5><span className={styles.text}>{connection.saveData ? "Yes" : "No"}</span></h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Status;