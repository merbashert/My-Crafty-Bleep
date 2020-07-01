import React from 'react';
import Zipper from './Zipper'
import ZipperForm from './ZipperForm'

const zipperList = (props) => {


    const handleCreateZipper = (createData) => {
        fetch(`${props.baseUrl}/zippers`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdZipper => {
            return createdZipper.json()
        })
        .then(json => {
            props.setZippers(json)
        })
        .catch(err=>console.log(err))
    }

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
            <ZipperForm
                handleCreateZipper={handleCreateZipper}
                zipperSize = {props.zipperSize} />

        </div>
    )
}

export default zipperList;
