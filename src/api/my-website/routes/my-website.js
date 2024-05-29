'use strict';

/**
 * my-website router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::my-website.my-website');
