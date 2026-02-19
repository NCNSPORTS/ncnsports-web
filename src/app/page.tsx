"use client"

import Logo from "../app/images/LogoText.png"
import LogoNba from "../app/images/LogoNba.png"
import LogoNfl from "../app/images/LogoNfl.png"
import LogoEx from "../app/images/LogoExplorar.png"
import { Container } from "./home/components/Container";
import { Header } from "./home/components/Header";
import { Navbar } from "./home/components/Navbar";
import { Ads } from "./home/components/Ads";
import { Card } from "./home/components/Card";
import { ScheduleMenu, ScheduleMenuButton } from "./home/components/ScheduleMenu";
import { Main } from "./home/components/Main";
import Image from "next/image";
import { Divider } from "./common/components/Divider";

export default function Page() {

  return (
    <>
      <Container>
        <Header>
           <Image className="mx-10 my-5" src={Logo} alt="Logo" width={220} />
        </Header>
        <Main>
          <Divider />
          <Navbar>
            <a href="/">
              Explorar
            </a>
            <a href="/nba">
              <Image className="mr-2" src={LogoNba} alt="NBA Logo" width={17} />
              NBA
            </a>
            <a href="">
              <Image className="mr-2" src={LogoNfl} alt="NFL Logo" width={30} />
              NFL
            </a>
          </Navbar>
          <Divider />
          <ScheduleMenu>
            <div></div>
            <div>
              <ScheduleMenuButton text="Hoje" />
              <ScheduleMenuButton text="Jogos ao vivo" />
              <ScheduleMenuButton text="Calendário" />
            </div>
            <span>Filtros avançados</span>
          </ScheduleMenu>
          <Divider/>
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