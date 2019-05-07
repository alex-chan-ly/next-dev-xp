import styled from 'styled-components';

export const HomePageWrapper = styled.div`
    display: grid;
    margin-top: 40px;
    height: 800px;
    @media only screen and (max-width: 640px) {
        height: 140vw;
    }
    overflow: scroll;
    grid-template-areas:
        'header'
        'theory-header'
        'theory-cards'
        'workshops-header'
        'workshops-cards';
    grid-template-rows: 100px 50px 0.3fr 50px 0.3fr;
`;
export const Header = styled.div`
    grid-area: header;
    font-size: 50px;
    font-family: Avenir Next, sans-serif;
    font-weight: bold;
`;
export const TheoryWrapper = styled.div`
    grid-area: theory-cards;
    display: flex;
    flex-direction: start;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`;
export const TheoryHeader = styled.div`
    grid-area: theory-header;
    font-family: Avenir Next, sans-serif;
    font-size: 30px;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-weight: bold;
`;
export const TheoryCard = styled.div`
    display: flex;
    width: 220px;
    height: 50px;
    justify-content: center;
    align-self: center;
    align-items: center;
    background: #c0c0ff;
    margin: 10px;
    border-radius: 5px;
    text-decoration: none;
    a {
        text-decoration: none;
        color: black;
        font-family: Avenir Next, sans-serif;
    }
`;
export const WorkshopHeader = styled.div`
    grid-area: workshops-header;
    font-family: Avenir Next, sans-serif;
    font-size: 30px;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-weight: bold;
`;
export const WorkshopWrapper = styled.div`
    grid-area: workshops-cards;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
export const WorkshopCard = styled.div`
    display: flex;
    width: 300px;
    height: 100px;
    justify-content: center;
    align-self: center;
    align-items: center;
    background: #c0c0ff;
    margin: 10px;
    border-radius: 5px;
    text-decoration: none;
    a {
        text-decoration: none;
        color: black;
        font-family: Avenir Next, sans-serif;
    }
`;