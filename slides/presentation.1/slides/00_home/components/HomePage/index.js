import React from 'react';
import {
    Slide
} from 'spectacle';
import { Link } from 'react-router-dom'
import { TheoryCard, HomePageWrapper, TheoryWrapper, WorkshopHeader, WorkshopCard, WorkshopWrapper, TheoryHeader, Header } from './style';

const THEORY = [
    {
        index: 1,
        title: 'Introduction',
        url: '/intro/#/0'
    },
    {
        index: 2,
        title: 'Bootstrap',
        url: '/bootstrap/#/0'
    },
    {
        index: 3,
        title: 'Kubernetes',
        url: '/kubernetes/#/0'
    },
    {
        index: 4,
        title: 'Istio',
        url: '/istio/#/0'
    },
]
const WORKSHOPS = [
    {
        index: 1,
        title: 'Simple Deployment',
        url: '/lab1/'
    },
    {
        index: 2,
        title: 'Mesh Deployment',
        url: '/lab2/'
    },
    {
        index: 3,
        title: 'Traffic Control - Basic',
        url: '/lab3/'
    },
    {
        index: 4,
        title: 'Traffic Control - Advanced',
        url: '/lab4/'
    },
    {
        index: 5,
        title: 'Service Resiliency',
        url: '/lab5/'
    },
    {
        index: 6,
        title: 'Authentication - mTLS',
        url: '/lab6/'
    },
    {
        index: 7,
        title: 'Authentication - JWT Authentication',
        url: '/lab7/'
    },
    {
        index: 8,
        title: 'Mixer Policy - Rate Limiting',
        url: '/lab8/'
    },
    {
        index: 9,
        title: 'Authorization - RBAC',
        url: '/lab9/'
    },
    {
        index: 10,
        title: 'Authentication - egress mTLS',
        url: '/lab10/'
    },
    {
        index: 11,
        title: 'Chaos Injection',
        url: '/lab11/'
    },
    {
        index: 12,
        title: 'Telemetry',
        url: '/lab12/'
    },
    {
        index: 13,
        title: 'Authorization - Access Control Lists',
        url: '/lab13/'
    },
]
class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const theoryLinks = THEORY.map( link => <TheoryCard key={`theory-card-${link.index}`}>
            <Link to={{pathname:link.url, state: 'flushed'}} onClick={() => window.location.reload()}>{link.title}</Link>
            </TheoryCard>)
        const workshopLinks = WORKSHOPS.map (link => <WorkshopCard key={`theory-card-${link.index}`}><Link to={{pathname:link.url, state: 'flushed'}}>{link.title}</Link></WorkshopCard>)
        return (<Slide align="center flex-start" transition={['zoom']} bgColor='primary'>
            <HomePageWrapper>
                <Header>Table of Contents</Header>
                <TheoryHeader>Theory</TheoryHeader>
                <TheoryWrapper>
                {theoryLinks}
                </TheoryWrapper>
                <WorkshopHeader>Workshops</WorkshopHeader>
                <WorkshopWrapper>
                {workshopLinks}
                </WorkshopWrapper>
            </HomePageWrapper>
        </Slide>)

    }
}

export default HomePage;