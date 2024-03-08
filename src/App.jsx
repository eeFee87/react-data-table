import './App.css';
import DataTable from 'react-data-table-component';
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
  const data = [
    { firstName: 'Juan', lastName: 'Perez', age: 25 },
    { firstName: 'Maria', lastName: 'Gonzalez', age: 68 },
    { firstName: 'María', lastName: 'García', age: 30 },
    { firstName: 'Pedro', lastName: 'López', age: 40 },
    { firstName: 'Ana', lastName: 'Martínez', age: 22 },
    { firstName: 'Miguel', lastName: 'Hernández', age: 55 },
    { firstName: 'Laura', lastName: 'Fernández', age: 18 }
  ];

  return (
    <div>
      <DataTable
        title='Tabla de usuarios'
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={(data) => console.log(data)}
      />
    </div>
  );
}

export default App;
