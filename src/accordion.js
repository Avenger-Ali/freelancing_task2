import React, { useState, useEffect } from 'react';
import './accordion.css';
import TableHeaders from './TableHeaders'
import TableContent from "./TableContent";

const Accordion = ({ title, tableData }) => {
    const [isActive, setIsActive] = useState(false);
    const [tableHeaders, setTableHeaders] = useState([]);

    useEffect(() => {
        const getTableHeaders = async () => {
            const tableHeaders = await
                tableData &&
                tableData.length &&
                tableData[0] &&
                tableData[0].categories &&
                tableData[0].categories.map((category) => category);
            setTableHeaders(tableHeaders);
            console.log("tableHeaders from effect==>", tableHeaders);
        }
        getTableHeaders();
    }, [tableData]);
    console.log("tableData from parent==>", tableData);
    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div className="title">{title}</div>
                <div className="accordion_icon">{isActive ? '-' : '+'}</div>
            </div>
            {isActive && (
                <div className="accordion-content">
                    <table>
                        <TableHeaders tableHeaders={tableHeaders} />
                        <TableContent tableData={tableData} />
                    </table>
                </div>
            )}
        </div>
    );
};

export default Accordion;