
import Header from '../../components/Header/Header'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

import { useState } from 'react'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload />
       
    </div>
  )
}

export default Home