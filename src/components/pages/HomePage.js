import "../../App.css";
import React from 'react'
import { useEffect, useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function HomePage() {
    

    const [pcname, cpname] = useState("");
    const [Case, cpcase] = useState("");
    const [CPU, cpcpu] = useState("");
    const [Mainboard, cpmainboard] = useState("");
    const [RAM, cpram] = useState("");
    const [HDD, cphdd] = useState("");
    const [SSD, cpssd] = useState("");
    const [Monitor, cpmonitor] = useState("");
    const [VGA, cpvga] = useState("");
    const [UPS, cpups] = useState("");
    const [Printer, cpprinter] = useState("");
    const [Mouse, cpmouse] = useState("");
    const [Keyboard, cpkeyboard] = useState("");
    const [OS, cpos] = useState("");
    const [License, cposlc] = useState("");
    const [Location, cplocation] = useState("");
    const [User, cpuser] = useState("");
    const [Etc, cpetc] = useState("");
    const [Time, cpadddate] = useState("");


    const [computerList, setComputerList] = useState([]);

    const getcomcopy = () => {
        Axios.get("http://localhost:3001/comcopy").then((response) => {
            setComputerList(response.data);
        });
    };

    const addInfomation = () => {
        Axios.post("http://localhost:3001/create", {
            pcname: pcname,
            Case: Case,
            CPU: CPU,
            Mainboard: Mainboard,
            RAM: RAM,
            HDD: HDD,
            SSD: SSD,
            Monitor: Monitor,
            VGA: VGA,
            UPS: UPS,
            Printer: Printer,
            Mouse: Mouse,
            Keyboard: Keyboard,
            OS: OS,
            License: License,
            Location: Location,
            User: User,
            Etc: Etc,
            Time: Time
        }).then(() => {
            setComputerList([
                ...computerList,
                {
                    pcname: pcname,
                    Case: Case,
                    CPU: CPU,
                    Mainboard: Mainboard,
                    RAM: RAM,
                    HDD: HDD,
                    SSD: SSD,
                    Monitor: Monitor,
                    VGA: VGA,
                    UPS: UPS,
                    Printer: Printer,
                    Mouse: Mouse,
                    Keyboard: Keyboard,
                    OS: OS,
                    License: License,
                    Location: Location,
                    User: User,
                    Etc: Etc,
                    Time: Time
                },
            ]);
        });
    };

    // const updateEmployeeWage = (id) => {
    //   Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
    //     (response) => {
    //       setEmployeeList(
    //         employeeList.map((val) => {
    //           return val.id == id
    //             ? {
    //                 id: val.id,
    //                 name: val.name,
    //                 country: val.country,
    //                 age: val.age,
    //                 position: val.position,
    //                 wage: newWage,
    //               }
    //             : val;
    //         })
    //       );
    //     }
    //   );
    // };

    /* const deleteEmployee = (id) => {
       Axios.delete(http://localhost:3001/delete/${id}).then((response) => {
         setEmployeeList(
           employeeList.filter((val) => {
             return val.id != id;
           })
         );
       });
     };*/

    return (
        <div className="App container">
            <h1>Computer Infomation</h1>
            <div className="information">
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="pcname">
                            PC Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter PC Name"
                            onChange={(event) => {
                                cpname(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpcase">ลักษณะ Case:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter ลักษณะ Case"
                            onChange={(event) => {
                                cpcase(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpcpu">CPU:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter CPU"
                            onChange={(event) => {
                                cpcpu(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpmainboard">Mainboard :</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mainboard"
                            onChange={(event) => {
                                cpmainboard(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpram">RAM:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter RAM"
                            onChange={(event) => {
                                cpram(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cphdd">HDD:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter HDD"
                            onChange={(event) => {
                                cphdd(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpssd">SSD:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter SSD"
                            onChange={(event) => {
                                cpssd(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cpmonitor">Monitor:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Monitor"
                            onChange={(event) => {
                                cpmonitor(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cpvga">VGA:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter VGA"
                            onChange={(event) => {
                                cpvga(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cpups">UPS:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter UPS"
                            onChange={(event) => {
                                cpups(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cpprinter">Printer:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Monitor"
                            onChange={(event) => {
                                cpprinter(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cpmouse">Mouse:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mouse"
                            onChange={(event) => {
                                cpmouse(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cpkeyboard">Keyboard:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Keyboard"
                            onChange={(event) => {
                                cpkeyboard(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cpos">OS:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter OS"
                            onChange={(event) => {
                                cpos(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cposlc">License:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter License"
                            onChange={(event) => {
                                cposlc(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cplocation">ที่ตั้งเครื่อง:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Location"
                            onChange={(event) => {
                                cplocation(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cpuser">ผู้รับผิดชอบ:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter User"
                            onChange={(event) => {
                                cpuser(event.target.value)
                            }}
                        />
                    </div><div className="mb-3">
                        <label htmlFor="cpetc">อื่นๆ:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Etc"
                            onChange={(event) => {
                                cpetc(event.target.value)
                            }}
                        />
                    </div>
                    <button onClick={addInfomation} class="btn btn-success">
                        Add Infomation
                    </button>
                </form>
                <div className="comcopy">
                    <button class="btn btn-primary" onClick={getcomcopy}>
                        Show Infomation
                    </button>
                    <br />
                    <br />
                    {computerList.map((val, key) => {
                        return (
                            <div className="computer card">
                                <div className="card-body text-left">
                                    <p className="card-text">PC Name: {val.cpname}</p>
                                    <p className="card-text">Case: {val.cpcase}</p>
                                    <p className="card-text">CPU: {val.cpcpu}</p>
                                    <p className="card-text">Mainboard: {val.cpmainboard}</p>
                                    <p className="card-text">Ram: {val.cpram}</p>
                                    <p className="card-text">HDD: {val.cphdd}</p>
                                    <p className="card-text">SSD: {val.cpssd}</p>
                                    <p className="card-text">Monitor: {val.cpmonitor}</p>
                                    <p className="card-text">VGA: {val.cpvga}</p>
                                    <p className="card-text">UPS: {val.cpups}</p>
                                    <p className="card-text">Printer: {val.cpprinter}</p>
                                    <p className="card-text">Mouse: {val.cpmouse}</p>
                                    <p className="card-text">Keyboard: {val.cpkeyboard}</p>
                                    <p className="card-text">OS: {val.cpos}</p>
                                    <p className="card-text">License: {val.cplicense}</p>
                                    <p className="card-text">Location: {val.cplocation}</p>
                                    <p className="card-text">User: {val.cpuser}</p>
                                    <p className="card-text">Etc: {val.cpetc}</p>
                                    <p className="card-text">Time: {val.cpadddate}</p>

                                    {/* <div className="d-flex">
                  <input
                    className="form-control"
                    style={{ width: "300px" }}
                    type="number"
                    placeholder="15000..."
                    onChange={(event) => {
                      setNewWage(event.target.value)
                    }}
                  /> 
                  <button className="btn btn-warning" onClick={() => {updateEmployeeWage(val.id)}}>Update</button>

                  <button className="btn btn-danger" onClick={() => {deleteEmployee(val.id)}}>Delete</button>
                  </div>*/}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}