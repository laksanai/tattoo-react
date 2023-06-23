
function TattooItem(props) {

  const { tattoo, onTattooClick } = props;

  return (
    <div>
        <div className='tattoo-item'>
                <img src= {tattoo.thumnailUrl} onClick={() => {onTattooClick(tattoo)}}/>
                <h4>{tattoo.title}</h4>
        </div>
    </div>
  )
}

export default TattooItem