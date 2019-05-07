export const page1 = `
# Cluster Health

Check the status of your locally running cluster by running the following

\`kubectl get nodes\`
`
export const step1 = {
  one: `
Istio is deployed using the available Makefile in the root of the _istio-training_ repository.

Run the following:  

&nbsp;

\`make istio.install\`

`,
  three: `
Navigate to the following locally hosted demo webapp:

&nbsp;

[http://demo.training.local](http://demo.training.local)

&nbsp;

Play around with the available applications. These will be used to demonstrate the capabilities of Istio later on.
`,
  four: `
With our sample application running we can now look at what the available observability tooling there is out of the box with the _nginx-ingress-controller_.
Run the following command to deploy the simple observability stack:

&nbsp;

\`make simple.observability\`

&nbsp;

This will start **Grafana** and **Prometheus**, which will provide visibility into the performance and health of our services

[https://grafana.training.local](https://grafana.training.local)


[https://prometheus.training.local](https://prometheus.training.local)

`,
  five: `
 TODO: Canary deployment workshop
 `
}
export const step2 = {
  one: `
Microservice stack [\`api-product\`, \`api-training\`, \`api-ratings\`, \`api-pricing\` etc.] is deployed using the available Makefile in the root of the _istio-training_ repository.

Run the following:  

&nbsp;

\`make mesh.deploy\`

`,
  two: `
Navigate to the following locally hosted demo webapp:

&nbsp;

[https://demo.training.local](https://demo.training.local)

&nbsp;
 `,
  three: `
Enable access to the observability tooling that is available by rnning the following command in the Makefile found at the root of the _istio-training_ repository.


&nbsp;

\`make mesh.observability\`

`,
}
export const step3 = {
  one: `
Microservice stack [api-product, api-training, api-ratings, api-pricing etc.] is deployed using the available Makefile in the root of the _istio-training_ repository.

Run the following:  

&nbsp;

\`make mesh.deploy\`

`,
  three: `
Navigate to the following locally hosted demo webapp:

&nbsp;

[http://demo.training.local](http://demo.training.local)

&nbsp;
 `
}


export const istioInstall = `curl -L https://git.io/getLatestIstio | ISTIO_VERSION=\${ISTIO_VERSION} sh -
kubectl create namespace istio-system --dry-run -o yaml | kubectl apply -f -
kubectl create secret tls https-obs-secret -n istio-system --key ./bootstrap/certs/_wildcard.\${OBSERVABILITY_DOMAIN}-key.pem --cert ./bootstrap/certs/_wildcard.\${OBSERVABILITY_DOMAIN}.pem --dry-run -o yaml | kubectl apply -f -
kubectl create secret tls https-api-secret -n istio-system --key ./bootstrap/certs/\${API_DOMAIN}-key.pem --cert ./bootstrap/certs/\${API_DOMAIN}.pem --dry-run -o yaml | kubectl apply -f -
kubectl create secret tls https-webapp-secret -n istio-system --key ./bootstrap/certs/$\{DEMO_DOMAIN}-key.pem --cert ./bootstrap/certs/\${DEMO_DOMAIN}.pem --dry-run -o yaml | kubectl apply -f -
kubectl create secret tls stock-mtls-server-cert -n istio-system --key ./bootstrap/certs/server-key.pem --cert ./bootstrap/certs/server.pem --dry-run -o yaml | kubectl apply -f -
kubectl create secret tls stock-mtls-client-cert -n istio-system --key ./bootstrap/certs/client-key.pem --cert ./bootstrap/certs/client.pem --dry-run -o yaml | kubectl apply -f -
kubectl create secret generic stock-mtls-ca -n istio-system  --from-file=ca.crt=./bootstrap/certs/ca.pem --dry-run -o yaml | kubectl apply -f -
helm template istio-\${ISTIO_VERSION}/install/kubernetes/helm/istio --name istio --namespace istio-system  -f deploy/mesh/values.yaml > deploy/mesh/istio.yaml
kubectl apply -f deploy/mesh/istio.yaml
kubectl apply -f deploy/mesh/service/mandatory/namespace.yml
kubectl create secret tls stock-mtls-client-cert -n mesh --key ./bootstrap/certs/client-key.pem --cert ./bootstrap/certs/client.pem --dry-run -o yaml | kubectl apply -f -
kubectl create secret generic stock-mtls-ca -n mesh  --from-file=ca.crt=./bootstrap/certs/ca.pem --dry-run -o yaml | kubectl apply -f -
helm template deploy/mesh/injector templates/sidecar-injector-configmap.yaml --namespace istio-system -f deploy/mesh/values.yaml > deploy/mesh/sidecar-template.cm.yaml
kubectl apply -n istio-system -f deploy/mesh/sidecar-template.cm.yaml
`
export const istioInstallDescription = [
  { loc: [0, 11], title: 'Istio Installation' },
  { loc: [0, 1],
    title: 'Download Istio',
    note:
      'fetch the installer bundle, includes the istioctl cli binary, deployment helm chart and other tools'
  },
  {
    loc: [1, 2],
    title: 'Create Namespace',
    note:
      'Create the istio-system namespace, this is normally done in the helm chart but we do this so we can add secrets into the namespace pre-deployment'
  },
  {
    loc: [2, 8],
    title: 'Create Certificates',
    note:
      `Because we're using HTTPS and mTLS for the workshops, we need to ensure we have the required certs available for istio to consume in kubernetes`
  },
  {
    loc: [8, 9],
    title: 'Kubernetes Resources',
    note:
      '"helm template" will consume a values.yaml config and produced a number of templated resources, we store this is the file istio.yaml'
  },
  {
    loc: [9, 10],
    title: 'Kubectl apply',
    note:
      'Istio is deployed by running "kubectl apply -f istio.yaml" where istio.yaml will contain all of the required resources for the istio control plane'
  },
  {
    loc: [10, 11],
    title: 'Create Namespace',
    note:
      'because we have a mTLS demo available, we create the "mesh" namespace. This is where our microservices will be deployed'
  },
  {
    loc: [11, 13],
    title: 'Create mTLS secrets and configmaps',
    note:
      'For the sidecars to be able to utilise the mTLS certificates we need to make these available in the namespace that the sidecars will reside in'
  },
]
export const istioPods = `NAME                                     READY   STATUS      RESTARTS   AGE
grafana-774bf8cb47-pl745                 1/1     Running     0          50m
istio-citadel-86bc767f59-dcq92           1/1     Running     0          50m
istio-cleanup-secrets-f4zt6              0/1     Completed   0          50m
istio-egressgateway-667b5c785b-ghtgc     1/1     Running     0          49m
istio-galley-75679b695b-m42g7            1/1     Running     0          50m
istio-grafana-post-install-h4ckd         0/1     Completed   0          50m
istio-ingressgateway-fbd468d65-c7dff     1/1     Running     0          49m
istio-pilot-6bb6587696-bbfgb             2/2     Running     0          50m
istio-policy-98769c4cf-vxc95             2/2     Running     0          50m
istio-security-post-install-fh6n6        0/1     Completed   0          50m
istio-sidecar-injector-c8c4c568b-p42s2   1/1     Running     0          50m
istio-telemetry-fbc675f8c-8fbsf          2/2     Running     0          50m
istio-tracing-bc9c74857-s5sct            1/1     Running     0          50m
kiali-5688d9cb68-zwv6h                   1/1     Running     0          50m
prometheus-f556886b8-vm7l4               1/1     Running     0          50m
servicegraph-847997bbf-4swg7             1/1     Running     0          50m`
export const istioPodDescription = [
  { loc: [0, 18], title: 'Istio Control Plane' },
  { loc: [1, 2],
    title: 'Grafana',
    note:
      'Grafana is deployed as part of the istio deployment for displaying metrics from Prometheus, which are aggregated by Mixer'
  },
  {
    loc: [2, 3],
    title: 'Citadel',
    note:
      'Citadel is responsible for the issuing and rotation of mTLS certificates across the service mesh'
  },
  {
    loc: [4, 5],
    title: 'Egressgateway',
    note:
      'The egressgateway is responsible for handling egress traffic in the event a clear boundary is required for networking and security purposes.'
  },
  {
    loc: [5, 6],
    title: 'Galley',
    note:
      `Galley is responsible for ingesting CRDS deployed to kubernetes (stored in ETCD) and validing policy before it\'s sychronised across the service mesh via Pilot`
  },
  {
    loc: [7, 8],
    title: 'Ingressgateway',
    note:
      'The ingressgateway is responsible for all traffic coming into the service mesh, similar to the functionality of the nginx-ingress-controller',

  },
  {
    loc: [8, 9],
    title: 'Pilot',
    note: `Pilot is responsible for synchronising polices across all Envoy proxies`,
  },
  {
    loc: [9, 10],
    title: 'Mixer (Policy)',
    note: `The policy mechanism of mixer, deployed as a dedicated service. It is used by sidecars and gateways for validating requests and enforcing policies such as Quotas, rate-limiting and more.`,
  },
  {
    loc: [11, 12],
    title: 'Sidecar-Injector',
    note: `Handles the mutating webhook call during the application of service deployments into the mesh, and injects the corresponding sidecar deployment resource`,
  },
  {
    loc: [12, 13],
    title: 'Mixer (Telemetry)',
    note: `The Telemetry function of the Mixer service, deployed as a deperate microservice but same binary, dedicated to metric/log ingestion and handling`,
  },
  {
    loc: [13, 14],
    title: 'Tracing (Jaeger)',
    note: `Jaeger (all-in-one) deployment, storing distributed traces in-memory for demonstration purposes, ingests traces on the zipkin:9411 endpoint within the mesh`,
  },
  {
    loc: [14, 15],
    title: 'Kiali',
    note: `Observability tool for visualising the mesh topology and the health and status of intra-mesh interactions`,
  },
  {
    loc: [15, 16],
    title: 'Prometheus',
    note: `real-time metric collection, metrics and collected by Mixer and transformed into a prometheus compliant datastructure`,
  },
  {
    loc: [16, 17],
    title: 'ServiceGraph',
    note: `more mesh visibility tooling`,
  },
]

export const apiPods = `NAME                                    READY   STATUS    RESTARTS   AGE
api-auth-7c74776fb5-z29hx               2/2     Running   0          3d
api-information-58c99d8495-r48ls        2/2     Running   0          3d
api-pricing-745769f478-49rl7            2/2     Running   0          3d
api-pricing-failslow-6bdf64548d-xzsqg   2/2     Running   0          3d
api-pricing-slow-dd7894549-9txk8        2/2     Running   0          3d
api-product-68db7b844b-9nngl            2/2     Running   0          3d
api-rating-94dbc7575-6xfdq              2/2     Running   0          3d
api-rating-limited-778b85494c-kc95m     2/2     Running   0          3d
api-stock-5cb4bc8895-hbwqr              2/2     Running   0          3d
webapp-demo-54579b8b48-25p8t            2/2     Running   0          3d`