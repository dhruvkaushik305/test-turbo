import NextAuth from "next-auth";
import Credentails from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentails({
      credentials: {
        email: { lable: "Email", type: "email" },
      },
      async authorize(credentials: any) {
        console.log("authorize says ", credentials);
        return null;
      },
    }),
  ],
});
