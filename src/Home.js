import {useState}from 'react';
import Header from './components/Header';

import {AiOutlineStar} from 'react-icons/ai';
import {data} from './data';
import CardList from './components/CardList';
const Home = () => {
    const [cards,setCards]=useState(data)
    return (
        <>
        <Header/>
        <div className="popular">
            <p className="strong"><strong>Most Popular</strong></p>
            <div className="star"> <AiOutlineStar className="staroutline"/></div>
        </div>
        <CardList cards={cards}/>

        
        </>

    )
}

export default Home;
