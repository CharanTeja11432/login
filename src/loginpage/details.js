import React, { useState } from "react";
import './detail.css';
import Button from "@material-ui/core/Button";
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        employeeId: '',
        joiningDate: '',
        deviceId: '',
        laptopBag: '',
        phone: '',
        currentAddress: '',
        permanentAddress: '',
        bloodGroup: '',
        vehicleDetails: '',
        selfDeclaration: null,
        equipmentAgreement: null,
        confidentialAgreement: null,
    });

    const [errors, setErrors] = useState({}); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); 
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
        setErrors({ ...errors, [name]: '' }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
    
     
        Object.keys(formData).forEach(key => {
            if (key.includes("Agreement")) {
                if (!formData[key]) {
                    newErrors[key] = 'This field is required.';
                }
            } else if (!formData[key]) {
                newErrors[key] = 'This field is required.';
            }
        });
        
        
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits.';
        }
    
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); 
            return;
        }
    
        
        navigate('/finaldata', { state: { formData } });
    };
    

    return (
        <div className="details">
            <h4 style={{ position: 'absolute', top: '5%', left: '7%', color: 'black', fontSize: '20px' }}>Personal Information</h4>
            <form onSubmit={handleSubmit}>
                <div className="first-row">
                    <label className="first">
                        First name* <br />
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </label>
                    <label className="last">
                        Last name* <br />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </label>
                    <label className="employe">
                        Employee ID* <br />
                        <input
                            type="text"
                            name="employeeId"
                            placeholder="RJGSxxxxS"
                            value={formData.employeeId}
                            onChange={handleChange}
                            required
                        />
                        {errors.employeeId && <p className="error">{errors.employeeId}</p>}
                    </label>
                </div>
                <div className="second-row">
                    <label className="Date">
                        Date Of Joining* <br />
                        <input
                            type="date"
                            name="joiningDate"
                            value={formData.joiningDate}
                            onChange={handleChange}
                            required
                        />
                        {errors.joiningDate && <p className="error">{errors.joiningDate}</p>}
                    </label>
                    <label className="device">
                        Device ID* <br />
                        <input
                            type="text"
                            name="deviceId"
                            placeholder="DellxxxxyyyS"
                            value={formData.deviceId}
                            onChange={handleChange}
                            required
                        />
                        {errors.deviceId && <p className="error">{errors.deviceId}</p>}
                    </label>
                    <label className="laptop">
                        Laptop Bag* <br />
                        <select
                            name="laptopBag"
                            value={formData.laptopBag}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-Select option-</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        {errors.laptopBag && <p className="error">{errors.laptopBag}</p>}
                    </label>
                </div>
                <div className="third-row">
                    <label className="self">
                        Self Declaration* <br />
                        <input
                            type="file"
                            name="selfDeclaration"
                            accept=".pdf,.doc,.png,.jpg,.docx"
                            onChange={handleFileChange}
                            required
                        />
                        {errors.selfDeclaration && <p className="error">{errors.selfDeclaration}</p>}
                    </label>
                    <label className="agreement">
                        Employee Equipment Agreement* <br />
                        <input
                            type="file"
                            name="equipmentAgreement"
                            accept=".pdf,.doc,.png,.jpg,.docx"
                            onChange={handleFileChange}
                            required
                        />
                        {errors.equipmentAgreement && <p className="error">{errors.equipmentAgreement}</p>}
                    </label>
                    <label className="confident">
                        Confidential Agreement* <br />
                        <input
                            type="file"
                            name="confidentialAgreement"
                            accept=".pdf,.doc,.png,.jpg,.docx"
                            onChange={handleFileChange}
                            required
                        />
                        {errors.confidentialAgreement && <p className="error">{errors.confidentialAgreement}</p>}
                    </label>
                </div>
                <div className="fourth-row">
                    <label className="contact">
                        Contact Details* <br />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="1234567890"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            pattern="[0-9]{10}"
                            title="Phone number must be exactly 10 digits."
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </label>
                    <label className="address">
                        Current address* <br />
                        <input
                            type="text"
                            name="currentAddress"
                            placeholder="Current address"
                            value={formData.currentAddress}
                            onChange={handleChange}
                            required
                        />
                        {errors.currentAddress && <p className="error">{errors.currentAddress}</p>}
                    </label>
                    <label className="permanent">
                        Permanent address* <br />
                        <input
                            type="text"
                            name="permanentAddress"
                            placeholder="Permanent address"
                            value={formData.permanentAddress}
                            onChange={handleChange}
                            required
                        />
                        {errors.permanentAddress && <p className="error">{errors.permanentAddress}</p>}
                    </label>
                </div>
                <div className="fifth-row">
                    <label className="blood">
                        Blood Group* <br />
                        <select
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        {errors.bloodGroup && <p className="error">{errors.bloodGroup}</p>}
                    </label>
                    <label className="Vehicle">
                        Vehicle Details* <br />
                        <input
                            type="text"
                            name="vehicleDetails"
                            placeholder="Vehicle Details"
                            value={formData.vehicleDetails}
                            onChange={handleChange}
                            required
                        />
                        {errors.vehicleDetails && <p className="error">{errors.vehicleDetails}</p>}
                    </label>
                </div>
                <div className="button">
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button></div>
            </form>
        </div>
    );
}

export default Details;
