.PHONY: bootstrap build cluster-create cluster-delete
#❌⚠️✅
# COLORS
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
RED		 := $(shell tput -Txterm setaf 1)
CYAN	 := $(shell tput -Txterm setaf 6)
RESET  := $(shell tput -Txterm sgr0)
PROJECT_ID=developer-experience-239709
## initialise project environment
init:

## build project
build.webapp:
	go build -o webapp/bin/webapp ./webapp/cmd/webapp

## run project
run.webapp:
	webapp/bin/webapp

## start slidepack
run.slides:
	cd slides; npm run start

## install tekton to target cluster
tekton.install:
	kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user ben.ebsworth@digio.com.au --dry-run -o yaml | kubectl apply -f -
	sleep 3
	kubectl apply -f https://storage.googleapis.com/tekton-releases/latest/release.yaml
docker.registry.create:
	docker run -d -p 5000:5000 --name registry-srv -e REGISTRY_STORAGE_DELETE_ENABLED=true registry:2
clean.skaffold:
	pkill -f skaffold

cluster.gke.install:
	time gcloud container clusters create dev-xp \
		--zone="australia-southeast1-a" \
		--machine-type="n1-standard-2" \
		--num-nodes="3" \
		--project="${PROJECT_ID}" \
		--no-user-output-enabled \
		--scopes="https://www.googleapis.com/auth/cloud-platform"



###Help
## Show help
help:
	@echo ''
	@echo '######################### TRAINING MANAGER #########################'
	@echo ''
	@echo ''
	@echo 'Usage:'
	@echo ''
	@echo '  ${YELLOW}make${RESET} ${GREEN}<target>${RESET}'
	@echo ''
	@echo 'Targets:'
	@awk '/(^[a-zA-Z\-\.\_0-9]+:)|(^###[a-zA-Z]+)/ { \
		header = match($$1, /^###(.*)/); \
		if (header) { \
			title = substr($$1, 4, length($$1)); \
			printf "${CYAN}%s${RESET}\n", title; \
		} \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${YELLOW}%-$(TARGET_MAX_CHAR_NUM)s${RESET} ${GREEN}%s${RESET}\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)