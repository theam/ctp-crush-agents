FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl ca-certificates git bash build-essential \
 && rm -rf /var/lib/apt/lists/*

ENV GO_VERSION=1.25.0
RUN curl -fsSL https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz -o /tmp/go.tgz \
 && tar -C /usr/local -xzf /tmp/go.tgz \
 && rm /tmp/go.tgz

ENV PATH="/usr/local/go/bin:${PATH}" \
    GOBIN="/usr/local/bin"

RUN go install github.com/charmbracelet/crush@v0.7.2

ENTRYPOINT ["/bin/bash"]
