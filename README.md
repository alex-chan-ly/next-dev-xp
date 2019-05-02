# NEXT Generation Deveoper Experience

This repository aims to give a lightweight example of the end-to-end developer experience tools targetting a Kubernetes based environment. We aim to integrate the following core tools:

* **Skaffold** - glue between build, test and deployment. Enabling hot-loading and other eventing capability. Utilised by [Code Cloud]() for build + deploy capability.
* **Kustomize** - templating engine, similar to [Helm], but takes a different approach of managing template generation and contextualisation
* **Minikube** - local Kubernetes cluster. Enabling us to model our "live" production-like environment as closely as possible