import React,{useState} from "react";
import './Header.css';

function Header() {
    const [showHeaderBar, setShowHeaderBar] = useState(true);

    const contactHandler = () => {
        setShowHeaderBar(!showHeaderBar);
    }

    return (
        <div className="header">
            <div id="header__bar" style={{transform:showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>

                <ul className="list">
                    <li> <a href="https://gist.github.com/nvzvetrin/034c4702b8aa3147a5f38abd5f3403ff" className="listitem">BubbleSort</a></li>
                    <li> <a href="https://gist.github.com/nvzvetrin/7754b5fde8dfda61fc1afe14074b1d33" className="listitem">InsertionSort</a></li>
                    <li> <a href="https://gist.github.com/nvzvetrin/692d60c894ad80d12c125b832dcd73f5" className="listitem">MergeSort</a></li>
                    <li> <a href="https://gist.github.com/nvzvetrin/a549587b4d30a65042a09ab8c62fa8d9" className="listitem">QuickSort</a></li>
                    <li> <a href="https://gist.github.com/nvzvetrin/e4b8d6a1c583287f2f633ac0b4eae9d8" className="listitem">SelectionSort</a></li>
                </ul>
            </div>

            <div className="header-logo"><span>D</span>ynamic<span>Visuals</span></div>
            <div className="header__options">
                <h3 className="header__option" onClick={contactHandler}>ALGOs</h3>
            </div>
        </div>
    )
}

export default Header;