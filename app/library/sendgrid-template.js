const Template = (subject,content) => '<div style="margin-right: auto;margin-left: auto;max-width: 400px;padding-top: 1.5rem;padding-bottom:1rem;">'+
'<div style="border-style:solid;border-width:thin;border-color:#dadce0;border-radius:8px;padding:40px 20px" align="center">'+
    '<img src="https://umkmku.s3.ap-southeast-1.amazonaws.com/img/logo-500x150-text-color-jadipro.png" width="120" aria-hidden="true" style="margin-bottom:16px" alt="zRoam" >'+
    '<div style="font-family:\'Google Sans\',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;border-bottom:thin solid #dadce0;color:rgba(0,0,0,0.87);line-height:32px;padding-bottom:24px;text-align:center;word-break:break-word">'+
        '<div style="font-size:24px">'+subject+'</div>'+
    '</div>'+
    '<div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:14px;color:rgba(0,0,0,0.87);line-height:20px;padding-top:20px;text-align:left">'
        +content+
    '</div>'+
'</div>'+
'<div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54);font-size:11px;line-height:18px;padding-top:12px;text-align:center">'+
'Anda menerima email ini sebagai pemberitahuan dari layanan akun JadiPro.'+
'<br>© 2024 JadiPro, 12510 Jakarta, Indonesia'+
'</div>'+
'</div>';
const WelcomeEmail = (emailaddress) => Template(
    'Selamat Datang di JadiPro',
    '<div>Welcome to <b>JadiPro</b>, your email address is '+emailaddress+'</div>'
    );
const subscribeEmail = (emailaddress,subject) => Template(
        subject,
        '<div>JadiPro menerima permintaan untuk subscribe email '+emailaddress+'<br /> Nantikan promo, fitur dan layanan terbaru ya. <br />Terimakasih.</div>'
        );



export {subscribeEmail,WelcomeEmail}