import React from 'react';
import Zipper from './Zipper'
import ZipperForm from './ZipperForm'

const zipperList = (props) => {


    const handleDeleteZipper = (id) => {
        fetch(`${props.baseUrl}/zippers/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            props.setZippers(props.zippers.filter(zipper => zipper.id !== id))
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
