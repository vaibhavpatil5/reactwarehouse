/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWarehouses } from './redux/warehouseSlice'
import { Link } from 'react-router-dom';
import data from './warehouses.json';
import Navbar from './Navbar';

function WarehouseList() {
    const warehouses = useSelector((state) => state.warehouses);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [clusterFilter, setClusterFilter] = useState('');
    const [spaceFilter, setSpaceFilter] = useState('');

    useEffect(() => {
        console.log(data);
        dispatch(setWarehouses(data));
    }, [dispatch]);

    const filteredWarehouses = warehouses.filter((warehouse) => {
        return (
            warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (cityFilter === '' || warehouse.city === cityFilter) &&
            (clusterFilter === '' || warehouse.cluster === clusterFilter) &&
            (spaceFilter === '' || warehouse.space_available == spaceFilter)
        );
    });

    return (
        <div>
            <header>
                <Navbar />

                <div className="content">
                    <div className="cont">
                        <h1>Elevate Your Warehousing Experience</h1>
                        <p>"Welcome to a world of warehousing excellence. Our warehouses are the cornerstone of efficiency and reliability, designed to empower your business."</p>
                        <button>Explore</button>
                    </div>
                    <div className="search">
                        <div className="search_bx">
                            <div className="card">
                                <h4>Name</h4>
                                <input
                                    type="text"
                                    placeholder="Search by name"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />

                            </div>





                            <div className="card">
                                <h4>City</h4>

                                <select
                                    value={cityFilter}
                                    onChange={(e) => setCityFilter(e.target.value)}
                                >
                                    <option value="">Filter by city</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Chennai">Chennai</option>
                                </select>
                            </div>




                            <div className="card">
                                <h4>Cluster</h4>


                                <select
                                    value={clusterFilter}
                                    onChange={(e) => setClusterFilter(e.target.value)}
                                >
                                    <option value="">Filter by cluster</option>
                                    <option value="cluster-a-32">cluster-a-32</option>
                                    <option value="cluster-a-1">cluster-a-1</option>
                                </select>
                            </div>


                            <div className="card">
                                <div className="card">
                                    <h4>Space</h4>
                                    <input
                                        type="number"
                                        placeholder="Filter by space available"
                                        value={spaceFilter}
                                        onChange={(e) => setSpaceFilter(e.target.value)}
                                    />
                                </div>
                            </div>



                        </div>

                        <div className="warehouse_bx">
                            <h4>Warehouses</h4>

                            <div className="cards">
                                {filteredWarehouses.map((warehouse) => (
                                    <div className="card" key={warehouse.id}>
                                        <Link to={`/warehouse/${warehouse.id}`} className="warehouse-link">
                                            <div className="warehouse-card">
                                                <h3>{warehouse.name}</h3>
                                                <div className="info">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                    </svg>
                                                    <h5>{warehouse.city}</h5>
                                                </div>
                                                <div className="info">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3-fill" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z" />
                                                    </svg>
                                                    <h5>{warehouse.cluster}</h5>
                                                </div>
                                                <div className="info">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-columns-gap" viewBox="0 0 16 16">
                                                        <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
                                                    </svg>
                                                    <h5>{warehouse.space_available}</h5>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                ))}
                            </div>
                        </div>



                    </div>
                </div>

            </header>

        </div>
    );
}

export default WarehouseList;
