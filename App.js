import './App.css';
import Students from './Components/Students';

function App() {
  const sample = [
    { id: 1, fname: 'Harry', lname: 'Potter', grade: 8 },
    { id: 2, fname: 'Peter', lname: 'Parker', grade: 8 },
    { id: 3, fname: 'Ron', lname: 'Weaseley', grade: 8 },
    { id: 4, fname: 'Levi', lname: 'Akerman', grade: 8 },
    { id: 5, fname: 'Eren', lname: 'Yeager', grade: 8 }
  ];
  return (
    <div className="App">
      <div className='Students-component'>
        <Students
          id={sample[0].id} fname={sample[0].fname} lname={sample[0].lname} grade={sample[0].grade}
        />
        <Students
          id={sample[1].id} fname={sample[1].fname} lname={sample[1].lname} grade={sample[1].grade}
        />
        <Students
          id={sample[2].id} fname={sample[2].fname} lname={sample[2].lname} grade={sample[2].grade}
        />
        <Students
          id={sample[3].id} fname={sample[3].fname} lname={sample[3].lname} grade={sample[3].grade}
        />
      </div>
    </div>)
}

export default App;
