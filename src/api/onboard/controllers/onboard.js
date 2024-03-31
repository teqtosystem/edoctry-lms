"use strict";
const RazorPay = require("razorpay");
const paymentConfig = require("../../../../config/payment");
const crypto = require("crypto");



module.exports = {
    async createPaymentOrder(ctx,next){
        const {amount,currency} = ctx.request.body
        let instance = new RazorPay({
            key_id:paymentConfig.PAYMENT_KEY_ID,
            key_secret:paymentConfig.PAYMENT_SECRECT
        })
    await instance.orders.create({
            amount: amount * 100,
            currency: currency,
            receipt: crypto.randomBytes(10).toString("hex"),
            }).then(res=>{
                console.log(res)
                ctx.body = {
                    statusCode : 200,
                    success:true,
                    data: res
                }
            }).catch(err=>{
                console.log(err);
                ctx.body = {
                    statusCode : 500,
                    message:"internal Server Error"
                }
            })
        

    },
    async verifyPayment(ctx,next){
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        }  = ctx.request.body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto.createHmac("sha256", paymentConfig.PAYMENT_SECRECT).update(sign.toString()).digest("hex")

        if(razorpay_signature === expectedSign){
            ctx.body = {
                statusCode : 200,
                message: "Payment verified successfully"
            }
        }else{
            ctx.body = {
                statusCode : 400,
                message: "Invalid signature sent!"
            }
        }
    }
}