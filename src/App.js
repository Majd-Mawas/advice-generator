import './index.css';
import React from 'react';

function App() {
  const [data,setData] = React.useState()
  const [newAdvice,setNewAdvice] = React.useState(true)
  const [error,setError] = React.useState()
  const [loading,setLoading] = React.useState(true)
  
  /* Fetching data from the API and setting the data to the state. */
  React.useEffect(()=>{
    if(newAdvice){
    setNewAdvice(false)
    fetch('https://api.adviceslip.com/advice')
    .then((result) => result.json())
    .then((actualData) => {
      setData(actualData);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
  }
  },[newAdvice])

  function handleClick(){
    if(error&&loading)
    return
    setNewAdvice(true)
  }
  
  if(data===undefined)
  return

  return (
    <div className="App">
      <main className='advice-main'>
        {/* {console.log("advice")} */}
        <div className='advice-id'>ADVICE #{data.slip.id}</div>
        <div className='advice-text'>	&ldquo;{data.slip.advice}&rdquo;</div>
        <div className='line'></div>
        <button className='new-advice' onClick={handleClick}></button>
      </main>
    </div>
  );
}

export default App;
