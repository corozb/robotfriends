import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot, i) => <Card robot={robot} key={i} />)

  return <div>{cardComponent}</div>
}

export default CardList
