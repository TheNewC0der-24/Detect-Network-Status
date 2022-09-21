import React from 'react';
import styles from './About.module.css';

import about from '../../assets/about.svg';

const About = () => {
    return (
        <>
            <div className="container mt-5">
                <div className='text-center'>
                    <p className='w-50 m-auto'>Monitor and test Internet connectivity. Detect when Internet doesn't work over operating Wi-Fi or Ethernet. Also
                        detect latency, download speed, and effective bandwidth</p>
                    <img className='img-fluid mt-3 mb-5' width={200} src={about} alt="about" />
                </div>
                <h3 className='text-decoration-underline'>Important things you need to know :</h3>
                <h5 className='mt-4'>What is network connectivity status?</h5>
                <p>
                    Image result for need to detect network status Network Connectivity Status Indicator (NCSI) is a feature within
                    the Network Awareness feature to indicate whether or not your computer has Internet connectivity.
                </p>
                <h5 className='mt-4'>What are the most common causes of network problems?</h5>
                <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Configuration errors :</h5>
                                <p className="card-text">
                                    As networks grow, IT personnel are required to configure and manage all of these devices. Over time,
                                    errors such as misconfiguration of network devices or even just pulling the wrong wire can occur with
                                    regularity. It’s not hard for someone to make a simple mistake and fix it, but it can become debilitating
                                    if that mistake brings down an entire branch network or shuts off services to a region for more than a few
                                    minutes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Line damage :</h5>
                                <p className="card-text">
                                    When a business relies on communication lines from internet providers to handle their connections between
                                    sites, those lines become a calculated risk to the business. Whether through human damage (such as a car
                                    accident taking out a pole) or through natural causes (such as a storm damaging lines throughout a region), wired
                                    networks are susceptible to failure at any point along the line path. This has led to a broader move toward
                                    Wireless WAN.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Hardware failure :</h5>
                                <p className="card-text">
                                    Devices can fail, and hardware wears out over time. As networks grow, unless redundancy is built in from the very
                                    beginning, failure of any device in that network can cause either partial or total network failure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Intrusions :</h5>
                                <p className="card-text">
                                    There are many malicious actors in the world, and many networks are susceptible to malicious actions that overload
                                    a network and bring the whole thing down.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Network failures :</h5>
                                <p className="card-text">
                                    Any distributed network that relies on the hardware of another company is reliant on that company's services
                                    remaining stable. Should their hardware fail, your network will, too. Even if a network utilizes wireless
                                    networking features, it may still be susceptible to failure at critical points such as cell towers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Power loss :</h5>
                                <p className="card-text">
                                    Even in the most heavily developed and advanced cities in the world, power failure is not an uncommon
                                    occurrence. In many parts of the world, partial or total power failure is a regular nuisance. Networks lacking
                                    in redundancy and emergency power solutions will find that their business is ultimately beholden to the
                                    reliability of power distributors.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Traffic spikes :</h5>
                                <p className="card-text">
                                    Perhaps the most common cause of network failure apart from human error, spikes in traffic can overwhelm a network
                                    that isn’t prepared or scalable. These network failures can disrupt business across multiple sites if the failure
                                    hits a critical location or network.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Avoiding and minimizing network failure :</h5>
                                <p className="card-text">
                                    Cradlepoint products and services are made to build resiliency, redundancy, and security into enterprise networking
                                    using cellular broadband and purpose-built equipment. The following are some of the ways that Cradlepoint can help
                                    your networks become more resilient and avoid single points of failure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Diverse linkages :</h5>
                                <p className="card-text">
                                    By maintaining a diversity of linkages to a remote site, companies avoid losing their connections because of the
                                    failure of a single link. Cradlepoint devices utilize LTE and 5G cellular capabilities that can be used together to
                                    provide more than a single connection, combined with a wired connection to the same device, or it can act as a
                                    dynamic backup device to an existing wired router.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Dual carrier connectivity :</h5>
                                <p className="card-text">
                                    Utilizing wireless cellular connectivity still presents the problem of single linkage vulnerability. So Cradlepoint
                                    hybrid routers can use two separate modems to connect using different carriers, guarding against connection failure
                                    on either carrier network.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Hardware redundancy :</h5>
                                <p className="card-text">
                                    Through virtual router redundancy protocol and the usage of multiple Cradlepoint routers, automatic failover is
                                    instant and seamless to prevent any WAN failure or connectivity issues.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Multiple DMVPN tunnels :</h5>
                                <p className="card-text">
                                    No matter where sites are located, Cradlepoint routers can set up secure Dynamic Multipoint Virtual Private Network
                                    (DMVPN) connections to multiple data centers to act as primary and backup connections in the case of any head-end
                                    device failure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Dynamic resource scaling :</h5>
                                <p className="card-text">
                                    Cradlepoint endpoints are capable of maintaining and activating backup connections to spread traffic load so as to
                                    not overwhelm any single point in a network. Then, when the traffic spike has passed, the normal network setup is
                                    restored.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-0 h-100`}>
                            <div className="card-body">
                                <h5 className="card-title">Out-of-Band Management :</h5>
                                <p className="card-text">
                                    When a device goes down due to a firmware or hardware failure, in-band management becomes impossible. Cradlepoint
                                    backup adapters provide a control interface that can act independently of the failed device, allowing remote
                                    personnel to perform testing of the failed device and fix issues without needing to access it physically.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;