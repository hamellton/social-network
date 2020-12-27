import React from "react"
import clasess from './UsersPage.module.css'
import * as axios from "axios"
import userPhoto from '../../assets/img/incognito.jpg'

let UsersPage = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => props.setUser(res.data.items))
        // props.setUser([
        //     { id: 1, photoUrl: 'https://bestbonusmoney.com/wp-content/themes/bestbonus_light/incognito.jpg', followed: false, fullname: 'Kostya', status: 'Status1', location: {city: 'kyiv', country: 'Ukraine'} },
        //     { id: 2, photoUrl: 'https://bestbonusmoney.com/wp-content/themes/bestbonus_light/incognito.jpg', followed: true, fullname: 'Jenni', status: 'Status2', location: {city: 'London', country: 'England'} },
        //     { id: 3, photoUrl: 'https://bestbonusmoney.com/wp-content/themes/bestbonus_light/incognito.jpg', followed: true, fullname: 'Sam', status: 'Status3', location: {city: 'Paris', country: 'France'} },
        // ])
    }
    return (
        <div>
            {props.users.map(el => {
                return (
                    <div key={el.id}>
                        <span>
                            <div className={clasess.item}>
                                <img
                                    src={el.photos.small != null ? el.photos.small : userPhoto}
                                    alt=""/>
                            </div>
                            <div className={clasess.btn}>
                                {el.followed ? <button onClick={() => {props.unfollow(el.id)}}>follow</button> :
                                    <button onClick={() => {props.follow(el.id)}}>unfollow</button>}
                            </div>
                        </span>
                        <span>
                            <div className={clasess.ident}>
                            <span>
                                <div>{el.name}</div><div>{el.status}</div>
                            </span>
                            <span>
                                <div>{'el.location.country'}</div>
                                <div>{'el.location.city'}</div>
                            </span>
                                </div>
                        </span>
                    </div>
                )
            }
                )
            }
                </div>
                )
            }

export default UsersPage