import React from 'react';
// import './Navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Link to="/"/>
                <Link to="/about"/>
            </div>
        );
    }
}

export default Navigation;