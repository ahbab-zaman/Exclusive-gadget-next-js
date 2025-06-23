import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { loginUser } from "@/app/actions/auth/loginUser";
import { collectionNameObj, dbConnect } from "./dbConnect";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter Your Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const user = await loginUser(credentials);
        console.log(user);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        const { providerAccountId, provider } = account;
        const { email: user_email, image, name } = user;
        const userCollection = await dbConnect(
          collectionNameObj.userCollection
        );
        const isExisted = await userCollection.findOne({ providerAccountId });
        if (!isExisted) {
          const payload = {
            providerAccountId,
            email: user_email,
            image,
            name,
            provider,
          };
          await userCollection.insertOne(payload);
        }
      }
      return true;
    },
  },
};
