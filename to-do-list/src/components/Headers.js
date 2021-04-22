const Headers = (props) => {
    return (
      <div className="header">
          { props.header === 'Tasks App' && <h1 className="mainTitle">{props.header}</h1>}
          { props.header !== 'Tasks App' && <h1>{props.header}</h1>}
          { props.subHeader === 'Powered By React' && <p className="mainSubHeader">{props.subHeader}</p> }
      </div>  
    )
}

export default Headers