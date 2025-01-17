import React from "react";
import { useLocation } from "react-router-dom";
import './final.css';
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const Summary = () => {
    const location = useLocation();
    const { formData } = location.state || {}; 
    const navigate = useNavigate();

    const handleInfo = () => {
        navigate('/details');
    }

    return (
        <div className="data">
            <h2>Employee Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Employee ID</th>
                        <th>Date Of Joining</th>
                        <th>Device ID</th>
                        <th>Laptop Bag</th>
                        <th>Phone</th>
                        {/* <th>Self Declaration</th>
                        <th>Employee Equipment Agreement</th>
                        <th>Confidential Agreement</th> */}
                        <th>Current Address</th>
                        <th>Permanent Address</th>
                        <th>Blood Group</th>
                        <th>Vehicle Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.firstName} {formData.lastName}</td>
                        <td>{formData.employeeId}</td>
                        <td>{formData.joiningDate}</td>
                        <td>{formData.deviceId}</td>
                        <td>{formData.laptopBag}</td>
                        <td>{formData.phone}</td>
                        {/* <td>{formData.selfDeclaration.type}   <a href={URL.createObjectURL(formData.selfDeclaration)} target="_blank" rel="noopener noreferrer">Download</a></td>
                        <td>{formData.equipmentAgreement.type} <a href={URL.createObjectURL(formData.equipmentAgreement)} target="_blank" rel="noopener noreferrer">Download</a></td>
                        <td>{formData.confidentialAgreement.type}  <a href={URL.createObjectURL(formData.confidentialAgreement)} target="_blank" rel="noopener noreferrer">Download</a></td> */}
                        <td>{formData.currentAddress}</td>
                        <td>{formData.permanentAddress}</td>
                        <td>{formData.bloodGroup}</td>
                        <td>{formData.vehicleDetails}</td>
                    </tr>
                </tbody>
            </table>


            <Button variant="contained" color="primary" onClick={handleInfo}>Back To Info</Button>
        </div>
    );
};

export default Summary;
