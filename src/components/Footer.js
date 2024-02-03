import profileImage from "../images/profile.jpeg"

function Footer(props) {
    return <div className="card">
    <div className="profile-sidebar">
        <img className="profile-image" src={profileImage} alt="Profile Image"/>
            <ul className='social-list'>
                <li className='social-item'><a className='social-link' href="https://www.linkedin.com/in/erickvalenciadev/">LinkedIn</a></li>

                <li className='social-item'><a className='social-link' href="https://github.com/Flix0911">GitHub</a></li>

            </ul>
        </div>
        <div className='profile-main'>
            <h4 className='profile-name'>Erick Valencia</h4>
            <p className='profile-position'>Software Engineer</p>
            <p className='profile body'>
                Lorem
            </p>
        
        </div>
    </div>
}

export default Footer;