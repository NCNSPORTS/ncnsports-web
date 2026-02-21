'use client';

import Image from 'next/image';
import styled from 'styled-components';

export type CardProps = {
  dateUtc: string;
  location: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamScore: number | null;
  awayTeamScore: number | null;
  broadcast: string;
  homeTeamLogoSrc: string;
  awayTeamLogoSrc: string;
};

function parseFormatedDateUtc(dateUtc: string) {
  return new Date(dateUtc.replace(' ', 'T'));
}

export default function Card(props: CardProps) {
  const d = parseFormatedDateUtc(props.dateUtc);
  const dateText = d.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

  return (
    <Wrap>
      <Top>
        <DateText>{dateText}</DateText>
        <Broadcast title={props.broadcast}>{props.broadcast}</Broadcast>
      </Top>

      <Teams>
        <TeamRow>
          <Left>
            <Logo>
              <Image src={props.awayTeamLogoSrc} alt={props.awayTeam} fill sizes="22px"/>
            </Logo>
            <TeamName title={props.awayTeam}>{props.awayTeam}</TeamName>
          </Left>
          <Score>{props.awayTeamScore ?? '-'}</Score>
        </TeamRow>

        <Divider />

        <TeamRow>
          <Left>
            <Logo>
              <Image src={props.homeTeamLogoSrc} alt={props.homeTeam} fill sizes="22px" />
            </Logo>
            <TeamName title={props.homeTeam}>{props.homeTeam}</TeamName>
          </Left>
          <Score>{props.homeTeamScore ?? '-'}</Score>
        </TeamRow>
      </Teams>

      <Bottom>
        <Location title={props.location}>{props.location}</Location>
      </Bottom>
    </Wrap>
  );
}

const Wrap = styled.article`
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.04);
  padding: 14px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: baseline;
  margin-bottom: 10px;
`;

const DateText = styled.span`
  opacity: .9;
`;

const Broadcast = styled.span`
  opacity: .7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 55%;
`;

const Teams = styled.div`
  display: grid;
  gap: 10px;
`;

const TeamRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
`;

const Logo = styled.div`
  width: 22px;
  height: 22px;
  position: relative;
  flex: 0 0 auto;
`;

const TeamName = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Score = styled.span`
  font-weight: 700;
  opacity: .95;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255,255,255,.08);
`;

const Bottom = styled.div`
  margin-top: 12px;
  opacity: .65;
`;

const Location = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;