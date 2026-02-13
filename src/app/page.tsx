"use client";

import { Main } from "next/document";
import { Container } from "./home/components/Container";
import { Header } from "./home/components/Header";
import { Navbar } from "./home/components/Navbar";

export function Page() {

  return (
    <>
      <Container>
        <Header></Header>
        <Navbar></Navbar>
        <Main>
          <Ads/>
          <div>
            <Card/>
          </div>
          <Ads/>
        </Main>
      </Container>
    </>
  );
}