import React from 'react';
import Zipper from './Zipper'
import ZipperForm from './ZipperForm'

const zipperList = (props) => {


    return (
        <div className = "zipper-size">
            <h3>{props.zipperSize} Inches</h3>
            {props.zippers.filter(zipper=>{
                return zipper.size === props.zipperSize
            }).map((zipperData) => (
                <Zipper
                    key={zipperData.id}
                    zipperData={zipperData}
                    handleDeleteZipper={props.handleDeleteZipper}
                    />
            ))}
            <ZipperForm handleCreateZipper={props.handleCreateZipper}
                zipperSize='7' />

        </div>
    )
}

export default zipperList;
