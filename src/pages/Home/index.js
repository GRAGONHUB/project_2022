import React from 'react'
import Card from '../../components/Card'
import { mockedArray } from './mockData'

const HomePage = () => (
  <div className="columns-2 md:columns-4 lg:columns-5 gap-y-16">
    {mockedArray.map((item) => (
      <Card key={item} content={item} />
    ))}
  </div>
)

export default HomePage
