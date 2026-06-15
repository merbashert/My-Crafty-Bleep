import React from 'react';
import Zipper from './Zipper'
import { apiDelete } from '../../api'

const zipperList = (props) => {


    const handleDeleteZipper = (id) => {
        apiDelete(`${props.baseUrl}/zippers/${id}`, 'Unable to delete zipper')
        .then(json => {
            props.setZippers(currentZippers => currentZippers.filter(zipper => zipper.id !== id))
        }).catch(err=>console.log(err))
    }

    return (
        <div className = "zipper-size">
            <div>
            <h3>{props.zipperSize} Inches</h3>
            {props.zippers.filter(zipper=>{
                return zipper.size === props.zipperSize
            }).map((zipperData) => (
                <Zipper
                    key={zipperData.id}
                    zipperData={zipperData}
                    handleDeleteZipper={handleDeleteZipper}
                    />
            ))}
            </div>
        </div>
    )
}

export default zipperList;
