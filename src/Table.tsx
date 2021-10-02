import MaterialTable from "material-table";
import React from "react";

export const Table = () => {
    const columns = [
        {
            title: "Title",
            field: "title"
        },
        {
            title: "Author",
            field: "author"
        }
    ];

    const books = [
        { title: "Test Book", author: "Test Author"},
        { title: "Second Book", author: "Another Author"}
    ]

    return (
        <MaterialTable
            title="Theo's Books"
            columns={columns}
            data={books}
            options={{
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                },
                rowStyle: {
                    backgroundColor: '#EEE'
                },
                search: false,
                filtering: false,
                paging: false
            }}
        />
    )
}
