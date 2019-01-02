workspace(name = "brewday")

load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
git_repository(
    name = "io_bazel_rules_docker",
    commit = "5eb0728594013d746959c4bd21aa4b0c3e3848d8",
    remote = "https://github.com/bazelbuild/rules_docker.git",
)
load(
    "@io_bazel_rules_docker//docker:docker.bzl",
    "docker_pull",
    "docker_repositories",
)

docker_pull(
    name = "cc",
    registry = "gcr.io",
    repository = "distroless/cc",
    digest = "sha256:af71326844a672decdbd6779e3d25db49ce2609028204af160d3248f2a729fa4"
)

docker_repositories()

new_local_repository(
    name = "deno",
    path = "third_party/deno-v0.2.5",
    build_file = "BUILD.deno"
)