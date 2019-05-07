export const architectureMeta = [
  {
    index: 0,
    header: 'Control Plane API',
    description: ` 
The Istio control plane API consists of four main components; \`Pilot\`, \`Mixer\`, \`Citadel\`, and \`Galley\`.
These components combined, provide the mechanisms to coordinate Envoy proxies in sidecars and gateways, forming a unified service mesh.
`
  },
  {
    index: 1,
    header: 'Pilot',
    description: `
Pilot is responsible for consuming/listening for _Custom Resource Definitions (CRD\'s)_ applied to the _Kubernetes_ API.
On the event of new policy being applied, Pilot will manage the synchronisation of this cofngiuration across all of the Envoy Proxies within
the mesh.
`
  },
  {
    index: 2,
    header: 'Mixer',
    description: `
In order to enforce defined policies within _Istio_, such as \`Quotas\`, \`RateLimits\` and \`Authorization\`. Envoy carries out lookups which are cached within the proxy.
In the even of a cache miss, Envoy will trigger a lookup to **Mixer**.

Mixer is also responsible for the ingestion, filtering and eggregation of logs, metrics and other reported information from the _Service Mesh_ components. It provides \`CRDS\` for managing
the activation of adapterts and filtering mechanisms for ingested events.
`
  },
  {
    index: 3,
    header: 'Citadel',
    description: `
When utilising \`mTLS\` communication within the _Istio Service Mesh_, Citadel will be responsible for managing
\`SPIFFE\` certificates across all of the proxy components, as well as the regular rotation of certificates.
The default lifetime of certificates is **90 days**, however this can be customised as required.
`
  },
  {
    index: 4,
    header: 'Service A',
    description: `
Ingress to a microservice will be achieved through an _Envoy_ container, deployed alongside the microservice application,
hence the terminology _sidecar_. These two containers will run within the same \`Pod\` and a _iptables_ rule
exists on the pod which forces all traffic through the Envoy sidecar, effectively intercepting all traffic.
`
  },
  {
    index: 5,
    header: 'Service B',
    description: `
Service B, represents a _Service-to-Service_ interaction, where multiple services within the mesh are communicating.
Some of the features that would be available in this _internal-mesh_ communication would include:

* mTLS secured connecitivty between microservices
* distributed tracing between service-to-service calls
* authorization policy, allow/deny communication between services etc.
`
  },
]
export const apilifecycleMeta = [
  {
    index: 0,
    header: 'API Request',
    description: `An API request is crafted by some kind of client. This could be through \`kubectl\`, or a client consuming the \`Kubernetes API\` directly. 
This would be some kind of _CRUD_ request to \`Kubernetes\`, where the kubernetes API would be responsible for orcestrating the required systems, or making subsequent calls to facililate the request.
`
  },
  {
    index: 1,
    header: 'API HTTP Handler',
    description: `The main HTTP server which handles incomming requests. This _Web Server_ lives on the what's known as the \`Kubernetes\` _Master_ nodes.
`
  },
  {
    index: 2,
    header: 'Authentication/Authorization',
    description: `With the \`Kubernetes API\` acting as a "front-door" for all interactions with the cluster, 
both internal _Control Plane_ activities between components like the _Kubelet_, _Kube-proxy_ et al, and also external clients via \`kubectl\`, client libraries, or by making REST requests directly to the \`Kubernetes API\`.
This means we have both human users and [Kubernetes service accounts](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/), that can be authorized for API access.
Kubernetes supports a number of _Authentication_ control modules, including in \`Client Certificates, Password, and Plain Tokens, Bootstrap Tokens, and JWT Tokens\`, for validating end-user access.

Kubernetes authorization implements effecively an \`RBAC\` model for accessing the various systems within Kubernetes, to different levels of control. 
`
  },
  {
    index: 3,
    header: 'Mutating Admission Controllers',
    description: `An admission controller is a piece of code that intercepts requests to the Kubernetes API server prior to persistence of the object, 
but after the request is authenticated and authorized. A _Mutating Admission Controllers_ are able to modify objects persisting them in \`etcd\`, 
as well as implmenting admission/validation controls.

&nbsp;

\`Make sure that the MutatingAdmissionWebhook controller is enabled in the apiserver\`, when enabled, \`api-server\` can be configured to consume webhooks during the admission process.
`
  },
  {
    index: 4,
    header: 'Mutating Admission Webhooks',
    description: `The mutating webhook will have some information provided during the webhook call, 
it will use this and other cluster state information to make some form of admission mutation.
`
  },
  {
    index: 5,
    header: 'Object Schema Validation',
    description: `Validates objects processed so far are compliant to the target \`Specification\` of core \`Resources\` (Deployment, Service et al.) and/or \`Custom Resource Definitions\` (VirtualService, Gateway, et al.)

`
  },
  {
    index: 6,
    header: 'Validating Admission Controllers',
    description: `The Validating Admission Controller, differs only to the other "mutating" admission controller, in that is cannot mutate state. 
It can only evaluate rules and make an admission decision.

&nbsp;

\`Make sure that the ValidatingAdmissionWebhook controller is enabled in the apiserver\`

`
  },
  {
    index: 7,
    header: 'Validating Admission Webhooks',
    description: `A HTTP server will service a webhook endpoint that can be called during the admission process.
This service would implement the required logic to enable the required validation capabilities desired as part of some engineering/platform requirements.
`
  },
  {
    index: 8,
    header: 'etcd Storage',
    description: `Finally, the original request has been transformed into compliant resources to then be persisted into etcd. 
At this point a controller can pick up the changes and go about effectuating or deploying the required changes to the _Kubernetes_ cluster.
`
  },
]
export const ingressBasicMeta = [
  {
    index: 0,
    header: 'Istio Service Mesh',
    description: `
Given a _Kubernetes_ \`Namespace\` has been configured to allow for _Istio_ sidecar injection,
then services deployed into this namespace with be accompanied by an **Envoy Sidecar Proxy**.
In this way the service will be augmented into the _Service Mesh_.

&nbsp;

\`
kubectl get pods
NAME                              READY   STATUS    RESTARTS   AGE
api-auth-5f74b8c466-4fcl6         2/2     Running   0          1h
api-information-bdc664c59-dtscd   2/2     Running   0          1h
\`

&nbsp;

The \`2/2\` signifies that the given \`Pod\` has two containers, one being the **microservice application** and the other being the **sidecar proxy**.
`
  },

  {
    index: 1,
    header: 'Gateway',
    description: `
The \`Gateway\` resource can be consider the mechanism to define a _front-end_ listener, in terms of port and hostname.
Additionally how to map terminated TLS certificates to a given host listener.

&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: api-gateway
spec:
  selector:
    istio: ingressgateway # use istio default gateyway 
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "api.training.local"
  - port:
      number: 443 
      name: https
      protocol: HTTPS
    hosts:
    - "api.training.local"
    tls:
      mode: SIMPLE
      serverCertificate: /etc/certs/https-api/tls.crt
      privateKey: /etc/certs/https-api/tls.key
\`\`\`
&nbsp;

`
  },
  {
    index: 2,
    header: 'VirtualService',
    description: `
A \`VirtualSerice\` _CRD_ defines the instructions for how requests will be **routed** for a given _hostname_. It allows a list of matches to be specified, with corresponding destinations.
The match rules will be evaluated from top to bottom in terms of predecence. This resource has fined grained control on where it will reside, depending on the ingress and egress topology
within the _service mesh_.

&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: product-gateway
spec:
  hosts:
  - "api.training.local"
  gateways:
  - api-gateway
  http:
  - match:
    - uri:
        prefix: "/api/product"
    route:
    - destination:
        host: api-product
\`\`\`
`
  },
  {
    index: 3,
    header: 'DestinationRule',
    description: `
A \`DestinationRule\` is responsible for providing session information for when a connection is being established to a given _outbound_ endpoint, either
either within the mesh or externally.

&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: api-product
spec:
  host: api-product
  trafficPolicy:
    tls:
      mode: ISTIO_MUTUAL
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
      labels:
        version: v2
\`\`\`
`
  },
  
  {
    index: 4,
    header: 'VirtualService',
    description: `
A more granular, or service specfic \`VirtualService\` resource can be applied to the mesh. This provides a mechanism to **decouple traffic steering from infratructure scaling**. What this means is,
we can now making a routing/steering decision from the sidecar instead of having to route the traffic to a main frontend-proxy or internal load balancing node.

&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: api-product
spec:
  gateways:
  - mesh
  hosts:
  - api-product
  http:
  - route:
    - destination:
        host: api-product
        subset: v1
\`\`\`
`
  },
  {
    index: 5,
    header: 'DestinationRule',
    description: `
The \`DestinationRule\` configuration will reside on both the _ingressgateway_ and the sidecar. 
There will also be a \`DestinationRule\` used to establish a **mTLS** connection for the communication between the _ingressgateway_ and the sidecar, as shown below

&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: default
  namespace: istio-system
spec:
  host: '*.local'
  trafficPolicy:
    tls:
      mode: ISTIO_MUTUAL
\`\`\`
`
  },
  
  
]
export const egressBasicMeta = [
  {
    index: 0,
    header: 'Service Mesh Egress - Sidecar Direct',
    description: `
An Istio _service mesh_ will operate as a whitelist filter for all traffic egressing from the mesh.
Consequently we need to add \`ServiceEntry\` resources to effectively **allow** traffic out of the service mesh. There is a mechanism to break
out of this default behavior, where we can enable certain subnets to bypass the _Envoy_ sidecar when making extern/upstream requests.
It is enabled by add the following *annotation* to your \`Deployment\` resource as follows:

&nbsp;

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: microservice-without-istio-egress 
spec:
  replicas: 1
  selector:
    matchLabels:
      app: microservice-without-istio-egress 
  template:
    metadata:
      ...
      annotations:
        ...
        traffic.sidecar.istio.io/excludeOutboundIPRanges: 0.0.0.0/0
        ...
      ...
\`\`\`
`
  },
  {
    index: 1,
    header: 'ServiceEntry',
    description: `
The \`ServiceEntry\` CRD resource is used to create an outbound object inside of the _service mesh_, so that services within the mesh are able to access
the defined upstream endpoint.

&nbsp;

\`\`\`yaml

apiVersion: networking.istio.io/v1alpha3
kind: ServiceEntry
metadata:
  name: external-svc-https
spec:
  hosts:
  - stock.training.local 
  location: MESH_EXTERNAL
  ports:
  - number: 443
    name: https
    protocol: HTTPS
  resolution: DNS
\`\`\`
`
  },
  {
    index: 2,
    header: 'DestinationRule',
    description: `
In order to define more granular session information for a given _endpoint_ or _destination_ we utilise the \`DestinationRule \` _CRD_.
This will inform an _Envoy_ proxy **how** it should establish a connection with a service either **internal** or **external** to the _service mesh_
In the example below, we are specifying that we should use a mTLS based connection and which certificates to use when establishing the connection.

&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: api-stock-mtls 
spec:
  host: stock.training.local 
  trafficPolicy:
    tls:
      mode: MUTUAL
      clientCertificate: /etc/certs/stock/tls.crt
      privateKey: /etc/certs/stock/tls.key
      caCertificates: /etc/certs/stock/ca.pem
\`\`\`
`
  },
  {
    index: 3,
    header: 'External endpoint',
    description: `
Istio defines two _types_ of endpoints, either **MESH_EXTERNAL** or **MESH_INTERNAL**. Internal services are, for the most part, entirely
auto discovered via the built-in _Kubernetes_ service discovery mechanisms. However for service endpoints outside the _Istio_ _service mesh_, we need
to more explicitly define these as \`ServiceEntry\` resources so that the _service mesh_ can intelligently route when required. An **"external"** endpoint
can be a microservice which lives outside of the service mesh, but within the same _Kubernetes_ cluster. In this scenario we can define the following 
\`DestinationRuke\` to disable mTLS when communitating to the service. 

&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: ext-app
  namespace: ext-ns
spec:
  host: ext-app.ext-ns.svc.cluster.local
  trafficPolicy:
    tls:
      mode: DISABLE
\`\`\`
`
  },
]

export const egressAdvancedMeta = [
  {
    index: 0,
    header: 'Service Mesh Egress - Egress Gateway',
    description: `
A more complex _service mesh_ topology can be deployed which faciliates enabling more robust security boundaries. 
By having a _egressgateway_ service act as a "gateway" out of the mesh, it is possible to enforce traffic flows via \`NetworkPolicy\` 
to only allow egress from the _egressgateway_ service. This prevents a malicious actor bypassing the default routing behavior that 
services within the mesh will use.
`
  },
  {
    index: 1,
    header: 'Sidecar - ServiceEntry [global]',
    description: `
Creates an outbound listener on the sidecar to handle outbound requests on a given \`Port\` (if it doesn't already exist). This then allows for a \`VirtualService\` policy to handle the request and
route it to the given destination. This \`ServiceEntry\` will effectuate both _**Sidecars**_ and _**Gateways**_, it is a **global** policy (spans across namespaces and mesh components).
&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: ServiceEntry
metadata:
  name: stockt-to-gateway
spec:
  hosts:
  - stock.training.local
  location: MESH_EXTERNAL
  ports:
  - number: 443 
    name: https
    protocol: HTTPS
  resolution: DNS
\`\`\`
`
  },
  {
    index: 2,
    header: 'Sidecar - VirtualService',
    description: `
The \`VirtualService\` will be targeted to apply only to the _Sidecars_ via the \`gateways: \` selector. This \`VirtualService\` policy aims to route all traffic on 
a specific port (80) and route it to the egressgateway. Note that we specify a _**subset**_, which allows us to use more targetting or specific policy for the target destination.
&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: stock-to-egressgateway
spec:
  hosts:
  - stock.training.local
  gateways:
  - mesh
  http:
  - match:
    - gateways:
      - mesh
      port: 80 
    route:
    - destination:
        host: egressgateway.istio-system.svc.cluster.local
        subset: stock-to-gateway
        port:
          number: 443
      weight: 100
\`\`\`
`
  },
  {
    index: 3,
    header: 'Sidecar - DestinationRule [global]',
    description: `
The \`DestinationRule\` which is intended to be used by the _Sidecar_ defines the required information to enable a **mTLS** connection to be established between. The key being
that is sets the \`sni: stock.training.local\` and \`mode: ISTIO_MUTUAL\`, for all traffic routed by the \`VirtualService\` shown previously
&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: stock-to-gateway
spec:
  host: istio-egressgateway.istio-system.svc.cluster.local
  subsets:
  - name: stock-to-gateway 
    trafficPolicy:
      loadBalancer:
        simple: ROUND_ROBIN
      portLevelSettings:
      - port:
          number: 443 
        tls:
          mode: ISTIO_MUTUAL
          sni: stock.training.local 
\`\`\`
`
  },
  {
    index: 4,
    header: 'Egressgateway - Gateway',
    description: `
Similar to what we've seen so far for an _**ingressgateway**_, we have the _egressgateway_. This is working in a similar fashion but in reverse in terms of the direction of traffic.
The \`Gateway\` resource will enable the _egressgateway_ to handle requests for the given hostname, as well as specifies what certificates to terminate on the given port. In this case
it terminates the internal istio certificates which are distributed by _Citadel_.
&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: stock 
spec:
  selector:
    istio: egressgateway
  servers:
  - hosts:
    - stock.training.local 
    port:
      name: https-stock 
      number: 443
      protocol: HTTPS
    tls:
      caCertificates: /etc/certs/root-cert.pem
      mode: MUTUAL
      privateKey: /etc/certs/key.pem
      serverCertificate: /etc/certs/cert-chain.pem
\`\`\`
`
  },
  {
    index: 5,
    header: 'Egressgateway - VirtualService',
    description: `
Once traffic has been routed from _Envoy Sidecars_ within the mesh, the next stage of routing takes place on the _egressgateway_. 
The \`VirtualService\` shown below, routes manages all traffic for the _stock.training.local_ domain, and will utilise the **external** \`DestinationRule\` _subset_.
&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: stock-to-egressgateway
spec:
  hosts:
  - stock.training.local
  gateways:
  - istio-egressgateway
  http:
  - match:
    - gateways:
      - istio-egressgateway
      port: 443
    route:
    - destination:
        host: stock.training.local
        subset: external
        port:
          number: 443 
      weight: 100

\`\`\`
`
  },
  {
    index: 6,
    header: 'EgressGateway - DestinationRule [global]',
    description: `
For the final stage of the request handling that occurs within the _Service Mesh_, we have the below \`DestinationRule\`. This policy effectively instructs the _eggressgateway_ 
to originate a _**mTLS**_ connection to the target destination, with the specified certificates for the mutual authentication handshake and validation.
&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: stock-to-external
spec:
  host: stock.training.local 
  subsets:
  - name: external
    trafficPolicy:
      loadBalancer:
        simple: ROUND_ROBIN
      portLevelSettings:
      - loadBalancer:
          simple: ROUND_ROBIN
        port:
          number: 443 
      tls:
        mode: MUTUAL
        clientCertificate: /etc/certs/stock/tls.crt
        privateKey: /etc/certs/stock/tls.key
        caCertificates: /etc/certs/stock/ca.pem
\`\`\`
`
  },
  {
    index: 7,
    header: 'Egressgateway - ServiceEntry [global]',
    description: `
The \`ServiceEntry\` policy will be deployed to effectively all mesh components, enabling outbound resolution by the mesh components.

&nbsp;

\`\`\`yaml
apiVersion: networking.istio.io/v1alpha3
kind: ServiceEntry
metadata:
  name: stockt-to-gateway
spec:
  hosts:
  - stock.training.local
  location: MESH_EXTERNAL
  ports:
  - number: 443 
    name: https
    protocol: HTTPS
  resolution: DNS
\`\`\`
`
  },
]

export const codeSlideGateway = [
  { loc: [0, 22], title: 'Gateway' },
  { loc: [1, 2], title: 'Custom Resource Definition' },
  {
    loc: [5, 7],
    title: 'Selector',
    note:
      'specify which gateway this policy should be applied to, corresponds to the Pod label on the istio-gateway'
  },
  {
    loc: [8,16],
    title: 'Server - HTTP',
    note:
      'specify server "listeners", allowing ingress into the service mesh via the gateway'
  },
  {
    loc: [8, 12],
    title: 'Server - HTTP [port]',
    note:
      'server on port 80 with name http-api (port names must be unique)'
  },
  {
    loc: [12, 14],
    title: 'Server - HTTP [host]',
    note:
      'only requests containing a Header with Host: api.training.local, will be accepted by the gateway'
  },
  {
    loc: [14, 16],
    title: 'Server - HTTP [redirect]',
    note: `force http --> https redirect`,
    
  },
  {
    loc: [16, 20],
    title: 'Server - HTTPS [port]',
    note: `port for a HTTPS server, note the unique port name and HTTPS protocol specified`,
    
  },
  {
    loc: [22, 26],
    title: 'Server - HTTPS [certs]',
    note: `specification of certificates to terminate on the server, and mode: SIMPLE makes it a basic HTTPS server`,
    
  },
  {
    loc: [26, 30],
    title: 'Server - mTLS [port]',
    note: `port for a HTTPS server, note the unique port name and HTTPS protocol specified`,
    
  },
  {
    loc: [32, 37],
    title: 'Server - HTTPS [mTLS]',
    note: `specification of mTLS mode and certificate authority certificates to use in verifying a presented client side certificate`,
    
  },
  {
    loc: [37, 39],
    title: 'Server - HTTPS [SAN]',
    note: `A list of alternate names to verify the subject identity in the certificate presented by the client`,
    
  },
  
]

export const codeSlideVirtualService = [
  { loc: [0, 21], title: 'VirtualService' },
  { loc: [1, 2], title: 'Custom Resource Definition' },
  {
    loc: [5, 7],
    title: 'Selector',
    note:
      'The names of gateways and sidecars that should apply these routes.'
  },
  {
    loc: [7, 9],
    title: 'Host',
    note:
      'The destination hosts to which traffic is being sent.'
  },
  {
    loc: [10, 17],
    title: 'HTTPMatchRequest[]',
    note:
      `Match conditions to be satisfied for the rule to be activated. 
      All conditions inside a single match block have AND semantics, 
      while the list of match blocks have OR semantics. 
      The rule is matched if any one of the match blocks succeed.`
  },
  {
    loc: [17, 20],
    title: 'HTTPRewrite',
    note:
      'Rewrite HTTP URIs and Authority headers, rewrite will be performed before forwarding.'
  },
  {
    loc: [20, 25],
    title: 'CorsPolicy',
    note:
      'Cross-Origin Resource Sharing policy (CORS) for the given match'
  },
  {
    loc: [25, 27],
    title: 'AppendHeaders',
    note:
      'Additional HTTP headers to add before forwarding a request to the destination service.'
  },
  {
    loc: [27, 36],
    title: 'DestinationWeight[]',
    note:
      `A http rule can either redirect or forward (default) traffic. 
      The forwarding target can be one of several versions of a 
      service. Weights associated with the service version determine the proportion of traffic it receives.`
  },
  {
    loc: [28, 32],
    title: 'Destination [v1]',
    note:
      `Set a weight of 90% of traffic to be sent to version: v1 of the service`
  },
  {
    loc: [32, 36],
    title: 'Destination [v2]',
    note:
      `Set a weight of 10% of traffic to be sent to version: v2 of the service`
  },
  {
    loc: [36, 39],
    title: 'HTTPRetry',
    note:
      `Retry policy for HTTP requests`
  },
  {
    loc: [39, 46],
    title: 'HTTPFaultInjection',
    note:
      `Fault injection policy to apply on HTTP traffic at the client side. Note that timeouts or retries will not be enabled when faults are enabled on the client side.`
  },
  {
    loc: [28, 32],
    title: 'Destination [v1]',
    note:
      `Set a weight of 90% of traffic to be sent to version: v1 of the service`
  },
]

export const codeSlideDestinationRuleExternal = [
  { loc: [0, 21], title: 'DestinationRule - External Endpoint' },
  { loc: [1, 2], title: 'Custom Resource Definition' },
  {
    loc: [5, 6],
    title: 'Host',
    note:
      `The name of a service from the service registry. 
Service names are looked up from the platform’s service registry 
(e.g., Kubernetes services, Consul services, etc.) and from the hosts declared by ServiceEntries`
  },
  {
    loc: [6, 12],
    title: 'TrafficPolicy',
    note:
      'Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).'
  },
  {
    loc: [10, 33],
    title: 'Subset[]',
    note:
      'One or more named sets that represent individual versions of a service. Traffic policies can be overridden at subset level.'
  },
  {
    loc: [11, 21],
    title: 'Subset - Basic',
    note:
      'more "basic" subset, that omits a lot of the available configuration options available, instead using the defaults'
  },
  {
    loc: [13, 21],
    title: 'TrafficPolicy.PortTrafficPolicy[]',
    note:
      'Traffic policies specific to individual ports. Note that port level settings will override the destination-level settings.'
  },
  {
    loc: [14, 21],
    title: 'PortLevelSettings',
    note:
      'Here it is possible to specify the desired behavior when establishing on port 443 to the given destination'
  },
  {
    loc: [16, 21],
    title: 'TLSSettings',
    note:
      'Specify TLS mode as "mode: MUTAL" and the mTLS certificates to be used when connecting to the upstream endpoint'
  },
  {
    loc: [21, 43],
    title: 'Subset - Specific',
    note:
      `If we need to configure fine-grained control over how the HTTP/TCP session is managed by 
the service mesh we have the following settings available. `
  },
]

export const codeSlideDestinationRuleVersions = [
  { loc: [0, 19], title: 'DestinationRule - Versioned' },
  { loc: [1, 2], title: 'Custom Resource Definition' },
  {
    loc: [5, 6],
    title: 'Host',
    note:
      `The name of a service from the service registry. 
Service names are looked up from the platform’s service registry 
(e.g., Kubernetes services, Consul services, etc.) and from the hosts declared by ServiceEntries`
  },
  {
    loc: [9, 16],
    title: 'Subset[]',
    note:
      'One or more named sets that represent individual versions of a service. Traffic policies can be overridden at subset level.'
  },
  {
    loc: [10, 11],
    title: 'name',
    note:
      'Name of the subset. The service name and the subset name can be used for traffic splitting in a route rule.'
  },
  {
    loc: [11, 13],
    title: 'labels',
    note:
      'Labels apply a filter over the endpoints of a service in the service registry. See route rules for examples of usage.'
  },
  {
    loc: [13, 16],
    title: 'TrafficPolicy',
    note:
      `Traffic policies that apply to this subset. 
Subsets inherit the traffic policies specified at the DestinationRule level. 
Settings specified at the subset level will override the corresponding settings 
specified at the DestinationRule level.`
  },
  {
    loc: [16, 20],
    title: 'portLevelSettings',
    note:
      `Traffic policies specific to individual ports. 
Note that port level settings will override the destination-level settings. 
Traffic settings specified at the destination-level will not be inherited when overridden by port-level settings, 
i.e. default values will be applied to fields omitted in port-level traffic policies.`
  },
  {
    loc: [20, 23],
    title: 'portLevelSettings',
    note:
      `Subset for selecting "v2" of the service. In this scenario it will use the destination-level trafficPolicy`
  },
]

export const codeSlideServiceEntry = [
  { loc: [0, 19], title: 'ServiceEntry' },
  { loc: [1, 2], title: 'Custom Resource Definition' },
  {
    loc: [5, 7],
    title: 'Host[]',
    note:
      `The hosts associated with the ServiceEntry. Could be a DNS name with wildcard prefix `
  },
  {
    loc: [7, 8],
    title: 'ServiceEntry.Location',
    note:
      'Specify whether the service should be considered external to the mesh or part of the mesh.'
  },
  {
    loc: [8, 12],
    title: 'Ports',
    note:
      'The ports associated with the external service. If the Endpoints are unix domain socket addresses, there must be exactly one port.'
  },
  {
    loc: [12, 13],
    title: 'ServiceEntry.Resolution',
    note:
      'Service discovery mode for the names specified in the address or hosts fields, can be either DNS, STATIC or NONE'
  },
  {
    loc: [13, 19],
    title: 'ServiceEntry.Endpoint[]',
    note:
      `One or more endpoints associated with the service. 
In this case we are constructing a mapping between "stock.training.local" 
and the ingressgateway service name "istio-ingressgateway.istio-system.svc.cluster.local", allowing the sidecar to resolve the simulated "external" upstream`
  },
]
export const tracingMeta = [
  {
    index: 0,
    header: 'Microservices',
    description: `The sidecar deployed with each microservice will create traces based of requests going in and out of the microservice as it proxies requests.
These generated traces will be compliant with the LightStep & Zipkin trace format. Consequently it has compatibility with any Zipkin compatible backend (e.g. Jaeger, DataDog etc.)
`
  },
  {
    index: 1,
    header: 'Mixer [Policy]',
    description: `Traces are also generated by the Mixer, this it so show the policy checks that occur in the Istio control plane for use in validating \`Quota\`, \`RateLimiting\`, and \`Authorization\` policies.
`
  },
  {
    index: 2,
    header: 'Collector',
    description: `Collector is responsible for handling the Zipkin \`POST\` bodies sent from the _Envoy_ proxies, ingesting and then sending these to the defined backends (i.e. Elasticsearch or Cassandra) for indexing.
`
  },
  {
    index: 3,
    header: 'Elasticsearch',
    description: `Spans need to be stored somewhere for querying and other types of analytics work to be carried out. Elasticsearch is one example but there are other options available such as Cassandra. Once the spans are indexes
they are ready for queries to construct traces.
`
  },
  {
    index: 4,
    header: 'Jaeger query',
    description: `The _Jaeger UI_ consistents of two components: _Jaeger Server (handles the query and joining of spans into traces)_ and _Jaeger UI (frontend which renders the processed content from the Jaeger Server)_

`
  },
]

export const codeSlidePostSpans = [
  { loc: [0, 36],
    title: 'Zipkin Span',
    note: `This JSON payload would be sent as a POST to the collector endpoint, e.g. POST http://zipkin:9411/spans
 `
   },
  {
    loc: [2, 3],
    title: 'traceId',
    note:
      `In order for spans to be correlated together, the spanId is used to identify spans across multiple
 requests. Randomly generated, unique identifier for a trace, set on all spans with a trace.`
  },
  {
    loc: [4, 5],
    title: 'parentId',
    note:
      `Allows child spans to be nested under a parent span. This could also be known as the "root context" of an end-to-end request.
Where if headers are being propagated across multiple requests, then the first hop will set context as a "root" span. This will be absent if this the root span in a trace.`
  },
  {
    loc: [6, 7],
    title: 'kind',
    note:
      `When present, kind clarifies timestamp, duration and remoteEndpoint. When
      absent, the span is local or incomplete. Can be one of [CLIENT, SERVER, PRODUCER, CONSUMER]`
  },
  {
    loc: [7, 8],
    title: 'timestamp',
    note:
      `Epoch microseconds of the start of this span, possibly absent if
      incomplete. This value should be set directly by instrumentation, using the most
      precise value possible. For example, gettimeofday or multiplying epoch
      millis by 1000.`
  },
  {
    loc: [11, 17],
    title: 'localEndpoint',
    note:
      `The network context of the local node in the service graph`
  },
  {
    loc: [17, 23],
    title: 'remoteEndpoint',
    note:
      `The network context of the remote node in the service graph`
  },
  {
    loc: [23, 29],
    title: 'annotations',
    note:
      `Associates an event that explains latency with a timestamp.
      Unlike log statements, annotations are often codes. Ex. “ws” for WireSend`
  },
  {
    loc: [29, 34],
    title: 'tags',
    note:
      `Adds context to a span, for search, viewing and analysis.`
  },

]

export const securityMeta = [
  {
    index: 0,
    header: 'Security Architecture',
    description: `
`
  },
  {
    index: 1,
    header: 'Kubernetes Control Plane',
    description: `The Kubernetes control plane provides a foundational platform, from which clearly defined policies can
defined as \`Custom Resource Definitions\`. The _Istio Control Plane_ components can then consume these to go about translating the policy into
the required configuration acrossn the service mesh.
`
  },
  {
    index: 2,
    header: 'Pilot',
    description: `Pilot services to distribute [authentication policies](https://istio.io/docs/concepts/security/#authentication-policies)
and secure [naming information](https://istio.io/docs/concepts/security/#secure-naming), as well as all routing policy, to the proxies. It will manage the update/sycnhronisation
of policy changes through the application of new resources to Kubernetes, represented as \`Custom Resource Definitions\`.
`
  },
  {
    index: 3,
    header: 'Mixer',
    description: `In order for defined polcicies which prohibit or allow access to services available within the _Service Mesh_,
the sidecar and gateway proxies carry out cached policy lookups/checks against Mixer. This is how we can go about enabling a per-service authorization workflow,
as well as carrying out auditing and monitoring of access occuring within the _Service Mesh_.
`
  },
  {
    index: 4,
    header: 'Ingress Gateway',
    description: `The ingressgateway proxy acts as a "frontend" perimter proxy for traffic entering the service mesh.
This allows for the creating of clear networking boundaries for rules to be defined on a more granular level from south-bound traffic, passed the permimeter.
Traffic southbound will be mutually secured to the services running within the service mesh. Given the cluster is a \`mTLS: enabled\` _Service Mesh_.
`
  },
  {
    index: 5,
    header: 'Egress Gateway',
    description: `The egressgateway, similar to the ingressgateway, gives us a clearly defined perimeter for traffic leaving the service mesh.
This can serve as a mechanism for implementing clear whitelisted/blacklisting of traffic on egress, that can be further enforced using additional constructs such as \`NetworkPolicy\`.
Preventing the potential of services within the mesh, potentyially bypassing their _side-car_ when attempting egress access.

Another tool available when utilising this mesh topology is offloading the TLS origination of secured upstreams to the egressgateway.
Simplifying the management of certificates.
`
  },
  {
    index: 6,
    header: 'Microservice [Service A]',
    description: `
For _Service-to-Service_ communication, the connection will be mTLS secured, in an effectively transaparent manner. Given mTLS is enabled within the cluster.
Communication from the client-side application (within the \`Pod\`) will be over HTTP, where the side-car will bump this to mTLS when exiting the \`Pod\`.
`
  },
  {
    index: 7,
    header: 'Microservice [Service B]',
    description: `
For _Service-to-Service_ communication, the connection will be mTLS secured, in an effectively transaparent manner. Given mTLS is enabled within the cluster.
Communication from the client-side application (within the \`Pod\`) will be over HTTP, where the side-car will bump this to mTLS when exiting the \`Pod\`.
`
  },
  {
    index: 8,
    header: 'Citadel',
    description: `
Citadel is responsible for key and certificate management across the service mesh. 
Citadel will securely provisions strong workload identities to every workload. Istio uses X.509 
certificates to carry the identities in [SPIFFE](https://spiffe.io/) format. The PKI also automates the key & certificate rotation at scale.
Citadel will manage the automated roation of certificates across the cluster components where required, with a default period of _**90 days**_ for rotation, which can be customised.
`
  },
  {
    index: 9,
    header: 'Data Path',
    description: `
The end-to-end datapath that services operate over will be fully secured.
`
  },
]

export const codeSlideAuthenticationMTLS = [
  { loc: [0, 15],
    title: 'Authentication Policy [mTLS]',
   },
  {
    loc: [1, 2],
    title: 'Policy Scope',
    note:
      `"kind" can either be "MeshPolicy" for cluster-wide scope, or "Policy" for namespace scoping. Policies in the namespace-scope storage can only affect services in the same namespace.
Policies in mesh-scope can affect all services in the mesh.`
  },
  {
    loc: [4, 5],
    title: 'Policy Namespace',
    note:
      `Because this Policy is of "kind: Policy", it is namespace scoped. So we specify a desired namespace we want this policy to apply in`
  },
  {
    loc: [6, 13],
    title: 'TargetSelector',
    note:
      `An authentication policy’s targets specify the service or services to which the policy applies. If you don’t provide a "targets:" section, Istio matches the policy to all services in the storage scope of the policy.`
  },
  {
    loc: [7, 8],
    title: 'Name',
    note:
      `The name must be a short name from the service registry. The fully qualified domain name will be resolved in a platform specific manner.`
  },
  {
    loc: [8, 10],
    title: 'Ports',
    note:
      `Specifies the ports on the destination. Leave empty to match all ports that are exposed.`
  },
  {
    loc: [13, 15],
    title: 'Peers',
    note:
      `List of authentication methods that can be used for peer authentication. They will be evaluated in order; the first validate one will be used to set peer identity (source.user) and other peer attributes.`
  },
]

export const meshPolicy = `
apiVersion: authentication.istio.io/v1alpha1
kind: MeshPolicy
metadata:
  name: default
spec:
  peers:
  - mtls: {}
`;

export const codeSlideOriginAuthenticationJWT = [
  { loc: [0, 21],
    title: 'Origin Authentication Policy [JWT]',
   },
  {
    loc: [1, 2],
    title: 'Policy Scope',
    note:
      `"kind" can either be "MeshPolicy" for cluster-wide scope, or "Policy" for namespace scoping. Policies in the namespace-scope storage can only affect services in the same namespace.
Policies in mesh-scope can affect all services in the mesh.`
  },
  {
    loc: [4, 5],
    title: 'Policy Namespace',
    note:
      `Because this Policy is of "kind: Policy", it is namespace scoped. So we specify a desired namespace we want this policy to apply in`
  },
  {
    loc: [6, 13],
    title: 'TargetSelector',
    note:
      `An authentication policy’s targets specify the service or services to which the policy applies. If you don’t provide a "targets:" section, Istio matches the policy to all services in the storage scope of the policy.`
  },
  {
    loc: [7, 8],
    title: 'Name',
    note:
      `The name must be a short name from the service registry. The fully qualified domain name will be resolved in a platform specific manner.`
  },
  {
    loc: [8, 10],
    title: 'Ports',
    note:
      `Specifies the ports on the destination. Leave empty to match all ports that are exposed.`
  },
  {
    loc: [12, 20],
    title: 'origin',
    note:
      `The origins: section defines authentication methods and associated parameters supported for origin authentication. 
Istio only supports JWT origin authentication. However, a policy can list multiple JWTs by different issuers. 
Similar to peer authentication, only one of the listed methods must be satisfied for the authentication to pass.

      `
  },
  {
    loc: [14, 15],
    title: 'issuer',
    note:
      `
      Identifies the issuer that issued the JWT. See issuer Usually a URL or an email address.

      Example: "https://securetoken.google.com" or "1234567-compute@developer.gserviceaccount.com"
      `
  },
  {
    loc: [15, 17],
    title: 'audiences',
    note:
      `
      The list of JWT audiences. that are allowed to access. A JWT containing any of these audiences will be accepted.

      The service name will be accepted if audiences is empty.
      `
  },
  {
    loc: [17, 18],
    title: 'jwkUri',
    note:
      `
      URL of the provider’s public key set to validate signature of the JWT
      `
  },
  {
    loc: [18, 20],
    title: 'jwt_headers',
    note:
      `
      JWT is sent in a request header. header represents the header name.
      `
  },
  {
    loc: [20, 21],
    title: 'originIsOptional',
    note:
      `Set this flag to true to accept request (for origin authentication perspective), 
even when none of the origin authentication methods defined above satisfied. 
Typically, this is used to delay the rejection decision to next layer (e.g authorization). 
      `
  },
  {
    loc: [21, 22],
    title: 'principleBinding',
    note:
      `Define whether peer or origin identity should be use for principal. 
Default value is USE_PEER. If peer (or orgin) identity is not available, 
either because of peer/origin authentication is not defined, or failed, 
principal will be left unset. 
      `
  }
]