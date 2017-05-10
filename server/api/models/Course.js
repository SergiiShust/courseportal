/**
 * Course.js
 *
 * @description :: This model represent learning course in our portal.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: {type: 'text', required: true},
    date: {type: 'date', required: true},
    duration: {type: 'integer', required: true},
    topRated: {type: 'boolean', required: true},
    authors: {collection: 'Author'}
  }
};

