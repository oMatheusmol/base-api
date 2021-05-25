'use strict';
const mssql = require('mssql');

const BaseRepository = require('./baseRepository');
const _ = require('lodash');
module.exports = class ConsultaRepository extends BaseRepository {

  constructor() {
    super();
  }


  async create (consulta) { 
    try {
      
      const sqlText = this.getSqlText('../sqls/insertConsulta.sql')
      const conn = await this.openConnection();
      const result = await conn.request()
        .input('CNPJ', mssql.VarChar, consulta.cnpj)
        .input('RazaoSocialLocadora', mssql.VarChar, consulta.razaoSocialLocadora)
        .input('NomeCondutor', mssql.VarChar, consulta.nomeCondutor)
        .input('CodigoUsuario', mssql.Int, consulta.codigoUsuario)
        .input('TipoConsulta', mssql.Char, consulta.tipoConsulta)
        .input('Valor', mssql.Money, consulta.valor)

        .query(sqlText); 
   
        return result.recordset[0].codigoConsulta; 

    } catch (err) {
      this.handleQueryError(err)
    }
  } 

}