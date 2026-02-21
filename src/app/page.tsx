"use client";

import Logo from "../../public/images/LogoText.png";
import LogoNba from "../../public/images/LogoNba.png";
import LogoNfl from "../../public/images/LogoNfl.png";

import { Container } from "./home/components/Container";
import { Header } from "./home/components/Header";
import { Navbar } from "./home/components/Navbar";
import { Ads } from "./home/components/Ads";
import { ScheduleMenu, ScheduleMenuButton } from "./home/components/ScheduleMenu";
import { Main } from "./home/components/Main";
import Image from "next/image";
import { Divider } from "./common/components/Divider";
import Card from "./common/components/Card";

import gamesJson from "./api/api.json";
import { ContentArea } from "./home/ContentArea";

type CardGameProp = {
  DateUtc: string;
  Location: string;
  HomeTeam: string;
  AwayTeam: string;
  HomeTeamScore: number | null;
  AwayTeamScore: number | null;
  Broadcast: string;
};

export default function Page() {
  const games = gamesJson as CardGameProp[];
  
  const parseFormatedDateUtc = (dateUtc: string) => new Date(dateUtc.replace(" ", "T"));

  const lastWordTeamLogos = (teamName: string) => {
    const parts = teamName.trim().split(/\s+/);
    return parts[parts.length - 1].toLowerCase();
  };

  const teamLogoSrc = (teamName: string) => {
    const file = `${lastWordTeamLogos(teamName)}TeamLogo.png`;
    const src = `/images/nbaTeamsLogo/${file}`;
    return src;
  };

  const getWeekRange = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    
    return { startOfWeek, endOfWeek };
  };

  const { startOfWeek, endOfWeek } = getWeekRange();

  const weekGames = games
    .filter((g) => {
      const d = parseFormatedDateUtc(g.DateUtc);
      return d >= startOfWeek && d <= endOfWeek;
    })
    .sort((a, b) => +parseFormatedDateUtc(a.DateUtc) - +parseFormatedDateUtc(b.DateUtc));

  return (
    <>
      <Container>
        <Header>
          <Image className="mx-10 my-5" src={Logo} alt="Logo" width={220} />
        </Header>
        <Main>
          <Divider />
          <Navbar>
            <a href="/">Explorar</a>
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
          <Divider />
          <ContentArea>
            <Ads />
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(2, 1fr)" }}>
              {weekGames.map((g) => (
                <Card
                  key={`${g.DateUtc}-${g.HomeTeam}-${g.AwayTeam}`}
                  dateUtc={g.DateUtc}
                  location={g.Location}
                  broadcast={g.Broadcast}
                  homeTeam={g.HomeTeam}
                  awayTeam={g.AwayTeam}
                  homeTeamScore={g.HomeTeamScore}
                  awayTeamScore={g.AwayTeamScore}
                  homeTeamLogoSrc={teamLogoSrc(g.HomeTeam)}
                  awayTeamLogoSrc={teamLogoSrc(g.AwayTeam)}
                />
              ))}
            </div>
            <Ads />
          </ContentArea>
        </Main>
      </Container>
    </>
  );
}