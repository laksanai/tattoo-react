
function TattooItem(props) {

  const { tattoo } = props;

  return (
    <div>
        <div className='tattoo-item'>
                <img src= {tattoo.thumnailUrl} />
                <h4>{tattoo.title}</h4>
        </div>
    </div>
  )
}

export default TattooItem