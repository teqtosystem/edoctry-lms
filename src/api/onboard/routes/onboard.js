'use strict';

// const { createCoreRouter } = require('@strapi/strapi').factories;

// const router = createCoreRouter("api::onboard.onboard" , [

// ])

module.exports = {
    routes : [
        {
            method:"POST",
            path:"/onboard/payment",
            handler:"onboard.createPaymentOrder"
        },{
            method: "POST",
            path: "/onboard/payment/verify",
            handler : "onboard.verifyPayment"
        }
    ]
}