const Results = (props) => {
  return (
    <div>
      {props.results.country && <div>{props.results.country}</div>}
    </div>
    );
};


export default Results;