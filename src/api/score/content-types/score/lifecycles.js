
module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
  },

  async afterCreate(event) {
    const { result, params } = event;

    const body = event.params.data
   // let markCount = 0;
    // console.log(JSON.parse(body.customerAnswer))
    // let cusAns = JSON.parse(body.customerAnswer);
    // cusAns.forEach( async (e,i) => {
    //   const qdata = await strapi.entityService.findMany('api::question.question', {
    //     filters: {
    //       id: e.qsid
    //     },
    //   });
    //   console.log(e.qsid,qdata)
    //   if(qdata[0].option_a_is_answer === e.Answer.cus_a_answer && qdata[0].option_b_is_answer === e.Answer.cus_b_answer && 
    //     qdata[0].option_c_is_answer === e.Answer.cus_c_answer && qdata[0].option_d_is_answer === e.Answer.cus_d_answer &&
    //     qdata[0].option_e_is_answer === e.Answer.cus_e_answer ){
    //       markCount += qdata[0].marks
    //     }

    //     if(cusAns.length -1 === i){
    //       const createAssReport = await strapi.entityService.create("api::assesmentreport.assesmentreport",{
    //         data : {
    //           customerid : body.customeremail,
    //           assesment_id : body.assesmentid,
    //           courseid : body.courseid,
    //           fullMarks : body.fullMarks,
    //           passMarks : body.passMarks, 
    //           marks : markCount,
    //           qsid : `${e.qsid}`
    //         }
    //       })
    //       console.log(createAssReport)

    //     }
      
    // });
   
  },
  async afterUpdate(event) {
    const { result, params } = event;

    const body = event.params.data;
    
  },
};
