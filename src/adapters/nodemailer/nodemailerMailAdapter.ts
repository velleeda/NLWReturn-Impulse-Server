import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "db46cfbd54f582",
    pass: "cb22b9eed36dd3",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Eduardo Veleda <eduardoveledavargas@gmail.com>",
      subject,
      html: body,
    });
  }
}
