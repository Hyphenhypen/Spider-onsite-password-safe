import React from 'react'
import './Home.css'
import image from './images.png'
export default function Home() {
  return (
    <div className='home'>
      <div className="container">
        <div className="left">
          <h1>Welcome to Quizzhub Platform</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolores cupiditate obcaecati minima modi omnis delectus unde debitis? Itaque culpa nostrum perferendis, velit earum atque voluptatibus ducimus reiciendis molestiae explicabo fugit totam iure vero eos, officia voluptates alias harum cumque necessitatibus sapiente id fugiat quibusdam perspiciatis quidem! Debitis voluptatibus maxime nulla illo totam quas sint, provident dolores officiis voluptatem adipisci officia enim nihil voluptates voluptatum mollitia, possimus iusto? Laborum, consequuntur officiis nam odit rerum voluptate fugit, pariatur, explicabo ipsam ullam nobis dolores harum laudantium voluptas illo ea! Explicabo labore ducimus eum minus consequuntur eius. Perferendis quasi quam deserunt voluptas iusto.</p>
        </div>
        <div className="right">
          <img src={image} alt="Image"/>
        </div>
      </div>
    </div>
  )
}
