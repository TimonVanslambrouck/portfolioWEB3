import {items} from './data';
import Card from './Card'
import './Card.css';

function Home() {
  return (
    <div className="projects">
      <h1>My projects over the years...</h1>
      <hr />
    {
      items.map((project, i) => {
        return <Card key={i} project={project}></Card>
      })
    }
    </div>
  )
}

export default Home;
