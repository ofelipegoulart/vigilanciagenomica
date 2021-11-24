<Grid className={classes.mainPanel}>
<GridItem xs={12} sm={12} md={4}>
<CustomInput
  labelText="Usuário"
  id="float"
  formControlProps={{
    fullWidth: false
  }}/>
</GridItem>
<GridItem xs={12} sm={12} md={4}>
<CustomInput
  labelText="Senha"
  id="float"
  formControlProps={{
    fullWidth: false
  }}
/>
</GridItem>
<Button type="button" color="info" className={classes.submitButton}>Entrar</Button>
</Grid>
