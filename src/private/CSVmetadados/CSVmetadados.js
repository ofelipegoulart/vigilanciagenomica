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
import { toast } from "react-toastify";

import styles from "assets/jss/material-dashboard-react/privateViews/aboutStyle.js";
import typographyStyles from "assets/jss/material-dashboard-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);
const useTypographyStyles = makeStyles(typographyStyles);

export const CSVMetadados = ({onSuccess}) => {
  const classes = useStyles();
  const typographyClasses = useTypographyStyles();
  const [files, setFiles] = useState([]);

   const onInputChange = (e) => {
       setFiles(e.target.files)
   };

   const onSubmit = (e) => {
       e.preventDefault();

       const data = new FormData();

       for(let i = 0; i < files.length; i++) {
           data.append('file', files[i]);
       }

  axios.post('//localhost:4000/upload', data)
      .then((response) => {
        toast.success('Upload Success');
        onSuccess(response.data)
      })
      .catch((e) => {
        toast.error('Upload Error')
      })
  };

  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="success">
            <h1>Envio de Metadados</h1>
          </CardHeader>
          <CardBody>
            <p>No formulário abaixo, insira o o arquivo .csv contendo as amostras.</p>
            <p className={typographyClasses.dangerText}><b>Importante: é necessário que o arquivo esteja em formato CSV.</b></p>
            <p>Caso você utilize o Microsoft Excel ou o Google Sheets e não saiba como exportar uma planilha do tipo .CSV, siga o tutorial abaixo:</p>
            <p><b>Tutorial para Microsoft Excel e Google Sheets: </b><a href="https://rockcontent.com/br/blog/csv/" target="_blank">Link aqui</a></p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
        <div className={classes.submitArea}>
          <form method="post" className={classes.formArea} onSubmit={onSubmit}>
              <label>Enviar arquivo</label><br/>
                <input type="file" onChange={onInputChange} className={classes.buttons} accept=".csv"/><br/>
            <button className={classes.submitButton}>Enviar</button>
          </form>
          </div>
        </Card>
      </GridItem>
    </GridContainer>
    </div>
  );
};
