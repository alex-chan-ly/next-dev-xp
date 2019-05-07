export const coursePlanDayOne = [
    {
        index: 0,
        header:  "Bootstrap Environment",
        description: `
Getting the local environment set up. Install and validate all dependencies including:  
    
* Core dependencies (git, brew, jq, kubectl, kubectx) 
* Docker for Mac + Kubernetes
* training repository installation and bootstrap
* other depdendencies (mkcert)

Introduce makefile tooling and help options and entrypoint for running workshop 
`
    },
    {
        index: 1,
        header:  "Kubernetes Concepts",
        description: `
Quick refresh of core kubernetes concepts and resouces relavent to service-mesh interactions

* Kubernetes Resources [Service, Endpoint, Ingress, Deployment]
* Kubernetes networking (life of a packet)
`
    },
    {
        index: 2,
        header:  "Simple Deployment",
        description: `
Carry out the deployment of a basic backend + frontend application, will utilise in workshops/labs

* Enable/expose ingress to applications via nginx-ingress-controller
* validate functionality and observability of deployed application
* demonstrate how to do a basic canary deployment
`
    },
    {
        index: 3,
        header:  "Istio Concepts - Part One",
        description: `
Introduce the istio technology stack and components including:

* Istio control plane architect [Mixer, Pilot, Galley, Telemetry, Citadel]
* key Custom Resource Definitions (CRDs) [ServiceEntry, VirtualService, DestinationRule, Gateway]
* life of a packet inside Istio data plane
* deployment patterns

Finish off by deploying the istio control plane to the local docker for mac environment and validate/test operation
`
    },
]
export const coursePlanDayTwo = [
    {
        index: 0,
        header:  "Istio Concepts - Part Two",
        description: `
With Istio deployed and having run through some of the core components involved in Istio and Service Mesh architectures, we look at lower-level aspects including:

* Security Features and policy
* Mixer Policy and the Adapter Model
* Distributed Tracing and how this capability is enabled within Istio
`
    },
    {
        index: 1,
        header:  "Advanced deployment",
        description: `
Carry out a more "advanced" deployment which involves more sophisticated routing and authentication

* Replacing the mechanism of ingress to the services we defined on Day One, with the equivalent istio policies etc.
* validate ingress functionality
* workshops on observability and tools available within Istio
* workshops on basic routing capabilities and enabling ingress capabilities
`
    },
    {
        index: 2,
        header:  "Istio Workshops",
        description: `
Running through more sophisticated use-cases we hope to demonstrate through workshops the following capabilities:

* traffic steering capabilities based of Headers, Cookies etc.
* Service Resiliency
* Rate Limiting
* Authorization (JWT) and service-to-service access policy
`
    },
]

export const localArchitectureLabels = [
    {
        index: 0,
        header: "Local Cluster",
        description: `
Running local cluster environment, ideally docker for mac.
`
    },
    {
        index: 1,
        header: "Client",
        description: `
Clients connect effectively on localhost. These will be browsers (webapp), curl etc.`
    },
    {
        index: 2,
        header: "Localised Ingress",
        description: `
client connections on \`*.training.local\`
We configure our \`/etc/hosts\` to map 127.0.0.1 to *.training.local. Having a DNS based mapping helps for steering traffing with __nginx-ingress__ as well as cert allocation`
    },
    {
        index: 3,
        header: "NGINX ingress controller",
        description: `
The __NGINX ingress controller__ handles requests for hosts and routes them to backend services running within Kubernetes. The associated steering configuration is translated from \`Ingress\` resources`
    },
    {
        index: 4,
        header: "Services",
        description: `
\`Service\` resources are defined which select the associated \`Deployments\` running inside Kubernetes. This selection is achieved through the use of _selectors_, which filter on \`Deployment\` labels. `
    },
    {
        index: 5,
        header: "Deployments",
        description: `
We deploy a set of demo microservices into the local cluster. THese have been labelled such that we can easily create \`Services\` to select the associated deployment. `
    },
]
export const topologyLabels = [
    {
        index: 0,
        header: "Product API",
        description: `This \`Product API\` acts as a front-end or gateway service which manages the fetching of data from other services, 
managing the parsing and aggregation of responses from subsequent services.

Example calls at

&nbsp;

\`GET /api/product/{v1,v2,v3,v4}/product/{id}\`

`
    },
    {
        index: 1,
        header: "Information API",
        description: `In order to fetch the metadata description about a product we fetch from the product API.
This API also manages a nested call to the \`Stock API\`, to get stock information.

&nbsp;

\`GET /api/information/{v1,v2}/information/{id}\`

\`GET /api/information/v1/images/{name}.png\`
`
    },
    {
        index: 2,
        header: "Pricing API",
        description: `\`Pricing API\` retrieves pricing information for products. This services has a built-in ability to be programattically made to delay and return \`5xx\` errors.
        
This gives us an opportunity to then demonstrate enabling service resiliency via _Service Mesh_ features available in _Istio_

&nbsp;

\`GET /api/pricing/v1/pricing/{id}\`
`
    },
    {
        index: 3,
        header: "Rating API",
        description: `The \`Rating API\` provides a user-rating of the given product. 
This service is used to demonstrate canary rollouts, where this API can return rating values and specify different colors for the star values.

&nbsp;

\`GET /api/rating/{v1,v2,v3}/rating/{id}\`
`
    },
    {
        index: 4,
        header: "Stock API",
        description: `In order to closely simulate an external downstream call, and when we say "external", we mean outside the service mesh, we have the \`Stock API\`. 
This service utilises the \`egress -> ingress\` loopback type behavior to represent an external call.

&nbsp;

\`GET /api/stock/v1/stock/{id}\`
`
    },
    {
        index: 5,
        header: "Authentication API",
        description: `The \`Authentication API\` provides an \`Oauth2 + OIDC\` issuer for, providing RSA signed JWT tokens. 
This gives us a mechanism to login at the client and utilise our \`Bearer Token\` to do _end-user authentication_ for individual microservices via Istio.

&nbsp;

\`POST /api/auth/v1/auth/login\`

\`GET /api/auth/v1/auth/keys\`

\`GET /api/auth/v1/auth/.well-known/openid-configuration\`
`
    },
]
export const repoStructureContent = [
    { loc: [0, 50], title: 'Repo Structure' },
    {
        loc: [0, 1],
        title: 'Makefile',
        note: 'entrypoint for running tasks'
    },
    {
        loc: [1, 7],
        title: 'Bootstrap Scripts',
        note:
        'bootstrap local environment as required for deployments and workshops'
    },
    {
        loc: [7, 12],
        title: 'Cluster Management Scripts',
        note:
        'Scripts and tooling for installing and bootstrapping Kubernetes cluster locally'
    },
    {
        loc: [13, 27],
        title: 'Istio Deployment Resources',
        note:
        'Istio resources including environment set up, service deployment and observability. Mesh routing policy and different traffic management techniques which are used in labs'
    },
    {
        loc: [27, 35],
        title: 'nginx-ingress deployment resources',
        note:
        'for the deployment and ingress configuration of the microservice stack into kubernetes'
    },
    {
        loc: [35, 50],
        title: 'workshop resources',
        note:
        'resources we use during workshops to demonstrate features'
    },
]