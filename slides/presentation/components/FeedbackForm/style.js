import styled from 'styled-components';
export const FeedbackWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const FeedbackLayout = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FeedbackSubmitFinished = styled.div`

`;
export const SeparatorLine = styled.div`
    height: 0;
    border: 1px solid #C4C4C4;
    margin: 20px;
    display:inline-block;
`;
export const FeedbackHeader = styled.div`
    grid-area: header;
    font-size: 3vw;
    font-family: Avenir Next, sans-serif;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 10px;
`;
export const FeedbackSubHeader = styled.div`
    grid-area: sub-header;
    font-size: 2vw;
    font-family: Avenir Next, sans-serif;
    font-weight: 550;
`;
export const FeedbackRatingHeader = styled.div`
    grid-area: rating-header;
    margin: 0px 20px 10px 20px;
    font-size: 1.5vw;
    font-family: Avenir Next, sans-serif;
    font-weight: 500;
    text-align: left;
`;
export const FeedbackRating = styled.div`
    grid-area: rating;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const FeedbackFormHeader = styled.div`
    grid-area: comment-header;
    font-size: 1.5vw;
    font-family: Avenir Next, sans-serif;
    font-weight: 500;
    margin: 20px;
    text-align: left;
`;
export const FeedbackFormBody = styled.div`
    grid-area: comment;
    margin: 0 20px 20px 20px;
    form {
        width: 100%;
    }
    textarea {
        width: 100%;
        font-size: 2vw;
        border-radius: 5px;
    }
`;
export const FeedbackSubmit = styled.button`
    height: 5vw;
    color: white;
    background: ${props => props.backgroundColor};
    margin: 20px;
    border-radius: 10px;
    font-size: 3vw;
    -webkit-box-shadow: 2px 3px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 3px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 3px 2px 0px rgba(0,0,0,0.75);
    outline: none;
    border: none;
    :hover {
        background: #397039;
        
    }
    :active {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
        transform: translateY(2px);
    }
    
`;

export const Card = styled.div`
    width: 60vw;
    /* height: 60vh;  */
    -webkit-box-shadow: 1px 2px 9px 1px rgba(153,153,153,1);
    -moz-box-shadow: 1px 2px 9px 1px rgba(153,153,153,1);
    box-shadow: 1px 2px 9px 1px rgba(153,153,153,1);
`;