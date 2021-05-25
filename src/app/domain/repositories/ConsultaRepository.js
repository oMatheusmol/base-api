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
        .input('DataHora', mssql.DateTime, consulta.dataHora)
        .input('CodigoUsuario', mssql.Int, consulta.codigoUsuario)
        .input('TipoConsulta', mssql.Char, consulta.tipoConsulta)
        .input('Valor', mssql.Money, consulta.valor)

        .query(sqlText);
        return result.recordset[0].codigoConsulta; 

    } catch (err) {
      this.handleQueryError(err);
    }
  } 

  /**
   * Recupera os dados do usuário
   * 
   * @param {number} id 
   */
  // async getById(id) {

  //   try {

  //     const sqlText = this.getSqlText('../sqls/usuario_get.sql') + ' WHERE UsuarioID = @UsuarioID'
  //     const conn = await this.openConnection();
  //     const result = await conn.request()
  //       .input('UsuarioID', mssql.Int, id)
  //       .query(sqlText);

  //     if (this.isResultEmpty(result)) {
  //       return null;
  //     }
  //     const user = this.toFirst(result, UserModel);
  //     return user;
  //   } catch (err) {
  //     this.handleQueryError(err);
  //   }
  // }

  // /**
  //  * Recupera os dados do usuário
  //  */


  // async get(params) {

  //   try {

  //     const sqlText = this.getSqlText('../sqls/usuario_get.sql') + ' WHERE Nome LIKE @Nome ';
  //     const conn = await this.openConnection();
  //     const result = await conn.request()
  //       .input('NomeUsuario', mssql.VarChar(45), params.nomeUsuario + '%')
  //       .query(sqlText);

  //     return this.getResponse(result, UserModel);

  //   } catch (err) {
  //     this.handleError(err);
  //   }
  // }

}