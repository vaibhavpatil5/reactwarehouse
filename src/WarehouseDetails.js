
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { updateWarehouse } from './redux/warehouseSlice'


function WarehouseDetails() {
    const { id } = useParams();
    const warehouse = useSelector((state) =>
        state.warehouses.find((w) => w.id === parseInt(id))
    );
    const dispatch = useDispatch();

    const [name, setName] = useState(warehouse ? warehouse.name : '');
    const [city, setCity] = useState(warehouse ? warehouse.city : '');
    const [cluster, setCluster] = useState(warehouse ? warehouse.cluster : '');
    const [spaceAvailable, setSpaceAvailable] = useState(
        warehouse ? warehouse.space_available : 0
    );
    const [liveStatus, setLiveStatus] = useState(
        warehouse ? warehouse.is_live : false
    );

    const handleSave = () => {
        if (!warehouse) {
            return;
        }

        const updatedWarehouse = {
            ...warehouse,
            name,
            city,
            cluster,
            space_available: spaceAvailable,
            is_live: liveStatus,
        };

        dispatch(updateWarehouse(updatedWarehouse));
    };

    return (
        <div className="form-container">
            {warehouse ? (
                <>
                    <h1>{warehouse.name}</h1>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-field"
                        />
                    </label>
                    <label>
                        City:
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="input-field"
                        />
                    </label>
                    <label>
                        Cluster:
                        <input
                            type="text"
                            value={cluster}
                            onChange={(e) => setCluster(e.target.value)}
                            className="input-field"
                        />
                    </label>
                    <label>
                        Space Available:
                        <input
                            type="number"
                            value={spaceAvailable}
                            onChange={(e) => setSpaceAvailable(e.target.value)}
                            className="input-field"
                        />
                    </label>
                    <label>
                        Live Status:
                        <input
                            type="checkbox"
                            checked={liveStatus}
                            onChange={(e) => setLiveStatus(e.target.checked)}
                            className="checkbox"
                        />
                    </label>

                    <button onClick={handleSave} className="submit-button">
                        Save
                    </button>
                    <NavLink to="/" className="btn go-back">
                        Go Back
                    </NavLink>
                </>
            ) : (
                <p className="not-found">Warehouse not found</p>
            )}
        </div>

    );
}

export default WarehouseDetails;
