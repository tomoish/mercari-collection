import Layout from "@/components/layout/Layout";
import UserLink from "@/components/user/UserLink";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="home">
      <UserLink userId={0}>user 1</UserLink>
      <UserLink userId={1}>user 2</UserLink>
    </Layout>
  );
}
