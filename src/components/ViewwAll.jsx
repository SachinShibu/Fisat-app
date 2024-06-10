import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewwAll = () => {
    const [data, changeStud] = useState([])
    const fetchData = () => {
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response) => {
                changeStud(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">_id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">College</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Course</th>
                        <th scope="col">Mobile No.</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (value, index) => {
                                return <tr>
                                    <th scope="row">{value._id}</th>
                                    <td>{value.firstname}</td>
                                    <td>{value.lastname}</td>
                                    <td>{value.college}</td>
                                    <td>{value.dob}</td>
                                    <td>{value.course}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.email}</td>
                                    <td>{value.address}</td>
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewwAll