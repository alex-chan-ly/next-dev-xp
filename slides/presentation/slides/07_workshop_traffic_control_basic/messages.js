export const step2 = {
  one: `If istio hasen't been installed yet, do so by running the following makefile command in the Makefile found at the root of the _istio-training_ repository.
  
  &nbsp;

  \`make istio.install\`
  `,
  two: `
We can deploy the services and all of the associated resources using the available Makefile in the root of the _istio-training_ repository.

Run the following:  

&nbsp;

\`make mesh.deploy\`

&nbsp;

This will run \`kubectl apply -f\` on the _Kubernetes_ resources we have available in the **deploy/mesh/** directory
`,
  three: `Open the demo application available here:

  &nbsp;

  https://demo.training.local

`,
  four: `Enable the Istio observability tooling, we'll this these to validate the success of our Istio policy changes for the microservice stack. Run the following:
  
  &nbsp;
  
  \`make mesh.observability\`
  `,
  five: `Rollback to **100%** v1 by running the following:
  
  &nbsp;

  \`kubectl apply -f deploy/workshop/03_traffic_control_basic/rating-v1-100.yaml\`
  `
}

export const task1 = `We need to route traffic to \`v2\` of the \`api-rating\` service, testing out a new feature which sets the color of the stars within the displayed ratings.

However we want to mitigate the impact to customers if we get unexpected results from the release. 

So we need to carry out a canary release, routing only **10%**
of traffic to \`v2\` of the service.

To do this run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/03_traffic_control_basic/rating-v2-10-90.yaml\`

&nbsp;

View the result on the demo application available [here](https://demo.training.local)
`
export const task2 = `
So after reviewing our avilable observability tooling, how successful was the release?

In the event of any concerns we can rollback the release by running the following:

&nbsp;

\`kubectl apply -f deploy/workshop/03_traffic_control_basic/rating-v1-100.yaml\`

&nbsp;
`

export const getPodsWithLabels = `NAME                                    READY   STATUS    RESTARTS   AGE   LABELS
api-auth-7c74776fb5-ddcgq               2/2     Running   0          3d    app=api-auth,version=v1
api-information-58c99d8495-wr8rw        2/2     Running   0          3d    app=api-information,version=v1
api-pricing-745769f478-z2m2g            2/2     Running   0          3d    app=api-pricing,mode=normal,version=v1
api-pricing-failslow-6bdf64548d-km2g6   2/2     Running   0          3d    app=api-pricing,mode=failslow,version=v2
api-pricing-slow-dd7894549-w79qn        2/2     Running   0          3d    app=api-pricing,mode=slow,version=v3
api-product-68db7b844b-gbfn2            2/2     Running   0          3d    app=api-product,version=v1
api-rating-94dbc7575-w6glr              2/2     Running   0          3d    app=api-rating,mode=normal,version=v1
api-rating-limited-7c46d47d4b-mq4lw     2/2     Running   0          3d    app=api-rating,mode=limited,version=v2
api-stock-7bbb97fbfd-lcs82              2/2     Running   0          3d    app=api-stock,mode=normal,version=v1
webapp-demo-54579b8b48-s8w8r            2/2     Running   0          3d    app=webapp-demo`
