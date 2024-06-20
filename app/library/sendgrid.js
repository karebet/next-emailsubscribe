const sendEmail = async ({ email,subject,message }) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    var return_asendgrid= sgMail
    .send({
      to: email,
      from: {
        email: process.env.SENDGRID_SENDER_EMAIL,
        name: process.env.SENDGRID_SENDER_NAME
      },
      subject: subject,
      html: message,
      })
    .then((response) => {
      console.log('Email sent')
      console.log(response[0].statusCode)
      console.log(response[0].headers)
      return response;
    })
    .catch((error) => {
        console.error(error.response.body.errors[0].message)
    });
    return return_asendgrid;
}
  
export { sendEmail };
  