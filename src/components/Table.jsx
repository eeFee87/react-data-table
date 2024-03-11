import DataTable from 'react-data-table-component';
import { useEffect, useMemo, useState } from 'react';
import { Loader } from './Loader';
import { getData } from '../data';

export function Table() {
  const columns = [
    {
      name: 'Nombre',
      selector: (row) => row.firstName
    },
    {
      name: 'Apellido',
      selector: (row) => row.lastName
    },
    {
      name: 'Edad',
      selector: (row) => row.age,
      sortable: true
    }
  ];

  const data = useMemo(() => getData(), []);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUsers(data);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [data]);

  function handleChange(e) {
    const filteredRecords = data.filter((record) => {
      return record.firstName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setUsers(filteredRecords);
  }

  return (
    <div>
      <input
        placeholder='buscar nombre...'
        type='text'
        onChange={handleChange}
      />
      <DataTable
        title='Tabla de usuarios'
        columns={columns}
        data={users}
        selectableRows
        onSelectedRowsChange={(data) => console.log(data)}
        pagination
        paginationPerPage={5}
        fixedHeader
        progressPending={loading}
        progressComponent={<Loader />}
      />
    </div>
  );
}
