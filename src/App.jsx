import './App.css';
import DataTable from 'react-data-table-component';
import { useEffect, useMemo, useState } from 'react';
function App() {
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

  function getData() {
    return [
      { firstName: 'Juan', lastName: 'Perez', age: 25 },
      { firstName: 'Maria', lastName: 'Gonzalez', age: 68 },
      { firstName: 'María', lastName: 'García', age: 30 },
      { firstName: 'Pedro', lastName: 'López', age: 40 },
      { firstName: 'Ana', lastName: 'Martínez', age: 22 },
      { firstName: 'Miguel', lastName: 'Hernández', age: 55 },
      { firstName: 'Laura', lastName: 'Fernández', age: 18 },
      { firstName: 'Laura', lastName: 'Garcia', age: 18 },
      { firstName: 'Roberta', lastName: 'Tudela', age: 18 },
      { firstName: 'Alejandra', lastName: 'Sanchez', age: 18 },
      { firstName: 'Jorge', lastName: 'Cororo', age: 18 },
      { firstName: 'Luis', lastName: 'Fernández', age: 18 },
      { firstName: 'Juan', lastName: 'Perez', age: 25 },
      { firstName: 'Maria', lastName: 'Gonzalez', age: 68 },
      { firstName: 'María', lastName: 'García', age: 30 },
      { firstName: 'Pedro', lastName: 'López', age: 40 },
      { firstName: 'Ana', lastName: 'Martínez', age: 22 },
      { firstName: 'Miguel', lastName: 'Hernández', age: 55 },
      { firstName: 'Laura', lastName: 'Fernández', age: 18 },
      { firstName: 'Laura', lastName: 'Garcia', age: 18 },
      { firstName: 'Roberta', lastName: 'Tudela', age: 18 },
      { firstName: 'Alejandra', lastName: 'Sanchez', age: 18 },
      { firstName: 'Jorge', lastName: 'Cororo', age: 18 },
      { firstName: 'Luis', lastName: 'Fernández', age: 18 }
    ];
  }
  const data = useMemo(() => getData(), []);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUsers(data);
      setLoading(false);
    }, 1500);
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
  function Loader() {
    return (
      <div>
        <h1>Cargando</h1>
        <h3>spinner</h3>
      </div>
    );
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

export default App;
