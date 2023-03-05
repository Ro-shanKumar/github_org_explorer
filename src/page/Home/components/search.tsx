import React from "react";
import {useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';
const SearchBox = () =>  {
  const [organisation, setorganisation] = useState("");
  const [nTopRepo, setnTopRepo] = useState("");
  const [oldestfork, setoldestFork] = useState("");
  const [message, setMessage] = useState("");
  return(
<form className="form form-main">
            <h1 className="form-head text-center">FETCH REPOS</h1>
            <Row>

            <Col md={4} className = "conatiner">
                <div><label className="form-label" >Organisation</label></div>
                <div><input type="text" value = {organisation} className ="form-input" onChange={(e) => setorganisation(e.target.value)} /></div>
            </Col>
            <Col md={4} className = "conatiner">
                <div><label className="form-label" >N (Top Repos)</label></div>
                <div><input type="text" value = {nTopRepo} className = "form-content" onChange={(e) => setnTopRepo(e.target.value) } /></div>
            </Col>
            <Col md={4} className = "conatiner">
                <div><label className="form-label" >M (Oldest Forks)</label></div>
                <div><input type="text" value = {oldestfork} className = "form-input" onChange={(e) => setoldestFork(e.target.value)}/></div>
            </Col>
            </Row>
            <div style={{ display: 'flex', marginTop: '5px' }}>
				<button type="submit" className='form-button'>
					Submit
				</button >
			</div>
      <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
);};
export default SearchBox;
