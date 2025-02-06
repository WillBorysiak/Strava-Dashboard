"use client";

import type { NextPage } from "next";

import useSWR from "swr";

import Dashboard from "../components/containers/Dashboard";
import Hero from "../components/dashboard/home/Hero";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import { fetcher } from "../helpers/core/fetcher";
import { IActivity } from "../interfaces/Activity.interface";

const Page: NextPage = () => {
  const { data } = useSWR<IActivity[]>("/api/strava", fetcher);

  return (
    <Layout>
      <Hero />
      <Dashboard data={data} />
      <Footer />
    </Layout>
  );
};

export default Page;
