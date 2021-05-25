INSERT INTO Consultas (
      CNPJ,
      RazaoSocialLocadora,
      NomeCondutor,
      DataHora,
      CodigoUsuario,
      TipoConsulta,
      Valor,
      InseridoEm,
      EditadoEm 
)
VALUES (  
      @CNPJ,
      @RazaoSocialLocadora,
      @NomeCondutor,
      @DataHora,
      @CodigoUsuario,
      @TipoConsulta,
      @Valor,
      GETDATE(),
      NULL 
)

SELECT @@IDENTITY AS 'codigoConsulta';  