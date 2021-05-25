const BaseController = require('./baseController');
const ConsultaRepository = require('../domain/repositories/ConsultaRepository');
const repository = new ConsultaRepository();

class consultaController extends BaseController {
  constructor() {
    super();
  }

  async create(req, res) {
    try {
      const result = await repository.create(req.body);
      console.log(result);
      super.sendSuccess(res, result);
    } catch (err) {
      super.sendError(res, err);
    }
   }
  
}

module.exports = new consultaController();