/**
 * Calendar.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	descricao: {
  		type: 'string',
  		required: true
  	},
  	dtinicio: {
  		type: 'string',
  		required: true
  	},
  	dtfim: {
  		type: 'string',
  		required: true
  	},
  	categoria: {
  		model: 'categoria'
  	},
  	circuito: {
  		model: 'circuito'
  	}
  }
};

