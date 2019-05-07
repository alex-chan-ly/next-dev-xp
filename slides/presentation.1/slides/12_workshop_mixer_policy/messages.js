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
  one: `Rate limits and/or Quotas can be applied on a per-service basis.
Where we can ensure that services are consumable within desired bounds depending on the consumer. 

This is made possible through the Mixer componennt in Istio, which manages the policy that will be "looked up" by Envoy proxies to validate
requests are within the specified bounds of the defined limits.

Let's first apply a basic example of rate limited for the \`Rating API\`, this is done by running the following:

&nbsp;

\`kubectl apply -f deploy/workshop/08_mixer_policy\`

&nbsp;

If we then navigate to the [demo app](https://demo.training.local) and go to the waterfall application, select \`API --> Rating\`, \`Version --> v1\`.

Now we should see no \`503\` or \`429\` responses, ramp up the \`requests/s\` and lets see what happens.
`,
  two: `We've configured a rate limit of ~15 requets per 1 second window. 
  So as we approach this rate via the waterfall application, we should begin to see \`429\` responses. Which signifies we've hit the rate limit.
  
  Increase the rate limit \`maxAmount\` in the following file:

  &nbsp;

  \`deploy/workshop/08_mixer_policy/rating-rate-limit-handler.yaml\`

  &nbsp;

  reapply the configuration by running:

  &nbsp;

  \`kubectl apply -f deploy/workshop/08_mixer_policy\`

  &nbsp;

  Once again, ramp up the request rate in the waterfall app to the limit you've set. Do you see the expected behavior?

  
  `
}

export const codeSlideMemQuota = [
  { loc: [0, 22], title: 'MemQuota' },
  { loc: [1, 2],
    title: '',
    note: `Mixer Side Configuration - The memquota adapter can be used to support Istio’s quota management system.
    It is purposed for local use-only, storing quotas in memory without any HA ability (must run single Mixer instance). Instead use redisquota for production` },
  {
    loc: [6, 20],
    title: 'Params.Quota[]',
    note:
      'The set of known quotas'
  },
  {
    loc: [7, 20],
    title: 'Quota',
    note:
      'Defines a quota\'s limit and duration.'
  },
  {
    loc: [7, 8],
    title: 'Name',
    note:
      'The name of the quota'
  },
  {
    loc: [8, 9],
    title: 'maxAmount',
    note:
      'The upper limit for this quota, effectively the top level default for the quota.'
  },
  {
    loc: [10, 11],
    title: 'validDuration',
    note:
      `The amount of time allocated quota remains valid before 
it is automatically released. This is only meaningful for rate limit quotas, 
otherwise the value must be zero.`
  },
  {
    loc: [10, 20],
    title: 'overrides',
    note:
      `Defines an override value for a quota.
If no override matches a particular quota request, the default for the quota is used`
  },
  {
    loc: [11, 15],
    title: 'dimensions',
    note:
      `The specific dimensions for which this override applies. 
String representation of instance dimensions is used to check against configured dimensions.`
  },
  {
    loc: [15, 16],
    title: 'maxAmount',
    note:
      'The upper limit for this quota, overrides top-level value set.'
  },
  {
    loc: [16, 17],
    title: 'validDuration',
    note:
      'Overrides top level value set'
  },
]

export const codeSlideRule = [
  { loc: [0, 22],
    title: 'Rule',
    note: 'Mixer Side Configuration - defines when quota instance is dispatched to the memquota adapter.'
  },
  { 
    loc: [1, 2],
    title: 'Custom Resource Definition',
    note: `The rule tells Mixer to invoke the handler that is instantiated 
and pass it the object constructed using the instance defined. 
Effectively mapping the dimenions from the quota template to the given handler`
   },
  {
    loc: [6, 10],
    title: 'actions',
    note:
      'A list of actions'
  },
  {
    loc: [7, 10],
    title: 'action',
    note:
      'Action describes which Handler to invoke and what data to pass to it for processing.'
  },
  {
    loc: [7, 8],
    title: 'handler',
    note:
      'Required. Fully qualified name of the handler to invoke. Must match the name of a Handler.'
  },
  {
    loc: [8, 10],
    title: 'instances',
    note:
      'Required. Each value must match the fully qualified name of the Instances. Where an instance defines an instance of a particular template'
  },
]

export const codeSlideQuota = [
  { loc: [0, 22],
    title: 'Quota',
    note: 'Mixer Side Configuration - defines how quota is dimensioned by Mixer.' },
  { loc: [1, 2],
    title: 'Custom Resource Definition',
  },
  {
    loc: [3, 4],
    title: 'quota instance - name',
    note:
      'The quota instance name will be referenced in the Rule resource'
  },
  {
    loc: [3, 4],
    title: 'quota instance - namespace',
    note:
      'The quota instance namespace controls how different policies are usable/referencable by one another.'
  },
  {
    loc: [6, 10],
    title: 'dimensions',
    note:
      `The map of attributes to use from the quota template
for calculate qutoas on. These values will be passed to the MemQuota Adapter`
  },
  {
    loc: [7, 8],
    title: 'source',
    note:
      `use the "x-forwarded-for" header for the source value, if field not found then use "unknown" as value`
  },
  {
    loc: [8, 9],
    title: 'destination',
    note:
      `The destination will be set to the first non-empty value in 
destination.labels["app"], destination.service.host, or "unknown".`
  },
  {
    loc: [9, 10],
    title: 'destinationVersion',
    note:
      `set the destinatonVersion based off the destination label "version"`
  },
]

export const codeSlideQuotaSpec = [
  { loc: [0, 22], title: 'QuotaSpec', note: 'Specifies individual quota "charges" for matching requests, allowing for different quota charging and consumption rates' },
  { loc: [1, 2], title: 'Custom Resource Definition' },
  {
    loc: [3, 4],
    title: 'QuotaSpec name',
    note:
      'will be referenced by the QuotaSpecBinding'
  },
  {
    loc: [6, 26],
    title: 'rules/definitions',
    note:
      'List of rules to match requests, and the corresponding quotas to apply with their specific charge values'
  },
  {
    loc: [8, 14],
    title: 'request match selector',
    note:
      'Allows quota "charge" to be applied based off matched rules, these roles are OR\'d together'
  },
  {
    loc: [20, 23],
    title: 'quotas - read',
    note:
      'Gives the quota charge a name and allows specification of a "charge" value'
  },
  {
    loc: [23, 26],
    title: 'quotas - write',
    note:
      'able to specify a different quota "charge" value. '
  },
]

export const codeSlideQuotaSpecBinding = [
  { loc: [0, 22], title: 'QuotaSpecBinding' },
  { loc: [1, 2], 
    title: 'Custom Resource Definition',
    note: 'QuotaSpecBinding defines the binding between QuotaSpecs and one or more' },
  {
    loc: [6, 9],
    title: 'quotaSpecs',
    note:
      'Specifies a list of QuotaSpec\'s these will be binded to the list of IstioService resources'
  },
  {
    loc: [9, 12],
    title: 'services',
    note:
      'Specifies a list of IstioService resources these will be binded to the list of QuotaSpec resources'
  },
]
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
