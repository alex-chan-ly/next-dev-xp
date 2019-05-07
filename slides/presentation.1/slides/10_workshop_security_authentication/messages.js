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

export const task1 = {
  one: `mTLS is enabled globally, as part of the istio deployment. So in order to explore what non-mTLS enabled communication looks like we need to disable it.

In this task we will disable mTLS connectivity between the __ingressgateway__ and the specific \`api-rating\` microservice __sidecar__.

To apply the required policy run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/07_security_authentication/api-rating-no-mtls.yaml\`

&nbsp;

Now curl the service to confirm its still functioning as expected:

&nbsp;

\`curl https://api.training.local/api/rating/v1/rating/1 \`


`,
  two: `With mTLS disabled, we should be able to "sniff" traffic going across the network within the __Service Mesh__. 
To do this we will use \`tcpdump\` on the __sidecar__ proxy. This is achieved by running the following command:

&nbsp;

\`kubectl exec -it -n mesh $(kubectl get pod -l version=v1,app=api-rating -n mesh -o jsonpath='{.items[0].metadata.name}') -c istio-proxy -- sudo tcpdump -vvvv -A -i eth0 'dst port 80'\`

&nbsp;

Make a request to the \`api-rating\` service with \`curl https://api.training.local/api/rating/v1/rating/1\` and you should see something like the below output in your tcpdump.

&nbsp;

\`\`\`yaml
...
GET /api/rating/v1/rating/1 HTTP/1.1
host: api.training.local
user-agent: curl/7.54.0
accept: */*
x-forwarded-for: 192.168.65.3
x-forwarded-proto: https
x-envoy-internal: true
...
\`\`\`
  
`
}
export const task2 = { one: `
Let's now protect the intra-mesh communication with proxy-to-proxy mTLS. 
To do this apply the following configuration:

&nbsp;

\`kubectl apply -f deploy/workshop/07_security_authentication/api-rating-mtls.yaml\`

&nbsp;

This will configure the __ingressgateway__ to use mTLS when sending traffic to the microservice's __sidecar__.

`,
  two: `With mTLS enabled, we shouldn't be able to "sniff" traffic going across the network.
To do demonstrate the effect, this we will use \`tcpdump\` on the __sidecar__ proxy. This is achieved by running the following command:

&nbsp;

\`kubectl exec -it -n mesh $(kubectl get pod -l version=v1,app=api-rating -n mesh -o jsonpath='{.items[0].metadata.name}') -c istio-proxy -- sudo tcpdump -vvvv -A -i eth0 'dst port 80'\`

&nbsp;

Make a request to the \`api-rating\` service with 

&nbsp;

\`curl https://api.training.local/api/rating/v1/rating/1\` 

&nbsp;

You should no longer be able to see any disernable information about the traffic being sent across the network.
`
}

export const task3 = {
  one: `
Circuit Breaking provides a mechanism to "protect" or limit traffic going to a specific service, preventing it from becoming overloaded, but also limiting
the impact on the end-to-end microservice call stack. Where instead of a service thats overloaded introducing significant latency into the overall
response time, requests to overloaded services can fail fast.

What we aim to demonstrate in this task, is how we can remove latency spikes by __failing fast__ and removing the service from the pool of backend instances.
This is known as **__Pool Ejection__**

To do this, lets apply the base policy we used in \`Task1\`:

&nbsp;
  
\`kubectl apply -f deploy/workshop/05_service_resiliency/api-rating-v3-base.yaml\`

&nbsp;

Now navigate to the [demo app](https://demo.training.local) and apply some load using the waterfall function. Specially hit \`v3\` of the \`Product API\`.

This will in turn call the \`Rating API\`, this should result in a significant latency spike as load increases.`,
  two: `Now we can apply s circuit breaking policy to limit requests to the serivice, and lets make some traffic load again.

View the policy found in the training repository found at

**deploy/workshop/05_service_resiliency/api-rating-v3-circuit-breaking.yaml**

&nbsp;

To apply this configuration to our __Service Mesh__ run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/05_service_resiliency/api-rating-v3-circuit-breaking.yaml\`

&nbsp;

This time we should see that the significant latency spike is completely mitigated when load is applied to \`v3\` of the \`Product API\`, which makes a call to the \`Rating API\` service which has a built-in rate limit.`,
  three: `Another example we can demonstrate to see the mehchanism to "protect"
the microservice is by hitting the \`api-rating\` service directly, instead of going through the frontend \`api-product\` service.

To do this, navigate to the waterfall app and select \`API --> rating\` and \`Version -> v1\`

Then we'll applied the configuration found here:

**deploy/workshop/05_service_resiliency/api-rating-v1-circuit-breaking.yaml**

&nbsp;

To apply this configuration to our __Service Mesh__ run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/05_service_resiliency/api-rating-v1-circuit-breaking.yaml\`

&nbsp;

Scale up the \`request/s\` rate on the waterfall application and observe the effect, you should see \`503\` errors due to the configured circuit-breaking properties.

Where we are limiting the number of concurrent requests going to the service.`

}

export const task4 = `
Outlier detection and ejection is the process of dynamically determining whether some number of hosts in an upstream cluster 
are performing unlike the others and removing them from the healthy load balancing set. 
Performance might be along different axes such as consecutive failures, temporal success rate, temporal latency, etc.

We will use this capability to remove the rate limited microservice \`api-rating [v3]\`, from the pool of backends. 
Effecively "ejecting" it from the cluster of instances.

The criteria we'll use is when the service has returned 2 consecutive errors in a 10s interval. And we'll "eject" it for 10 seconds.
To apply this configuration to our __Service Mesh__ run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/05_service_resiliency/api-rating-v3-50-50-ejection.yaml\`

&nbsp;

To see the effect, navigate to the waterfall app and select \`API --> rating\` and \`Version -> v1\` and scale up the \`requests/s\`.

You should see spikes in errors occuring roughly at the interval of our ejection time, set by the \`baseEjectionTime\` value.`

export const task5 = `
Having completed \`Task4\`, we've seen that we can remove poorly peforming microservices, however we are still seeing \`503\` errors at the client side.
In order to further improve or mitigate this, and in tern improving the "resiliency" of our service, we can combine multiple features offered by Envoy.
Lets go through these as follows:

* **Circuit Breaking** - prevent or limit the level of request concurrency going to backend instances
* **Outlier Detection** - detect and eject instances from the loadbalacing pool
* **Retries** - retry the request to another instance, in the event of a circuit-break or pool ejection

To apply the policy which combines all of these __Envoy__ featires to our __Service Mesh__ run the following command from the top of the training directory:

&nbsp;

\`kubectl apply -f deploy/workshop/05_service_resiliency/api-rating-full-resiliency.yaml\`

&nbsp;

Open up the [demo app](https://demo.training.local) and see if you recieve any more \`503\` response from the \`Rating API\` using the waterfall function.

`

export const getPodsWithLabels = `NAME                                    READY   STATUS    RESTARTS   AGE   LABELS
NAME                                    READY   STATUS    RESTARTS   AGE   LABELS
api-auth-7c74776fb5-hxv72               2/2     Running   0          27m   app=api-auth,version=v1
api-information-58c99d8495-krs4q        2/2     Running   0          27m   app=api-information,version=v1
api-pricing-745769f478-2qpth            2/2     Running   0          27m   app=api-pricing,mode=normal,version=v1
api-pricing-failslow-6bdf64548d-dm4dz   2/2     Running   0          27m   app=api-pricing,mode=failslow,version=v2
api-pricing-slow-dd7894549-trk5r        2/2     Running   0          27m   app=api-pricing,mode=slow,version=v3
api-product-68db7b844b-2jvpn            2/2     Running   0          27m   app=api-product,version=v1
api-rating-black-ffc78b856-tzq99        2/2     Running   0          27m   app=api-rating,color=black,mode=normal,version=v1
api-rating-limited-597c55f866-m6s5d     2/2     Running   0          27m   app=api-rating,color=red,mode=limited,version=v3
api-rating-red-58bdfb64cf-4mtk2         2/2     Running   0          27m   app=api-rating,color=red,mode=normal,version=v2
api-stock-7bbb97fbfd-92tk9              2/2     Running   0          27m   app=api-stock,mode=normal,version=v1
webapp-demo-54579b8b48-klvr6            2/2     Running   0          27m   app=webapp-demo`
