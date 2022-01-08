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
import axios from "axios";

import styles from "assets/jss/material-dashboard-react/privateViews/sequenciamentoStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  const [campos, setCampos] = useState({
    nome: '',
    email:'',
    mensagem:''
  });

  function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));
    axios.post('http://localhost:4000/send',
              formData,
              {
                headers: {
                  "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                }
              })
      .then(response => { console.log(response.data);
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
    send(campos);
  }

  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="success">
            <h1>Registro de Sequenciamento</h1>
          </CardHeader>
          <CardBody>
            <p>No formulário abaixo, insira seu nome, um e-mail para contato e o link da amostra sequenciada a ser enviada.</p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    <GridContainer>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Seu nome" className={classes.inputSeq} onChange={handleInputChange}/><br />

          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" placeholder="Seu e-mail" className={classes.inputSeq} onChange={handleInputChange} /><br />

          <label htmlFor="mensagem">Link</label>
          <textarea id="mensagem" name="mensagem" placeholder="Link do Sequenciamento" className={classes.inputTextSeq} onChange={handleInputChange}></textarea><br />

          <input type="submit" value="Enviar" className={classes.submitButton} /><br />
        </form>
    </div>
    </GridContainer>
    </div>
  );
}
