import React,{Component} from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import Visuals from './Visuals';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Sidebar />
                <Visuals />
            </div>
        )
    }
}
export default Home;