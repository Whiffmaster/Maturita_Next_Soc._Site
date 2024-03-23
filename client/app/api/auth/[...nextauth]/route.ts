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
import {log} from "next/dist/server/typescript/utils";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}


  const handler = NextAuth({
    adapter: MongoDBAdapter(clientPromise) as Adapter,
    pages: {
      signIn: '/auth/signin'
    },
    callbacks: {
      session: ({session, user}) => ({
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      }),
    },
    providers: [
      CredentialsProvider({
        credentials: {
          email: {label: "email", type: "text"},
          password: {label: "password", type: "password"},
        },
        async authorize(credentials, req) {
          const user = await User.findOne({email: credentials.email});
          log(user)
          if (user) {
            const isMatch = await bcrypt.compare(credentials.password, user.password);
            if (isMatch) {
              return user
            }
          }
          return {ok: false, error: "Invalid credentials"};
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