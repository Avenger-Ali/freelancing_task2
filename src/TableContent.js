import React from "react";

const TableContent = ({tableData}) => {

    let tableDataContent =
    tableData.length &&
    tableData.map((data, index) => {
      return (
          <tr key={index}>
            <td colSpan="5" key={index} className="table_data_style">
              {data.category_name}
              <span>
                <input
                  className="data_input"
                  value={data.category_count}
                  readOnly
                />
              </span>
            </td>
            <>
              {data.categories &&
                data.categories.map((category, index) => (
                  <td key={index} style={category.count ? {backgroundColor : "#0066cc"} : {backgroundColor:"cornflowerblue"}}>{category && category.count ? category.count : ""}</td>
                ))}
            </>
          </tr>
      );
    });

    return(
        <>
        <tbody>
        {tableDataContent}
        </tbody>
        </>
    )
}
export default TableContent;