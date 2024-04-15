import NextAuth, {DefaultSession} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Discord from "next-auth/providers/discord";
import Github from "next-auth/providers/github";
import clientPromise from "../../../../lib/mongoClient";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import {Adapter} from "next-auth/adapters";
import User from "../../../../models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import {adapter} from "next/dist/server/web/adapter";
import {sendMail} from "../../../utils/nodemailer";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      emailVerified: boolean;
    } & DefaultSession["user"];
  }
}


const handler = NextAuth({
  adapter: <Adapter>MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/auth/signin'
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: async ({session, token, user}) => {

      if (session?.user) session.user.id = token.sub;
      return ({
        ...session,
        user: {
          ...session.user,
          id: user?.id || token.id,
        },
      })
    },
    jwt: async ({token, user}) => {
      if (user) {
        token.id = user.id;
      }
      /*
      //@ts-ignore
      if(user && !user.emailVerified){
        await sendMail(user.email, "Welcome to the site", "Welcome to the site").then((r) => {
          console.log(r)
        })
      }
       */

      return token;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {label: "email", type: "text"},
        password: {label: "password", type: "password"},
      },
      authorize: async (credentials) => {
        await mongoose.connect(process.env.MONGODB_URI);
        const user = await User.findOne({email: credentials.email}).exec();
        if (user) {
          const isMatch = await bcrypt.compare(credentials.password, user.password);
          if (isMatch) {
            const userSession = {id: user._id.toString(), name: user.name, email: user.email, image: user.image, emailVerified:user.emailVerified}
            return userSession
          }
        }
        throw new Error("Invalid credentials");
      },
    }),
    Discord({
      clientId: "1214646824049311805",
      clientSecret: "CdHkv4zVynHgIJczBLR6bzPItCFLbwc5",
      authorization: "https://discord.com/oauth2/authorize?client_id=1214646824049311805&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=identify+email"
    }),
  ],
});

export {handler as GET, handler as POST};