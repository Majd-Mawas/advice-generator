import React from 'react'

const Advice = () => {
  
  const [data,setData] = React.useState({slip: {
    id:117,
    advice:"A common regret in life is wishing one hadn't worked so hard."}})
  const [newAdvice,setNewAdvice] = React.useState(false)

  React.useEffect(()=>{

    if(newAdvice){
      setNewAdvice(false)
      fetch('https://api.adviceslip.com/advice')
      .then((result) => result.json())
      .then((actualData) => {
      setData(actualData);
      })
    }

  },[newAdvice])

  function handleClick(){
    setNewAdvice(true)
  }

  return (
    <>
    <div className='advice-id'>ADVICE #{data.slip.id}</div>
    <div className='advice-text'>	&ldquo;{data.slip.advice}&rdquo;</div>
    <div className='line'></div>
    <button className='new-advice' onClick={handleClick}></button>
    </>
  )
}

export default Advice