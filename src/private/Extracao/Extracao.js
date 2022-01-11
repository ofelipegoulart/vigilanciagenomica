/*eslint-disable*/
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/privateViews/extracaoStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);


  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/searchinfo/?name=${name}`);

      const parseResponse = await response.json();

      setUsers(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={{marginTop:"-40px"}}>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="success">
            <h1>Registro de Extração</h1>
          </CardHeader>
          <CardBody>
            <p>No formulário abaixo, insira o arquivo .csv contendo as amostras. Caso você utilize o Microsoft Excel ou o Google Sheets e não saiba como exportar uma planilha do tipo .CSV, siga o tutorial abaixo:</p>
            <p><b>Tutorial para Microsoft Excel e Google Sheets: </b><a href="https://rockcontent.com/br/blog/csv/" target="_blank">Link aqui</a></p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    <GridContainer>
    <div className={classes.searchSection}>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          placeholder="Código do Sequenciamento"
          className={classes.inputSearch}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className={classes.submitButton}>Pesquisar</button>
      </form>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Código do Sequenciamento</th>
            <th>Código da Amostra</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.user_id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && <p style={{textAlign:"center",fontWeight:"bold",marginTop:"45px"}}>Sem resultado</p>}
    </div>
    </GridContainer>
    </div>
  );
}
