import { Link } from 'react-router-dom';

import React, {useState} from 'react';

import './Menu.css';
import '../App.css';

export default function Menu(params) {

    const [checkRegistr, setCheckRegistr] = useState(false)

    return (
        <div className="content-menu">
            <div className="menu-butons">
                <a href='/auth' style={{ marginRight: 10 }}>Услуги</a>
                {checkRegistr ? <Link to='/client-room'>Личный кабинет</Link>:<Link to='/auth'>Регистрация</Link>}
            </div>
        </div>
    )
};
