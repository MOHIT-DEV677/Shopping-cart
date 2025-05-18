import { useEffect, useState } from 'react';
import './App.css'; // Import CSS file

function App() {
  const [data, setData] = useState([]);
  const [curp, setCurp] = useState(1);
  const [ppp] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const lasp = curp * ppp;
  const firp = lasp - ppp;
  const curpos = data.slice(firp, lasp);
  const totp = Math.ceil(data.length / ppp);

  const paginate = (page) => setCurp(page);

  return (
    <div className="container">
      <h2>Simple Pagination</h2>
      <div className="posts">
        {curpos.map((item) => (
          <p key={item.id} className="post">{item.id} - {item.title}</p>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => paginate(1)} disabled={curp === 1}>First</button>
        <button onClick={() => paginate(curp - 1)} disabled={curp === 1}>Previous</button>
        
        {new Array(totp).fill(0).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={curp === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={() => paginate(curp + 1)} disabled={curp === totp}>Next</button>
        <button onClick={() => paginate(totp)} disabled={curp === totp}>Last</button>
      </div>
    </div>
  );
}

export default App;
