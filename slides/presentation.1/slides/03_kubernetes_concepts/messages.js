export const resourceMeta = [
  {
    index: 0,
    header: 'Local Cluster',
    description: `
Running local cluster environment, ideally docker for mac.
`
  },
  {
    index: 1,
    header: 'Client',
    description: `
Applications and tools which will consume the ingress endpoint on \`localhost\`, examples would include the demo application (browser), curl etc.`
  },
  {
    index: 2,
    header: 'VPNKit',
    description: `
[vpnkit](https://github.com/moby/vpnkit) acts as a proxy or loadbalancer for enabling streamined interopteration with 
the host networking and the HyperKit VM which is running our docker-for-mac enviornment. 
This is utilised when we specify \`Type: Loadbalancer\` on our _ingress-nginx_ \`Service\` Resource.
We then effectively mirror a public-cloud provider set up, where Kubernetes would orcestrate an _AWS ELB_ or _GCP GLB_.
Traffic on \`localhost\` will be send to this _VPNKit_ proxy, which will then route the request to the required \`NodePort\`.
`
  },
  {
    index: 3,
    header: 'NGINX ingress controller',
    description: `
When the _NGINX ingress controller_ \`Service\` resource is applied, of \`LoadBalancer\`, 
_kube-proxy_ will go about creating rules for both a \`NodePort\` and \`ClusterIP\`.
The \`NodePort\` will be mapped to a target \`ClusterIP\`. This is effectively the main "entry" point into the Kubernetes cluster. The _kube-proxy_ running on all Kubernetes nodes will ensure this same \`NodePort --> ClusterIP\` mapping is created on all nodes.
`
  },
  {
    index: 4,
    header: 'Services',
    description: `
A \`ClusterIP\` will act as a _Virtual IP (VIP)_ for the associated \`Endpoint\` resources that exist for the corresponding running \`Pod\` resources, 
which match the \`Service\` resources's defined selector.
Through _iptables_ this VIP will loadbalance in a round-robin fashion across the available endpoints.
`
  },
  {
    index: 5,
    header: 'Endpoints',
    description: `
In the event of a \`Pod\` creation, the kubernetes *endpoint controller* is triggered and creates/appends to a corresponding \`Endpoint\` resource. 
When a new endpoint is added, another _iptables_ rule will be added, enabling the \`Services\`'s ClusterIP VIP to loadbalance across.
The \`Service\` resource will filter the \`Pod\`'s and their \`PodIP\` based off its defined _selector_, where each \`Pod\` will have defined labels to select/filter on.
`
  },
  {
    index: 6,
    header: 'Deployments',
    description: `
\`Deployment\` resources are a higher level abstraction for 
deploying \`Pod\` resources in a easily scalable fashiom, with the ability to streamline rolling updates and manage other deployment 
related activities like ensuring availability through \`PodDistruptionBudget\` mechanics. 
\`Deployment\` resources will have set _labels_ which allow the \`Service\` resources to construct the required endpoint list for loadbalancing
`
  }
]
