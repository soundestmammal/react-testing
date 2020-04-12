import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./DashboardStyle.css";

class Dashboard extends Component {
    handleClick = () => {
        
        alert('go to page');
    }

    render() {
        return (
            <div>
                <div>This is the dashboard</div>
                <Link to="/profile"><button onClick={this.handleClick}>Go to Personal Profile Page</button></Link>
            </div>
            
        )
    }
}

export default Dashboard;