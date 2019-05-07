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

export const task1 = `In the earlier workshops we routed traffic to a canary release of the \`api-rating\` service which changed the rating star colors. Our objective in this task
is to do the same thing, but this time ONLY routing traffic from mobile users.

This gives us an opportunity to test out performance and user-experience for specific demographics and devices etc.

So what we'll do is route **20%** of traffic to \`v2\` of the \`api-rating\` service. 

To do this run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/04_traffic_control_advanced/mobile-canary-rating-v2.vs.yaml\`

&nbsp;

View the result on the demo application available [here](https://demo.training.local), try change the \`User-Agent\` header in the top navigation bar of the application.
`
export const task2 = `
So after reviewing our avilable observability tooling, how has this release performed?

Now rollout **100%** of traffic to \`v2\` of the \`api-rating\` service for mobile users.

A working policy can be found at

**deploy/workshop/04_traffic_control_advanced/mobile-100-rating-v2.vs.yaml**

To do this run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/04_traffic_control_advanced/mobile-100-rating-v2.vs.yaml\`

&nbsp;

Confirm that you see all products displaying red stars when presenting a mobile \`User-Agent\`, in the demo app [here](https://demo.training.local)
`

export const task3 = `
Envoy provides a number of loadbalancing algorithms, including; \`ROUND_ROBIN\`, \`RANDOM\`, \`LEAST_CONN\`, \`PASSTHROUGH\`, as well as persistent or sticky sessions.
This provides us some flexbility on how we manage traffic flow within our __Service Mesh__. 
Our goal in this task is to enable \`RANDOM\` loadbalancing and observe the effects

View the policy found in the training repository found at

**deploy/workshop/04_traffic_control_advanced/random-lb.yaml**

To apply this configuration to our __Service Mesh__ run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/04_traffic_control_advanced/random-lb.yaml\`

&nbsp;
`

export const task4 = `
Consistent Hash-based load balancing can be used to provide soft session affinity based on HTTP headers, cookies or other properties. 
In this task we aim to loadbalance in way, such that each product will consistently recieve the canary release.

This is achieved by having
product requests send through the header \`X-product-id: <product-number>\` to the __Service Mesh__.

The Consistent Hash-based load balancing employed by Envoy will then ensure that each product will be routed to a conistent API version.

View the policy found in the training repository found at

**deploy/workshop/04_traffic_control_advanced/sticky-lb.yaml**

To apply this configuration to our __Service Mesh__ run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/04_traffic_control_advanced/sticky-lb.yaml\`

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
