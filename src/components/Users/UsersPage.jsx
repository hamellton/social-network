import React from "react";
import clasess from './UsersPage.module.css'

let UsersPage = (props) => {
    return (
        <div>
            {props.users.map(el => {
                return (
                    <div key={el.id}>
                        <span>
                            <div className={clasess.item}>
                                <img
                                    src={el.photoUrl}
                                    alt=""/>
                            </div>
                            <div className={clasess.btn}>
                                <button>Follow</button>
                            </div>
                        </span>
                        <span>
                            <div className={clasess.ident}>
                            <span>
                                <div>{el.fullname}</div><div>{el.status}</div>
                            </span>
                            <span>
                                <div>{el.location.country}</div>
                                <div>{el.location.city}</div>
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