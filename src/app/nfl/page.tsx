import Image from "next/image";
import { Container } from "../common/components/Container";
import { Header } from "../common/components/Header";
import { Divider } from "../common/components/Divider";
import { Navbar } from "../common/components/Navbar";
import { Main } from "../home/components/Main";
import { ScheduleMenu, ScheduleMenuButton } from "../common/components/ScheduleMenu";
import { ContentArea } from "../home/ContentArea";
import { Ads } from "../home/components/Ads";
import Card, { CardGameNflProp } from "../common/components/Card";
import gamesJsonNfl from "../api/api-NFL.json";


import Logo from "../../../public/images/LogoText.png";
import LogoNba from "../../../public/images/LogoNba.png";
import LogoNfl from "../../../public/images/LogoNfl.png";

export default function Nfl() {

      const games = gamesJsonNfl as CardGameNflProp[];
      
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
                        <a href="/nfl">
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
                            {games.map((g) => (
                                <Card
                                    key={`${g.dateUtc}-${g.homeTeam}-${g.awayTeam}`}
                                    dateUtc={g.dateUtc}
                                    location={"-"}
                                    broadcast={g.broadcast}
                                    homeTeam={g.homeTeam}
                                    awayTeam={g.awayTeam}
                                    homeTeamScore={g.homeTeamScore}
                                    awayTeamScore={g.awayTeamScore}
                                    homeTeamLogoSrc={""/**teamLogoSrc(g.homeTeam)**/}
                                    awayTeamLogoSrc={""/**teamLogoSrc(g.awayTeam)**/}
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