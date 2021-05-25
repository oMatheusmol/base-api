CREATE TABLE Consultas  (
      CogidoConsulta INT IDENTITY(1,1) PRIMARY KEY,
      CNPJ VARCHAR(14) NOT NULL UNIQUE,
      RazaoSocialLocadora VARCHAR(45) NOT NULL UNIQUE,
      NomeCondutor VARCHAR(45),
      DataHora  DATETIME,
      CodigoUsuario INT FOREIGN KEY REFERENCES Usuario(CodigoUsuario),
      TipoConsulta CHAR(1),
      Valor MONEY,
      InseridoEm DATETIME,
      EditadoEm DATETIME      
)
GO