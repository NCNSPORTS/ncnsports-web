"use client"

import Logo from "../app/images/LogoText.png"
import { Container } from "./home/components/Container";
import { Header } from "./home/components/Header";
import { Navbar } from "./home/components/Navbar";
import { Ads } from "./home/components/Ads";
import { Card } from "./home/components/Card";
import { ScheduleMenu, ScheduleMenuButton } from "./home/components/ScheduleMenu";
import { Main } from "./home/components/Main";
import Image from "next/image";

export default function Page() {

  return (
    <>
      <Container>
        <Header>
          <Image className="mx-10 my-5" src={Logo} alt="Logo" width={220} />
        </Header>
        <Main>
          <Navbar>
            <a href="/">Explorar</a>
            <a href="/nba">NBA</a>
            <a href="">NFL</a>
          </Navbar>
          <ScheduleMenu>
            <div></div>
            <div>
              <ScheduleMenuButton text="Hoje" />
              <ScheduleMenuButton text="Jogos ao vivo" />
              <ScheduleMenuButton text="Calendário" />
            </div>
            <span>Filtros avançados</span>
          </ScheduleMenu>
          <div>
            <Ads />
            <div>
              <Card />
            </div>
            <Ads />
          </div>
        </Main>
      </Container>
    </>
  );
}