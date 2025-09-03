import github_icon from '../assets/images/github.svg'
import email from '../assets/images/mail.svg'
import linkedin from '../assets/images/linkedin.svg'


function Footer() {
const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className='inner'>
      <p> &copy;  {currentYear} Prabhu .K </p>
  <div className="links">
    <a href="https://github.com/prabhu7x/prabhu.k"><img src={github_icon} alt="github_icon" /></a>
    <a href="mailto:prabhu@7xyzgmail.com"><img src={email} alt="email icon" /></a>
    <a href="www.linkedin.com/in/prabhu7k"><img src={linkedin} alt="linkenIn" /></a>
    </div>          
      </div>
    </footer>
  )
}

export default Footer