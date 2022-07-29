import React from 'react'
import { useDispatch } from 'react-redux'
import DressingRoomData from '../Data/DressingRoomData.json'
import { changeDressAction } from '../redux/actions/DressingRoomAction';

export default function DressingRoomItem() {
    const dispatch = useDispatch();
    const renderNavPills = () => {
        return DressingRoomData.navPills.map((item, index) => {
            return item.type === "topclothes" ? <li className='nav-item' key={index}>
                <a className="nav-link active btn-info font-weight-bold" data-toggle="pill" href={`#` + item.tabName}>{item.showName}</a>
            </li> : <li className='nav-item' key={index}>
                <a className="nav-link btn-info font-weight-bold" data-toggle="pill" href={`#` + item.tabName}>{item.showName}</a>
            </li>
        })
    }

    const renderTabPanes = () => {
        return DressingRoomData.navPills.map((item, index) => {
            return item.type === "topclothes" ? <div className="tab-pane active bg-dark" id={item.tabName} key={index}>
                <div className="container mt-1">
                    <div className="row">
                        {renderTabPanesItem(item.type)}
                    </div>
                </div>
            </div> : <div className="tab-pane fade bg-dark" id={item.tabName} key={index}>
                <div className="container mt-1">
                    <div className="row">
                        {renderTabPanesItem(item.type)}
                    </div>
                </div>
            </div>
        })
    }

    const renderTabPanesItem = (type) => {
        return DressingRoomData.tabPanes.map((item, index) => {
            return type === item.type ? <div className="col-12 col-sm-4 col-md-3" key={index} >
                <div className="card text-center bg-dark">
                    <img src={item.imgSrc_jpg} alt={item.id} />
                    <h4 style={{ color: '#fff' }}><b>{item.name}</b></h4>
                    <button style={{ color: '#DE318A' }} className="btn btn-warning border border-danger font-weight-bold" onClick={() => {
                        dispatch(changeDressAction(item))
                    }}>Try it on!</button>
                </div>
            </div > : null
        })
    }

    return (
        <div className="col-md-8">
            <ul className="nav nav-pills">
                {renderNavPills()}
            </ul>
            <div className="well">
                <div className="tab-content">
                    {renderTabPanes()}
                </div>
            </div>
        </div >
    )
}
