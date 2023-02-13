
import { useQuery } from 'react-query'

// This example uses React Query. 
// Rect Query requires a QueryClientProvider. 
// See index.js to see where this is setup. 

function Rhymes() {
  // Load /sfpopos using useQuery
  const { isLoading, error, data } = useQuery('data', () => {
    return fetch('/rhymes').then(res => res.json())
  });
  // isLoading: a boolean true if loading
  // error: an error object with a message property
  // data: the data loaded from the server
  if (isLoading){return <h1>Loading...</h1>}
  if (error){return <h1>Error, {error.message}</h1>}
  console.log(data)
  return (
      <div className="Rhymes">
        <h2>{data.message}</h2>
        <ul>
          {/* If isLoading is false map the data to components */}
          { isLoading ? "Loading..." : data.data.map(item => <li>{item}</li>) }
          {/* 
          The sfpopos data has more properties
          Challenge: try and render another property here like the address 
          Challenge: Create a component and render that in place of the li 
          */}
        </ul>
      </div>
  );
}

export default Rhymes;
