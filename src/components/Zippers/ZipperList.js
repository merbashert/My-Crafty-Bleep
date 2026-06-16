import React, { useMemo } from 'react';
import Zipper from './Zipper'
import { apiDelete } from '../../api'

const ZipperList = (props) => {
    const visibleZippers = useMemo(() => {
        return props.zippers.filter(zipper=>{
            return String(zipper.size) === String(props.zipperSize)
        })
    }, [props.zippers, props.zipperSize])


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
            {visibleZippers.map((zipperData) => (
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

export default ZipperList;
