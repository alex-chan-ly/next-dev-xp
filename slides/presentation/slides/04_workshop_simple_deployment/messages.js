export const page1 = `
# Cluster Health

Check the status of your locally running cluster by running the following

\`kubectl get nodes\`
`
export const step2 = {
  one: `
We can deploy the services and all of the associated resources using the available Makefile in the root of the _istio-training_ repository.

Run the following:  

&nbsp;

\`make simple.deploy\`

&nbsp;

This will run \`kubectl apply -f\` on the _Kubernetes_ resources we have available in the **deploy/simple/services/** directory
`,
  three: `
Navigate to the following locally hosted demo webapp:

&nbsp;

[https://demo.training.local](https://demo.training.local)

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