'use strict';

/**
 * my-website service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-website.my-website');
