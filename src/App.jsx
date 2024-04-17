import Table from './componentes/Tablas/tabla';
import './App.css'

//Income => ingresos

const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

const App = () => {
  // Calcula el promedio de ingreso neto utilizando la función reduce
  const ingresoTotal = netIncomes.reduce((acc, item) => acc + item.income, 0);
  const ingresoMedio = ingresoTotal / netIncomes.length;

  return (
    <div>
      <h1>Tabla de Ingresos Netos por Marca</h1>
      <Table netIncomes={netIncomes} /> {/* Utiliza el componente Table y pasa los ingresos netos como prop */}
      <p>Promedio de Ingreso Neto: {ingresoMedio.toFixed(2)}</p> {/* Muestra el promedio de ingreso neto */}
    </div>
  );
}

export default App;