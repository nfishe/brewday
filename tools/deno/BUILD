load("@io_bazel_rules_docker//docker:docker.bzl", "docker_build")
docker_build(
    name = "deno",
    base = "@cc//image",
    entrypoint = ["/denoland/bin/deno"],
    tars = ["@deno//:tar"]
)

load("@io_bazel_rules_docker//contrib:test.bzl", "container_test")
container_test(
    name = "deno_test",
    configs = ["testdata/deno.yaml"],
    image = ":deno"
)