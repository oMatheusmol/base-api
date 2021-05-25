INSERT INTO Consultas (
      CNPJ,
      RazaoSocialLocadora,
      NomeCondutor,
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
      @CodigoUsuario,
      @TipoConsulta,
      @Valor,
      GETDATE(),
      NULL 
)

SELECT @@IDENTITY AS 'codigoConsulta';  