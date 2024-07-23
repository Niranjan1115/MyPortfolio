import {Component} from 'react'
import {v4} from 'uuid'
import TabItem from '../TabItem'
import ProjectItemCard from '../ProjectItemCard'

import './index.css'

const initialProjectsList = [
  {
    projectId: v4(),
    name: 'Cowin Dashboard',
    category: 'REACT',
    imageUrl:
      'https://res.cloudinary.com/dn3muoio2/image/upload/v1720088592/CowinDashboard.png',
    projectUrl: 'http://anrcovid.ccbp.tech/',
  },
  {
    projectId: v4(),
    name: 'Jobby App',
    category: 'REACT',
    imageUrl:
      'https://res.cloudinary.com/dn3muoio2/image/upload/v1721673486/JobbyApp_000753_y8dagq.png',
    projectUrl: 'http://anrjobbyapp.ccbp.tech/',
  },
  {
    projectId: v4(),
    name: 'Yoga Page',
    category: 'STATIC',
    imageUrl:
      'https://res.cloudinary.com/dn3muoio2/image/upload/v1721674096/yogapage_t36ur9.png',
    projectUrl: 'anryoga.ccbp.tech',
  },
  {
    projectId: v4(),
    name: 'Shopping App',
    category: 'STATIC',
    imageUrl:
      'https://res.cloudinary.com/dn3muoio2/image/upload/v1720090996/Shoppingapp_zjo2kh.png',
    projectUrl: 'anrshoppingapp.ccbp.tech',
  },
  {
    projectId: v4(),
    name: 'Wikipedia Search Application',
    category: 'DYNAMIC',
    imageUrl:
      'https://res.cloudinary.com/dn3muoio2/image/upload/v1720089758/wikipediasearchapplication_tba4ll.jpg',
    projectUrl: 'anrwiki.ccbp.tech',
  },
  {
    projectId: v4(),
    name: 'Todo Application',
    category: 'DYNAMIC',
    imageUrl:
      'https://res.cloudinary.com/dn3muoio2/image/upload/v1720090779/todoapp_a7yh53.png',
    projectUrl: 'http://anrtodo.ccbp.tech/',
  },
]

const categoryList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'REACT', displayText: 'React'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
]

class Projects extends Component {
  state = {activeTab: 'ALL'}

  getFilteredProjects = activeTabId => {
    if (activeTabId !== 'ALL') {
      const filteredProjects = initialProjectsList.filter(
        eachItem => eachItem.category === activeTabId,
      )
      return filteredProjects
    }
    return initialProjectsList
  }

  onChangeActiveTab = activeTabId => {
    this.setState({activeTab: activeTabId})
  }

  render() {
    const {activeTab} = this.state
    const filteredProjects = this.getFilteredProjects(activeTab)
    return (
      <div className="projectMain_Ctn">
        <h1 className="myProjects_main_Heading">My Projects</h1>
        <div className="projectCtn">
          <ul className="tablist">
            {categoryList.map(eachItem => (
              <TabItem
                key={eachItem.id}
                tabDetails={eachItem}
                onChangeActiveTab={this.onChangeActiveTab}
                isActive={eachItem.id === activeTab}
              />
            ))}
          </ul>
          <ul className="projectListCtn">
            {filteredProjects.map(eachItem => (
              <ProjectItemCard
                key={eachItem.projectId}
                projectDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Projects
