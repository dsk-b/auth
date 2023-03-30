import NextAuth, { TokenSet } from 'next-auth';
import type { NextAuthOptions } from 'next-auth'
export const authOptions:NextAuthOptions = {
  providers: [
    {
      id: 'auth0',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.SECRET_ID,
      // issuer:"https://sso-uat.techigai.io",
      name: "auth0",
      type: "oauth",
      wellKnown: process.env.WELLKNOWN,
      authorization: { params: { scope: 'openid email profile' } },
      checks: ['pkce', 'state'],
      idToken: true,
      profile(profile: any, tokens: TokenSet) {
        return {
          id: profile.sub,
          name: profile.sub,
          email: profile.sub,
        };
      }
    }
  ],
};
export default NextAuth(authOptions);


