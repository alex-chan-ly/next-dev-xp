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
}

export const task1 = {
  one: `Envoy provides a mechanism to do JWT authentication for validating a given users identity when making requests to a microservice behind the proxy.
This allows us to give fine grained control to service within istio without the specific service ever having to be aware of the requests authorization. 
The __Envoy Sidecar__ will handle the critical components of the JWT validity, including the following:

* **audience** - a list of JWT audiences allowed to access the targetted service. These could be thought of as scopes or groups of users or even other microservices within the service mesh
* **expiry time** - the time that the JWT token is valid for, ensuring that expired tokens won't be usable for end-user authorization
* **signature verification** - Fetching the jwks keys for RSA signature verification, the mechanism of validating the source of the JWT
* **issuer** - the principal that issued the JWT, usually a URL or an email address

With all of these features we have a mechanism in place for managing JWT authentication between services, whether they be internal or external to the _Service Mesh_.
`,
  two: `To apply the required policy run the following command from the top of the training directory:

  &nbsp;
  
  \`kubectl apply -f deploy/workshop/07_security_authentication/end-user-authorization.yaml\`
  
  &nbsp;
  
To demonstrate whats we've just enabled within the _Service Mesh_ we need to understand what "users" or "identities" we'll use within the JWT tokens we present during a request to the microservices.

* **admin** - Has the required audience of "admin", this is what our end-user authorization policy is set to allow to the \`Rating API\`
* **training** - Another user which does not have the right audience, and consequently priviledge, to access the \`Rating API\`

We will login as both users and see what happens in the product app of our demo application [here](https://demo.training.local)
`,
  three: `With the policy applied, lets test it out. 
  
  From the prododuct catalogue in the [demo app](https://demo.training.local), click login in the top right. 
  
  Login as the "training" user (password is \`password\`) first, the credentials are as follows:

* **username**: training
* **password**: password

Now view the \`JWT\` token that was generated and stored in the client application 
by clicking to the user icon in the top right and selecting "_Show JWT_" from the dropdown. 

This \`JWT\` can be pasted into the [jwt.io](https://jwt.io) website to unpack the metadata imbedded into the \`JWT\`.

Now lets try and see what happens if we access the \`Stock API\` with this \`JWT\`. 

Go to \`Version --> v4\`, this will get the \`Product API\` to make a subsequent call to this \`Stock API\` with the given \`JWT\`. What do you see when you click a card?`,
  four: `Now login to the [demo app](https://demo.training.local) as the "admin" user (password is \`password\`). 
  
  This time we'll be presenting the authorized __audience__ of \`admin\` to acess the \`Stock API\`.
  
  When you click a card you should now see an _Admin View_ or "secured" area of the UI, 
  where the additionally data is now available to the logged-in admin user.

  View the contents of the \`JWT\` token we are presenting in the request in [jwt.io](https://jwt.io) and confirm the __audience__ field is as expected.
  `
}

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

export const codeSlideOriginAuthenticationJWT = [
  { loc: [0, 18],
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
    loc: [3, 4],
    title: 'CRD Resource Name',
    note:
      `name the resource in a way that contextualises it to the function it serves`
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
    title: 'Peers',
    note:
      `Specifies the type of authentication to be used for the peer connection. In this case we're defining to use mTLS`
  },
  {
    loc: [10, 19],
    title: 'origin',
    note:
      `The origins: section defines authentication methods and associated parameters supported for origin authentication. 
Istio only supports JWT origin authentication. However, a policy can list multiple JWTs by different issuers. 
Similar to peer authentication, only one of the listed methods must be satisfied for the authentication to pass.

      `
  },
  {
    loc: [12, 13],
    title: 'issuer',
    note:
      `
      Identifies the issuer that issued the JWT. See issuer Usually a URL or an email address.

      Example: "https://securetoken.google.com" or "1234567-compute@developer.gserviceaccount.com"
      `
  },
  {
    loc: [13, 14],
    title: 'jwkUri',
    note:
      `
      URL of the provider’s public key set to validate signature of the JWT
      `
  },
  {
    loc: [14, 16],
    title: 'jwt_headers',
    note:
      `
      JWT is sent in a request header. header represents the header name.
      `
  },
  {
    loc: [16, 18],
    title: 'audiences',
    note:
      `
      The list of JWT audiences. that are allowed to access. A JWT containing any of these audiences will be accepted.

      The service name will be accepted if audiences is empty.
      `
  },
  
  
  {
    loc: [18, 19],
    title: 'originIsOptional',
    note:
      `Set this flag to true to accept request (for origin authentication perspective), 
even when none of the origin authentication methods defined above satisfied. 
Typically, this is used to delay the rejection decision to next layer (e.g authorization). 
      `
  },
  {
    loc: [19, 20],
    title: 'principleBinding',
    note:
      `Define whether peer or origin identity should be use for principal. 
Default value is USE_PEER. If peer (or orgin) identity is not available, 
either because of peer/origin authentication is not defined, or failed, 
principal will be left unset. 
      `
  }
]