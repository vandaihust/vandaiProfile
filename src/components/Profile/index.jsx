
import React from 'react';
import styles from './Profile.module.css'
import Typical from 'react-typical';
function Profile(props) {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileParent}>
                <div className={styles.profileDetail}>
                    <div className={styles.colz}>
                        <div className={styles.colzIcon}>
                            <a href='https://www.facebook.com/SonTot07'><i className="fa-brands fa-facebook"></i></a>
                            <a href='https://github.com/vandaihust'><i className="fa-brands fa-github"></i></a>
                        </div>

                    </div>
                    <div className={styles.profileDetailsName}>
                        <div className={styles.primaryText}>
                            {" "}
                            Xin chào, mình là <span className={styles.highlightText}>Văn Đại</span>
                        </div>
                    </div>
                    <div className={styles.profileDetailRole}>
                        <span className={styles.primaryText}>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={['Java Developer', 1000,
                                        'ReactJS', 500]}
                                />
                            </h1>
                            <span className={styles.profileRoleTagline}>
                                Văn Đại full stack web developer
                            </span>
                        </span>
                    </div>
                    <div className={styles.profileOptions}>
                        <button className={styles.primaryBtn}>
                            {" "}
                            Tuyển tôi

                        </button>
                        <a href='https://drive.google.com/file/d/1orpJyK6BU2tH8kfZ8pZY4Guy0xlBPyJk/view?usp=sharing' download='Account onedrive'>
                            <button className={styles.highlightedBtn}>Chi tiết</button>
                        </a>
                    </div>

                </div>
                <div className={styles.profilePicture}>
                    <div className={styles.profilePictureBackground}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;