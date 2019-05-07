import React from 'react';
import {
  Slide
  } from 'spectacle';
import ReactStars from 'react-stars'
import { Line } from 'rc-progress';
import firebase from './firebase';
import { 
    FeedbackWrapper,
    Card,
    FeedbackLayout,
    SeparatorLine,
    FeedbackRating,
    FeedbackHeader,
    FeedbackSubHeader,
    FeedbackRatingHeader, 
    FeedbackFormHeader,
    FeedbackFormBody,
    FeedbackSubmit,
    FeedbackSubmitFinished
} from './style';

// STATES
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';
const READY = 'READY'
class FeedbackForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 5,
            comment: '',
            loading: false,
            status: READY,
            progress: 50
        }
    }
    componentWillMount() {
        this.db = firebase.firestore()
    }
    handleRatingChanged(value) {
        this.setState({rating: value})
    }
    handleFormChange(event) {
        this.setState({comment: event.target.value});
    }
    handleSubmit() {
       this.setState({loading: true, status: LOADING})
       this.progessCheckInterval = setInterval(() => this.progressCheck(), 300)
       this.db.collection(this.props.section).add({
            section: this.props.type,
            rating: this.state.rating,
            comment: this.state.comment
       }).then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            setTimeout(() => 
            this.setState({ loading: false, status: SUCCESS}), 300)
            clearInterval(this.progessCheckInterval)
       }).catch( error => {
            console.error("Error adding document: ", error);
            this.setState({ loading: false, status: ERROR })
            clearInterval(this.progessCheckInterval)
       })
    }
    progressCheck() {
        this.setState({ progress: this.state.progress + 10})
    }
    componentWillUnmount() {
        clearInterval(this.progessCheckInterval)
    }

    render() {
        const actionView = (status) => {
            switch(status) {
                case READY:
                    return <FeedbackSubmit backgroundColor="#4a9b4a" onClick={() => this.handleSubmit()}>Send My Feedback</FeedbackSubmit>
                case LOADING:
                    return  <div style={{ margin: 20 }}><Line percent={this.state.progress} strokeWidth="3" strokeColor="#4CAF50" /></div>
                case SUCCESS:
                    return <FeedbackSubmitFinished> 🎉 Sucessfully submitted feedback, thank you! 🎉 </FeedbackSubmitFinished>
                case ERROR:
                    return <FeedbackSubmit backgroundColor="#ea4f43" onClick={() => this.handleSubmit()}> ⚠️ Error! Try Again? </FeedbackSubmit> 
                default:
                    return null;
            }
        }
        return (<Slide align="center center" transition={['zoom']} bgColor='primary'>
            <FeedbackWrapper>
                <Card>
                    <FeedbackLayout>
                        <FeedbackHeader>Provide Us Feedback</FeedbackHeader>
                        <FeedbackSubHeader>How can we make this training even better</FeedbackSubHeader>
                        <SeparatorLine />
                        <FeedbackRatingHeader>How would you rate this section of the training?</FeedbackRatingHeader>
                        <FeedbackRating>
                            <ReactStars
                                count={5}
                                onChange={(value) => this.handleRatingChanged(value)}
                                size={24}
                                value={this.state.rating}
                                color2={'#ffd700'} />
                        </FeedbackRating>
                        <FeedbackFormHeader>Any additional comments or suggestions?</FeedbackFormHeader>
                        <FeedbackFormBody>
                        <form>
                            <textarea value={this.state.comment} onChange={(e) => this.handleFormChange(e)} />
                        </form>
                        </FeedbackFormBody>
                        {actionView(this.state.status)}
                    </FeedbackLayout>
                </Card>
            </FeedbackWrapper>
        </Slide>)

    }
}


export default FeedbackForm;