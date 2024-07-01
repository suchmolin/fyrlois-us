import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_QpfqvXFg_7FY6LdA53EXGM5T22kSoFyCE");

export async function POST(req, res) {
  const data = await req.json();
  console.log(data);

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "suchmolin11@gmail.com",
    subject: "CONTACT-US from Fyr Lois Academy Online",
    html: `
        <h1>Hola, mi nombre es: ${data.fullname}</h1>
        <p>Correo electrónico: ${data.email}</p>
        <p>Numero de telefono: ${data.tellphone}</p>
        <p>Motivo de aprender ingles: ${data.porqueAprender}</p>
        <p>Como nos conociste: ${data.comoNosConociste}</p>
        <p>Has estudiado ingles antes: ${data.hasEstudiadoAntes}</p>

    `,
  });

  return NextResponse.json({ message: "Email sent" });
}
