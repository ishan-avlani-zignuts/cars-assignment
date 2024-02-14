//user dashboard page where user can see the cars and search the car

//importing all things
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import axios from 'axios'; 
import { useAuth } from '../../context/Authcontext'; 
import { displayDatAapi } from '../../utils/apiConstants';

//managing flow of getting details and search feature
function Userdashboard() {
    const { isLoggedIn } = useAuth(); 
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const userId = localStorage.getItem('userId'); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(displayDatAapi, {
                    params: {
                        userId: userId 
                    }
                }); 
                const data = response.data;
                setCars(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [userId]);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const filteredCars = cars.filter((car) => {
        return car.company.toLowerCase().includes(searchTerm.toLowerCase());
    });
//list of cars is displyed 
    return (
        <>
            <Navbar onSearch={handleSearch} isLoggedIn={isLoggedIn}/>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                    {filteredCars.map(car => (
                        <div key={car._id} className="col">
                            <div className="card h-100">
                                <img
                                    src={`data:image/jpeg;base64,${car.image}`}
                                    alt={car.name}
                                    className="card-img-top"
                                    style={{ maxHeight: '200px', width: '100%', height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{car.name}</h5>
                                    <p className="card-text">Company: {car.company}</p>
                                    <Link to={`/cardetails/${car._id}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Userdashboard;