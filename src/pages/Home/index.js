import React from 'react'
import Card from '../../components/Card'

const mockedArray = [
  { image: 'https://placeimg.com/260/400/arch' },
  { image: 'https://placeimg.com/260/400/arch' },
  { image: 'https://placeimg.com/260/400/arch' },
  { image: 'https://placeimg.com/260/400/arch' },
]

const HomePage = () => (
  <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(100px,1fr))] auto-rows-[100px]">
    {mockedArray.map((item) => (
      <Card key={item} content={item} />
    ))}
  </div>
)

export default HomePage
