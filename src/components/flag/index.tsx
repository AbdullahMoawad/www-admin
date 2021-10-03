const Flag = ({size = 'lg', code}) => {
  return (
    <span className={`text-${size} flag-icon flag-icon-${code}`}/>
  )
}

export default Flag
