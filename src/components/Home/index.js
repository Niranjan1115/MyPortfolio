import SkillItem from '../SkillItem'
import './index.css'

const skillItems = [
  {
    id: 1,
    skillName: 'HTML, CSS, JavaScript, ReactJS',
    domain: 'Frontend',
    domainStrength: '90%',
    html: '10%',
    css: '10%',
    js: '20%',
    react: '50%',
    remaining: '10%',
  },
  {
    id: 2,
    skillName: 'NodeJS, ExpressJS',
    domain: 'Backend',
    domainStrength: '80%',
    node: '40%',
    express: '30%',
    remaining: '20%',
  },
  {
    id: 3,
    skillName: 'MySQL, SQLite',
    domain: 'Database',
    domainStrength: '75%',
    mySql: '40%',
    sqlite: '35%',
    remaining: '25%',
  },
  {
    id: 4,
    skillName: 'Python',
    domain: 'Programming',
    domainStrength: '70%',
    python: '70%',
    remaining: '30%',
  },
  {
    id: 5,
    skillName: 'Computer Networking, Operating Systems, GIT',
    domain: 'Developer Foundations',
    domainStrength: '70%',
    cn: '15%',
    os: '15%',
    git: '40%',
    remaining: '30%',
  },
]

const Home = () => {
  const summaryText = `I am an aspiring Full Stack Development Trainee 
  at CCBP, NxtWave having hands on experience in MERN Stack Technplogies 
  such as React JS, React hooks, REST APIs, HTML, CSS, Javascript, Python, SQL.
  I am passionate for learning and implementing new Technologies by building my career in IT Companies.`

  return (
    <div className="home_BgCtn">
      <div className="topCtn">
        <img
          src="https://res.cloudinary.com/dn3muoio2/image/upload/c_crop,ar_9:16/v1721672852/ANR_xxjaak.jpg"
          alt="profile"
          className="profileImg"
        />
        <div className="roleCtn">
          <h1>FULL STACK WEB DEVELOPER</h1>
          <p>Anumula Niranjan Reddy</p>
        </div>
      </div>
      <h1 className="main-headingCtn">Summary</h1>
      <div className="bottomCtn">
        <div className="summaryCtn">
          <p className="summary_text">{summaryText}</p>
        </div>
        <ul className="skillCtn">
          {skillItems.map(eachItem => (
            <SkillItem key={eachItem.id} skillDetails={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home