FROM golang:1.12.4 as builder
LABEL maintainer="Ben Ebsworth <ben.ebsworth@gmail.com>"

WORKDIR /go/src/github.com/castlemilk/nextgen-developer-experience/webapp
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o app ./cmd/webapp/

FROM scratch
EXPOSE 8080
WORKDIR /root/
COPY --from=builder /go/src/github.com/castlemilk/nextgen-developer-experience/webapp/app .
COPY --from=builder /go/src/github.com/castlemilk/nextgen-developer-experience/webapp/pkg/webapp/homepage.html ./pkg/webapp/homepage.html
CMD [ "./app" ]