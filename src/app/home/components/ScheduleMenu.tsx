import styled from "styled-components";

export const ScheduleMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-bottom: 2px;
    border-top: 1px solid var(--color-hover);
    border-bottom: 1px solid var(--color-hover);
    background-color: var(--color-bg);

    > span {
        width: auto;
        text-wrap: nowrap;
        padding: 6px 25px;
        margin: 0px 4px 0px 0px;
        text-align: end;
        background-color: var(--color-card);
        border-radius: 4px;
        border: 1px solid var( --color-line);
    }

    > div {
        width: 100%; 
    }
`;

const ScheduleMenuButtonBase = styled.button`
    color: white;
    width: auto;
    height: auto;
    padding: 10px 10px;
`;

export function ScheduleMenuButton({ text }: NavbarButtonProps) {
    return <ScheduleMenuButtonBase>{text}</ScheduleMenuButtonBase>;
}

type NavbarButtonProps = {
    text: string;
}