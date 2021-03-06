import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    console.log(props);

    let Logout = () => {
        props.logoutThC();
    }

    // if (!props.isAuth) {
    //     return <Redirect to='/login' />
    // }

    return <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png' alt='img' />
        <div className={s.loginBlock}>
            {props.isAuth 
                ? <div className={s.login}>{props.login}<button className={s.logoutBtn} onClick={Logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            <img src='https://pyxis.nymag.com/v1/imgs/e9a/025/22556a8254656cfc6be215d2e8ef405015-ted-lasso.rsquare.w700.jpg' alt='img' />
        </div>
    </header>;
}

// тут у нас приходит isAuth --- если он не false, показываем логин пользователя, если false - ссылку на страницу с регистрацией
{/* <div className={s.loginBlock}>
    {props.isAuth ? props.login
        : <NavLink to={'/login'}>Login</NavLink>}
</div> */}

export default Header;