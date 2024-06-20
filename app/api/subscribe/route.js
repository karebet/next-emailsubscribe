import { NextRequest,NextResponse } from 'next/server';
import monggoDB from "../../library/mongodb";
import {sendEmail} from "../../library/sendgrid";
import {subscribeEmail,WelcomeEmail} from "../../library/sendgrid-template";

export async function GET() {
    console.log("Test Get");
    //sendEmail({email:"robeth@iziroam.com",subject:"Test ABC",message:"message"});
    return NextResponse.json({ message:'Terimakasih'});
}


export async function POST(request) {
    const data  = await request.formData();
    var email = data.get('email');
    console.log("POST");
    console.log(email);

    try {
        console.log('Try subscribe');
        const cd = await monggoDB.db(process.env.MONGODB_DB).collection("subscriber");
        const cdupdate = cd.updateOne({"email":email},{ $set: {email:email}},{upsert: true});
        cdupdate.then((response) => {
            console.log('response subscribe');
            if(response.matchedCount==0){
                console.log('emailing to subscriber');
                const subject = 'Subscribe newsletter di JadiPro';
                const outpulemail = subscribeEmail(email,subject);
                sendEmail({email:email,subject:subject,message:outpulemail});
            }
        });
        return await NextResponse.json({ message:'Terimakasih, email Anda sudah terdaftar',email:email,update:cdupdate.matchedCount});
    } catch (error) {
        console.log(error);
        return await NextResponse.json({ message:'Gagal menyimpan data',email:email},
        {
          status: 500,
        });
    }
    
}