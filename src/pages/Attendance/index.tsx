import moment from 'moment';
import React, { useState } from 'react';

import check from '../../assets/check.svg';
import x from '../../assets/x.svg';
import Header from '../../components/Header';

import './styles.scss';

const Attendance: React.FC = () => {
    const [days] = useState([
        moment().format('DD/MM'),
        (moment().add(1, 'week')).format('DD/MM'),
        (moment().add(2, 'weeks')).format('DD/MM'),
        (moment().add(3, 'weeks')).format('DD/MM'),
    ]);

    const [users] = useState([
        {name: 'Lucas Fonseca', image: 'https://picsum.photos/100'},
        {name: 'Lucas Fonseca', image: 'https://picsum.photos/100'},
        {name: 'Lucas Fonseca', image: 'https://picsum.photos/100'},
    ]);

    return (
        <div className="Attendance">
            <Header />
            <div className="grid">
                <div className="users">
                    {users.map((user, i) => (
                        <div className="user" key={i}>
                            <img src={user.image} alt="" />
                            {user.name}
                        </div>
                    ))}
                </div>
                <div className="data">
                    <div className="days">
                        {days.map((day, i) => (
                            <div key={i} className="day">{day}</div>
                        ))}
                    </div>
                    {users.map((user, i) => (
                        <div className="userAttendance" key={i}>
                           {days.map((day, i) => (
                                <div key={i} className="day">
                                    {(Math.round(Math.random())) == 0 ? (
                                        <img src={x} alt="" />
                                    ) : (
                                        <img src={check} alt="" />
                                    )}
                                </div>
                            ))} 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Attendance;