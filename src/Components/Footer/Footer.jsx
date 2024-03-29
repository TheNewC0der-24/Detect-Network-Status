import React from 'react';
import styles from './Footer.module.css';

import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <style jsx='true'>
                {`
                     .btn {
                        text-decoration: none !important;
                        outline: 0 !important;
                        box-shadow: none !important;
                        border: none !important;
                        border-radius: 0 !important;
                    }
                `}
            </style>

            <footer className="text-center text-white mt-5" style={{ backgroundColor: "rgb(199, 199, 199)" }}>
                <div className="container p-4">
                    <h4 className='text-dark'>Connect with me on My Social Accounts</h4>
                    <section className="mb-4">
                        <a
                            className="btn btn-primary m-1"
                            style={{ backgroundColor: "#3b5998" }}
                            href="https://www.facebook.com/bhavya.khurana.399"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#55acee" }}
                            href="https://twitter.com/Bhavya06001699"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#dd4b39" }}
                            href="mailto:khuranabhavya24@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaGoogle />
                        </a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#ac2bac" }}
                            href="https://www.instagram.com/__khurana__._/"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#0082ca" }}
                            href="https://www.linkedin.com/in/bhavyakhurana24/"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#333333" }}
                            href="https://github.com/TheNewC0der-24"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                        >
                            <FaGithub />
                        </a>
                    </section>
                </div>

                <div className="text-center p-3 fixed-bottom" style={{ backgroundColor: '#455a64' }}>
                    © 2022 Copyright
                    <div className={`${styles.credits} mt-3`}>
                        Created by <span className='bg-white p-2'>Bhavya Khurana</span>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;